/***************************************
 * Author : Clihsman Iscala            *
 * Developer : Clihsman Iscala         *
 * Creation date : 27/02/2023          *
 * Module : Login                      *
 * Source : src/modules/login/routes/  *
 * FileName : auth.route.ts            *
 * *************************************/

// imports
import { NextFunction,Request,Response } from 'express';
import jwt from 'jsonwebtoken';
import UserSchema from '../models/UserSchema';
import {IUser} from '../models/IUser';
import { IPayload } from '../models/IPayload';


export const signup = async (req: Request, res: Response) => {
    const user: IUser = new UserSchema({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    const existUser = await UserSchema.findOne({ email: user.email}); 
    if(existUser) return res.status(400).json({ err: "User already exists" }); 

    user.password = await user.encryptPassword(user.password);
    const saveUser = await user.save();

    // token
    const token: string = jwt.sign({ _id: saveUser._id, workstation: saveUser.workstation }, process.env.TOKEN_SECRET || 'secret_key');

    res.header("auth_token", token).json(saveUser);
    return res.status(201);
};

export const signin = async (req: Request, res: Response) => {
    const user = await UserSchema.findOne({ email: req.body.email });
    if (!user) return res.status(401).json('Email or password is wrong');

    const correctPassword: boolean = await user.validatePassword(req.body.password);
    if (!correctPassword) return res.status(401).json('Email or password is wrong');

    const token: string = jwt.sign({ _id: user._id, workstation: user.workstation }, process.env.TOKEN_SECRET || 'secret_key', {
        expiresIn: 60 * 60 * 24
    });

    console.log(req.ip);

    res.json({token});
    return res.status(200);
};

export const profile = async (req: Request, res: Response) => { 
    const user = await UserSchema.findById(req.userId);
    if (!user) return res.status(404).json("No User found");
    return res.json(user);
};

export const TokenValidation =(req:Request,res:Response,next:NextFunction) => {
    
   const token = req.header('auth_token');
   if(!token) return res.status(401).json('Access denied');

   console.log(req.ip);

   try{
      const payload = jwt.verify(token, process.env.TOKEN_SECRET || 'secret_key') as  IPayload;
      req.userId = payload._id;
   }
   catch{
      return res.status(401).json('Access denied');
   }

   return next();
};