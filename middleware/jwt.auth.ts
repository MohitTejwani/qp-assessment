import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const verify = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token: any = req.headers.authorization?.split(" ")[1];
    if (!token) res.status(400).send("Token missing");
    const decode: any = jwt.verify(token, "process.env.JWT_SECRET");
    if (!decode) res.status(401).send("Invalid token");
    req.body.userId = decode.id;
    next();
  } catch (error) {
    res.status(500).json({ messaage: error });
  }
};
export default verify;
