import GroceryModel from "../models/grocery.model";
const { Op } = require("sequelize");

export const storeGroceryService =  async(groceryDetails:any)=>{
    try {
        const isExist = await GroceryModel.findAll({where:{
            name:groceryDetails.name
        }});
        if(isExist.length) return {isError:true, response:"Grocery already exist"}
        const result = await GroceryModel.create(groceryDetails)
        return {isError:false,response:result}
    } catch (error) {
        return {isError:true,response: error}
    }
}
export const getAllGroceryService = async()=>{
    try {
        const result = await GroceryModel.findAll();
        return {isError:false,response:result}
    } catch (error) {
        return {isError:true,response: error}
    }
}
export  const removeGroceryByIdService = async(id:any)=>{
    try {
        if(typeof id == "number"){
            id = [id]
        }
        const result = await GroceryModel.destroy({
            where: {
              id: {
                [Op.in]: id,
              },
            },
          });
        return {isError:false,response:result}
    } catch (error) {
        return {isError:true,response: error}
    }
}
export const updateGroceryService =async(id:String, groceryDetails:any)=>{
    try {
      
        const result = await GroceryModel.update(
            {
              name: groceryDetails.name,
              price: groceryDetails.price,
            },
            {
              where: {
                id,
              },
            }
          );
        return {isError:false,response:result}
    } catch (error) {
        return {isError:true,response: error}
    }
}