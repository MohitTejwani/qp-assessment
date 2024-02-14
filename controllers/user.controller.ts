import { Request, Response, response } from 'express';
import {storeUserService, loginUserService} from "../servicies/user.service";
export const storeUser = async(req: Request,res: Response)=>{
    try {
        const user =  await storeUserService(req.body);
        if(user?.isError){
            return res.status(400).json({message:user.response})
        }
        return  res.status(201).send("User created!!!")

    } catch (error) {
      return  res.status(500).json({message:error})
    }
}

export const userLogin = async(req:Request,res:Response)=>{
    try {
        const user =  await loginUserService(req.body);
        if(user?.isError){
            res.status(400).json({message:user.response})
        }
        res.status(201).json({response:user})

    } catch (error) {
        res.status(500).json({message:error})
    }
}