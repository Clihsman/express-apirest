    /********************************************
     * Author : Clihsman Iscala                 *
     * Developer : Clihsman Iscala              *
     * Creation date : 11/08/2023               *
     * Module : Roles                           *
     * Source : src/modules/roles/models/       *
     * FileName : IRol.ts                       *
     * ******************************************/
    
// imports
import { Document } from "mongoose";

export interface IRol extends Document
{
    name:string;
    permisos:boolean[];
}