/*****************************************
 * Author : Clihsman Iscala              *
 * Developer : Clihsman Iscala           *
 * Creation date : 19/06/2023            *
 * Module : Pacientes                    *
 * Source : src/modules/Pacientes/models *
 * FileName : PacienteSchema.ts          *
 * ***************************************/

// imports
import { model, Schema } from "mongoose";
import {IRol} from './IRol.model';

// paciente Schema
const rolesSchema = new Schema({
    name: {
        type: String,
        requiere: true
    },
    permisos: {
        type: Boolean,
        requiere: true
    }
});

export default model<IRol>('RolesSchema', rolesSchema);