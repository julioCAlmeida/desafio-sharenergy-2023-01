import { Router } from 'express';
import UserController from '../controllers/UserController';

const userRouter = Router()

userRouter.get("/user", UserController.searchAll)
userRouter.post("/user", UserController.create)

export default userRouter;