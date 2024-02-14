import { Request, Response, response } from "express";
import { orderService } from "../servicies/order.service";
export const order = async (req: Request, res: Response) => {
  try {
    const result = await orderService(req.body);
    if (result?.isError) {
      res.status(400).json({ message: result.response });
    }
    res.status(201).send("order created!!!");
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
