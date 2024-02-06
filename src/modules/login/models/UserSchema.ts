/***************************************
 * Author : Clihsman Iscala            *
 * Developer : Clihsman Iscala         *
 * Creation date : 27/02/2023          *
 * Module : Login                      *
 * Source : src/modules/login/models   *
 * FileName : UserSchema.ts            *
 * *************************************/

// imports
import { model, Schema } from "mongoose";
import bcrypt from 'bcryptjs';
import {IUser} from '../models/IUser';

// schema User
const userSchema = new Schema({
    username:{
        type: String,
        require: true,
        min: 4,
        lowercase: true
    },
    workstation:{
        type: String,
        require: true,
        min: 4
    },
    email:{
        type: String,
        unique: true,
        require: true,
        min: 4,
        lowercase: true,
    },
    password:{
        type: String,
        require: true
    }
})

// methods users
userSchema.methods.encryptPassword = async (password:string): Promise<string> => {
     const salt = await bcrypt.genSalt(10);
     return bcrypt.hash(password,salt);
}

userSchema.methods.validatePassword = async function (password:string): Promise<boolean>  {
  return await bcrypt.compare(password,this.password);
}

export default model<IUser>('UserSchema', userSchema);