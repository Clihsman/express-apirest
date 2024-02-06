/*****************************************
 * Author : Clihsman Iscala              *
 * Developer : Clihsman Iscala           *
 * Creation date : 19/06/2023            *
 * Module : Licencias                    *
 * Source : src/modules/Licenicas/models *
 * FileName : LicenciaSchema.ts          *
 * ***************************************/

// imports
import { model, Schema } from "mongoose";
import { ILicencia } from './ILicencia.model';

// paciente Schema
const licenciaSchema = new Schema({
    name: {
        type: String,
        requiere: true
    },
    licencia: {
        type: String,
        requiere: true
    }
});

export default model<ILicencia>('LicenciaSchema', licenciaSchema);