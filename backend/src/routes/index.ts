import { Router } from "express";

import clientRoutes from "./clients.routes"
import userRoutes from"./users.routes"

const routes = Router();

routes.use("/", clientRoutes);
routes.use("/", userRoutes);

export default routes;