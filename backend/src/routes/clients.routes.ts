import { Router } from "express";
import ClientController from "../controllers/ClientController"

const clientRouter = Router();

clientRouter.get("/client", ClientController.searchAll)
clientRouter.get("/client/:id", ClientController.searchOne)
clientRouter.get("/client", ClientController.searchBy)
clientRouter.post("/client", ClientController.create)
clientRouter.put("/client/:id", ClientController.update)
clientRouter.delete("/client/:id", ClientController.delete)

export default clientRouter;