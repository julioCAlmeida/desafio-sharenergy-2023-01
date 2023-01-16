import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import connection from 'dotenv';

import routes from "./routes"

connection.config()

class App {
    public express: express.Application

    public constructor() {
        this.express = express()
        this.database()
        this.middlewares()
        this.routes()
    }

    private middlewares(): void {
        this.express.use(express.json())
    }

    private database(): void {
        const DB_USER = process.env.DB_USER
        const DB_PASSWORD = process.env.DB_PASSWORD

        mongoose.set("strictQuery", true)
        mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@user.1qhriw7.mongodb.net/?retryWrites=true&w=majority`)
            .then(() => {
                console.log("MongoDB connected")
            })
            .catch((error) => {
                console.log("Erro em db connection", error.message)
            });
    }

    private routes(): void {
        this.express.use(routes)
    }
}

export default new App().express;