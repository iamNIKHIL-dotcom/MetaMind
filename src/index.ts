import express, { Request, Response, NextFunction, RequestHandler } from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { UserModel, ContentModel } from "./db";
import { config } from "./config";
import { z } from "zod";
// import { JWT_PASSWORD } from "./config"
import cors from "cors"

import { signupSchema } from "./validations";
import { userMiddleware } from "./middleware";

const app = express();
app.use(express.json());
app.use(cors());

const validate = (schema: z.ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({
        message: "Validation failed",
        errors: error.errors
      });

      res.status(500).json({ message: "Internal server error" });
    }
  };
}

  app.post("/api/v1/signup", validate(signupSchema), async (req, res) => {
    const { username, password } = req.body;

    try {
      await UserModel.create({ username, password });
      res.json({ message: "User signed up" });
      console.log(" user sign up");
    } catch (e) {
      res.status(409).json({ message: "User already exists" });
    }

  })


  app.post("/api/v1/signin", (async (req: Request, res: Response)  => {

    const { username, password } = req.body;
    const existingUser = await UserModel.findOne({ username, password });

    if(existingUser){
     
      const token = jwt.sign({
        id : existingUser._id
      }, config.JWT_PASSWORD);
  
       res.json({
        token
      })
    }

    else{
      return res.json({
        msg : "Incorrect Credentials"
      })
    }


  }) as RequestHandler)

  app.post("/api/v1/content",userMiddleware,async (req, res) => {
    const { link, type, title, tags } = req.body;


    try {
      await ContentModel.create({
          link,
          type,
          title,
          //@ts-ignore
          userId: req.userId,
          tags
      });

      res.json({ message: "Content added" });
      
  } catch (error) {
      res.status(500).json({ 
          message: "Error adding content",
          //@ts-ignore
          error: error.message 
      });
  }

  })
  app.get("/api/v1/content", (req, res) => {

  })
  app.delete("/api/v1/content", (req, res) => {

  })
  app.get("api/brain/:shareLink", (req, res) => {

  })
  app.post("api/brain/:shareLink", (req, res) => {

  })

  app.listen(3000);
  mongoose.connect(config.MONGODB_URI)


