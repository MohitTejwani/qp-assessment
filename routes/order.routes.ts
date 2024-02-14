import { Router } from "express";
const routes = Router();
import { order } from "../controllers/order.controller";
import verify from "../middleware/jwt.auth";

routes.post("/",verify, order);

export default routes;
