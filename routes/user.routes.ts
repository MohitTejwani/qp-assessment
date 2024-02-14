import { Router } from "express";
const routes = Router();
import { storeUser,userLogin } from "../controllers/user.controller";
routes.post("/create", storeUser);
routes.post("/login", userLogin);

export default routes;
