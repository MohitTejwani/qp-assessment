import { IStoreUser } from "./interface/user.intergace"
import UserModel from "../models/user.model";
const { Op } = require("sequelize");
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const storeUserService =  async(userDetails:any)=>{
    try {
        const result = await UserModel.create(userDetails)
        return {isError:false,response:result}
    } catch (error) {
        return {isError:true,response: error}
    }
}
export const loginUserService =  async(userDetails:any)=>{
    try {
        const { username,password} = userDetails;
        const isUserExist:any = await UserModel.findOne({where:{
            [Op.and]:[{username},{password}]
        }});
        if(!isUserExist){
            return {isError:true,response:"Invalid username password"}
        }
        const token = jwt.sign({ id: isUserExist?.id }, "process.env.JWT_SECRET", { expiresIn: 3600 * 12 });
        return {isError:false,token}
    } catch (error) {
        return {isError:true,response: error}
    }
}