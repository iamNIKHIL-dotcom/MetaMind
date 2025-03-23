import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";


const app = express();
app.use(express.json());


app.post("/api/v1/sigin", (req,res) =>{
    const username = req.body().username;
    const password = req.body().password;
})

app.post("/api/v1/signup", async (req,res) =>{
    const username = req.body().username;
    const password = req.body().password;
    //zod validation

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