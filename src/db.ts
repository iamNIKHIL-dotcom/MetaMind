import mongoose, { model, mongo, Schema } from "mongoose";
import { config } from "./config"

mongoose.connect(config.MONGODB_URI)

const UserSchema = new Schema({

    username : {type : String, unique : true},
    password : {type : String,}

})
export const UserModel = model("User", UserSchema);

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{
        type: String,
        lowercase: true,
        trim: true
      }],
    type: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true },

})

const LinkSchema = new Schema({
    hash: String,
    userId: {type: mongoose.Types.ObjectId, ref: 'User', required: true, unique: true },
})

export const LinkModel = model("Link", LinkSchema);
export const ContentModel = model("Content", ContentSchema);