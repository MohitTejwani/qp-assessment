import { DataTypes } from "sequelize";
import sequelize  from "../config/db";

const Grocery = sequelize.define(
  "Grocery",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // Store prices with two decimal places
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    inventoryLevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  }
);
Grocery.sync();

export default Grocery;