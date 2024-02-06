/***************************************
 * Author : Clihsman Iscala            *
 * Developer : Clihsman Iscala         *
 * Creation date : 27/02/2023          *
 * Module : Reminders                  *
 * Source : src/modules/login/models   *
 * FileName : UserSchema.ts            *
 * *************************************/

// imports
import { model, Schema } from "mongoose";
import {IReminder} from './IReminder';

// reminder Schema
const reminderSchema = new Schema({
    userId:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        require:true
    },
    level:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
});

export default model<IReminder>('ReminderSchema', reminderSchema);