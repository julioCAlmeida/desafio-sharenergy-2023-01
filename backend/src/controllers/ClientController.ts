import { Request, Response } from "express"
import Client from "../models/ClientModel";
import AppError from '../utils/AppError';

class ClientController {
    async searchAll(req: Request, res: Response): Promise<Response> {
        try {
            const client = await Client.find().populate("user")
            return res.json(client)
        } catch (error) {
            return res.status(404).json({ message: error })
        } 
    }

    async searchOne(req: Request, res: Response): Promise<Response> {
        try {
            const id = req.params.id

            const findClientById = await Client.findById(id)

            if(findClientById) {
                return res.json(findClientById)
            } else {
                return res.status(404).end()
            }
        } catch (error) {
            return res.status(404).json({message: error})
        }
    }

    async searchBy (req: Request, res: Response): Promise<Response> {
        const { name } = req.body

        const findClientByName = await Client.find(name)
        return res.json(findClientByName)
    }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { email } = req.body

            const checkEmailExists = await Client.findOne({ email })

            if(checkEmailExists) {
                throw new AppError("E-mail está em uso")
            }

            const userCreted = await Client.create(req.body)
            return res.json(userCreted)

        } catch (error) {
            return res.status(404).json({message: error})
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params
            const { name, email, phone, adress } = req.body

            const checkClientExists = await Client.findById(id)

            if(!checkClientExists) {
                throw new AppError("Usuário não encontrado")
            }

            await Client.findByIdAndUpdate(id, {name: name, email: email, phone: phone, adress: adress} )
            return res.json("Usuário atualizado com sucesso!")
            
        } catch (error) {
            return res.status(404).json({message: error})
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params

            const checkClientExists = await Client.findById(id)

            if(!checkClientExists) {
                throw new AppError("Usuário não encontrado")
            }

            await Client.findByIdAndDelete(id)
            return res.json("Usuário foi deletado")

        } catch (error) {
            return res.status(404).json({message: error})
        }
       
    }
}

export default new ClientController();