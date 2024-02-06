/**************************************************
 * Author : Clihsman Iscala                       *
 * Developer : Clihsman Iscala                    *
 * Creation date : 19/06/2023                     *
 * Module : OtrosParametros                       *
 * Source : src/modules/otros_parametros/models   *
 * FileName : OtrosParametrosSchema.ts            *
 * ************************************************/

// imports
import { model, Schema } from "mongoose";
import { IOtrosParametros } from './IOtrosParametros.model';

// paciente Schema
const otroParametrosSchema = new Schema({
    pais: {
        type: String,
        requiere: true
    },
    ciudades: {
        type: Array<String>,
        requiere: true
    }, 
    modenas: {
        type: Array<String>,
        requiere: true
    }
});

export default model<IOtrosParametros>('OtroParametrosSchema', otroParametrosSchema);