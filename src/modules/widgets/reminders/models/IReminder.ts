/********************************************
 * Author : Clihsman Iscala                 *
 * Developer : Clihsman Iscala              *
 * Creation date : 16/03/2023               *
 * Module : Reminders                       *
 * Source : src/modules/widgets/reminders/  *
 * FileName : IReminder.ts                  *
 * ******************************************/

import { Level } from "./Level";
import { Document } from "mongoose";

export interface IReminder extends Document {
    userId:String,
    date:Date;
    level:Level,
    message:String
}