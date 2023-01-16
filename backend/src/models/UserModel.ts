import { Schema, model } from "mongoose";

interface IUserModel {
    name: string,
    email: string,
    password: string,
}

const UserModel = new Schema<IUserModel>({
    name: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true 
    }, 
}, {timestamps: true})

const User = model<IUserModel>('User', UserModel, "users")

export default User;
