import express from "express";
import dotenv from "dotenv";
import sequelize  from "./config/db"
import cors from "cors";
import userRoutes from "./routes/user.routes";
import groceryRoutes from "./routes/grocery.routes";
import orderRoutes from "./routes/order.routes";

const app = express();
dotenv.config();

// middleware
// app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use("/user",userRoutes);
app.use('/grocery', groceryRoutes);
app.use('/order',orderRoutes);

(async function (){
  try {
    await sequelize
    .authenticate()
    .then(() => {
      console.log(`Database connected to discover`);
    })
    .catch((err) => {
      console.log(err);
    });  
      app.listen(process.env.PORT, () => {
      console.log(`listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})()
