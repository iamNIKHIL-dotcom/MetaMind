import mongoose, { model, mongo, Schema } from "mongoose";






const UserSchema = new Schema({

    username : {type : String, unique : true},

})
export const UserModel = model("User", UserSchema);
