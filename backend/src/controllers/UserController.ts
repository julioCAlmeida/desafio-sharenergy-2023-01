
import { Request, Response } from "express";
import UserModel  from '../models/UserModel';
import AppError from "../utils/AppError";

import { hash } from "bcrypt";

class UserController {
    async searchAll(req: Request, res: Response): Promise<Response> {
        const user = await UserModel.find()
        return res.send(user)
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { name, email, password } = req.body
    
            const checkEmailExists = await UserModel.findOne({ email: email })
    
            if(checkEmailExists) {
                throw new AppError("E-mail está em uso")
            }

            const hashPassword = await hash(password, 8)
    
            const userCreated = await UserModel.create({name: name, email: email, password: hashPassword})

            return res.json(userCreated)
            
        } catch (error) {
            return res.status(404).json({message: error})
        }
    }
}

export default new UserController();