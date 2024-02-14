import { Router } from "express";
const routes = Router();
import { storeGrocery, getAllGrocery, removeGroceryById, updateGrocery } from "../controllers/grocery.controller";
routes.post("/create", storeGrocery);
routes.get("/",getAllGrocery);
routes.delete("/delete/:id",removeGroceryById);
routes.patch("/update",updateGrocery);
export default routes;
