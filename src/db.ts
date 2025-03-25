import mongoose, { model, mongo, Schema } from "mongoose";
import { config } from "./config"

mongoose.connect(config.MONGODB_URI)

const UserSchema = new Schema({

    username : {type : String, unique : true},
    password : {type : String,}

})
export const UserModel = model("User", UserSchema);
