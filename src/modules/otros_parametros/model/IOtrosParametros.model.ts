/***************************************************
 * Author : Clihsman Iscala                        *
 * Developer : Clihsman Iscala                     *
 * Creation date : 12/08/2023                      *
 * Module : otros_parametros                       *
 * Source : src/modules/otros_parametros/models/   *
 * FileName : IOtrosParametros.ts                  *
 * *************************************************/
    
// imports
import { Document } from "mongoose";

export interface IOtrosParametros extends Document
{
    pais:string;
    ciudades:[];
    modenas:string[];
}