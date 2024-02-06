/********************************************
 * Author : Clihsman Iscala                 *
 * Developer : Clihsman Iscala              *
 * Creation date : 11/08/2023               *
 * Module : Licencias                       *
 * Source : src/modules/licencias/models/   *
 * FileName : ILicencia.ts                  *
 * ******************************************/
    
// imports
import { Document } from "mongoose";

export interface ILicencia extends Document
{
    nombre:string;
    licencia:string;
}