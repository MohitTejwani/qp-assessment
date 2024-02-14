import OrderModel from "../models/order.model";
import GroceryModel from "../models/grocery.model";
import { Op, literal } from "sequelize";
import sequelize  from "../config/db";

export const orderService =  async(groceryDetails:any)=>{
    try {
        const checkGrocery = await GroceryModel.findAll({
            where: {
              [Op.and]: [
                // Ensure IDs exist in the database:
                { id: { [Op.in]: groceryDetails.items } },
                // Inventory level is 1 or more:
                { inventory: { [Op.gte]: 1 } },
              ],
            },
          });
          if(!checkGrocery) return {isError:true, response:"Not able to book order"}

        const result = await OrderModel.create(groceryDetails);
        const inventoryCol:any = sequelize.col('inventory');
        
        GroceryModel.update(
            { inventory: sequelize.fn('COALESCE', inventoryCol - 1, 0) },           {
              where: {
                [Op.and]: [
                  { id: { [Op.in]: groceryDetails.items } }, // Ensure IDs exist in the database
                  { inventory: { [Op.gte]: 1 } }, // Ensure sufficient inventory
                ],
              },
            }
          );
        
        return {isError:false,response:result}
    } catch (error) {
        return {isError:true,response: error}
    }
}