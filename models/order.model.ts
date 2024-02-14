import { DataTypes } from "sequelize";
import sequelize  from "../config/db";
import User from "./user.model";

const Order = sequelize.define("Order", {
    userId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: 'id',
        },
      },
      items: {
        type: DataTypes.JSON, // Store order items as a JSON array
      },
      orderDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // Set order date on creation
      }
});
Order.sync();

export default Order;