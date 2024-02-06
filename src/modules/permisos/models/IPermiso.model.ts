/********************************************
 * Author : Clihsman Iscala                 *
 * Developer : Clihsman Iscala              *
 * Creation date : 11/08/2023               *
 * Module : Permisos                        *
 * Source : src/modules/permisos/models/    *
 * FileName : IPermiso.ts                   *
 * ******************************************/
    
// imports
import { Document } from "mongoose";

export interface IPermiso extends Document
{
    nombre:string;
    permisos:boolean[];
}