import { Schema, model, Types } from "mongoose";

interface IClientModel {
    name: string,
    email: string,
    phone: string,
    adress: string,
    user: {
       type: Types.ObjectId,
       ref: "User",
       required: true
    }
}
const ClientModel = new Schema<IClientModel>({
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    phone: {
        type: String, 
        required: true
    },
    adress: {
        type: String, 
        required: true
    }, 
    user: {
        type: Types.ObjectId,
        ref: "User",
        required: true
    }   
}, {timestamps: true})

const Client = model<IClientModel>("Client", ClientModel, "clients")

export default Client;
