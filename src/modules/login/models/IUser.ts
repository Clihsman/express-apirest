/***************************************
 * Author : Clihsman Iscala            *
 * Developer : Clihsman Iscala         *
 * Creation date : 27/02/2023          *
 * Module : Login                      *
 * Source : src/modules/login/models   *
 * FileName : IUser.ts                 *
 * *************************************/

// imports
import { Document } from "mongoose";

/*
  esta interfas contiene todos los datos del usuario 
  y esta relacionada con la clase UserSchema
*/
export interface IUser extends Document
{
    username: string;
    email:string;
    password:string;
    workstation:string;  
    encryptPassword(password:string):Promise<string>;
    validatePassword(password:string):Promise<boolean>;
}