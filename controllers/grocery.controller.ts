import { Request, Response, response } from 'express';
import { storeGroceryService,getAllGroceryService, removeGroceryByIdService, updateGroceryService} from "../servicies/grocery.service";
export const storeGrocery = async(req: Request,res: Response)=>{
    try {
        const grocery = await storeGroceryService(req.body);
        if(grocery?.isError){
            res.status(400).json({message:grocery.response})
        }
        res.status(201).send("Grocery created!!!")

    } catch (error) {
        res.status(500).json({message:error})
    }
}
export const getAllGrocery = async(req: Request,res: Response)=>{
    try {
        const grocery = await getAllGroceryService();
        if(grocery?.isError){
            res.status(400).json({message:grocery.response})
        }
        res.status(200).json({response:grocery});

    } catch (error) {
        res.status(500).json({message:error})
    }
}
export const removeGroceryById = async(req: Request,res: Response)=>{
    try {
        const grocery = await removeGroceryByIdService(req.body.id);
        if(grocery?.isError){
            res.status(400).json({message:grocery.response})
        }
        res.status(200).json({response:grocery});

    } catch (error) {
        res.status(500).json({message:error})
    }
}

export const updateGrocery =async(req: Request,res: Response)=>{
    try {
        if(!req.params.id) res.status(400).json({message:"Grocery details missing"})
        const grocery = await updateGroceryService(req.params.id,req.body);
        if(grocery?.isError){
            res.status(400).json({message:grocery.response})
        }
        res.status(200).json({response:grocery});

    } catch (error) {
        res.status(500).json({message:error})
    }
}