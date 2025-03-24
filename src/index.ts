import express, { Request, Response } from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { UserModel } from "./db";
import { z } from "zod";

const app = express();
app.use(express.json());


app.post("/api/v1/sigin", (req,res) =>{
    const username = req.body().username;
    const password = req.body().password;
})
const userValidation = z.object({
    username: z.string().min(3).max(100), 
    password: z.string().min(3).max(100), 
})

app.post("/api/v1/signup", async (req :Request, res :Response) =>{

   

  

})

app.post("/api/v1/content", (req,res)=>{

})
app.get("/api/v1/content", (req,res)=>{

})
app.delete("/api/v1/content", (req,res)=>{

})
app.get("api/brain/:shareLink", (req,res) =>{
    
})
app.post("api/brain/:shareLink", (req,res) =>{

})

app.listen(3000);
    
