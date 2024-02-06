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
import {IPaciente} from './IPaciente.model';

// paciente Schema
const pacienteSchema = new Schema({
    nrDoc: {
        type: String,
        requiere: true
    },
    tipoDoc: {
        type: Number,
        requiere: true
    },
    fechaNacimiento: {
        type: Date,
        requiere: true
    },
    genero: {
        type: Number,
        requiere: true
    },
    apellido1: {
        type: String,
        requiere: true
    },
    apellido2: {
        type: String,
        requiere: true
    },
    nombre1: {
        type: String,
        requiere: true
    },
    nombre2: {
        type: String,
        requiere: true
    },
    email: {
        type: String,
        requiere: true
    },
    direccion: {
        type: String,
        requiere: true
    },
    telefono: {
        type: String,
        requiere: true
    },
    zona: {
        type: String,
        requiere: true
    },
    ciudad: {
        type: String,
        requiere: true
    },
    barrio: {
        type: String,
        requiere: true
    },
    ocupacion: {
        type: String,
        requiere: true
    },
    nivelEducativo: {
        type: Number,
        requiere: true
    },
    estadoCivil: {
        type: Number,
        requiere: true
    },
    pertenenciaEtica: {
        type: Number,
        requiere: true
    },
    nombreEtnia: {
        type: String,
        requiere: true
    },
    entidad: {
        type: Number,
        requiere: true
    },
    regimen: {
        type: Number,
        requiere: true
    },
    nivel: {
        type: Number,
        requiere: true
    },
    tipoAfiliacion: {
        type: Number,
        requiere: true
    },
    fallecido: {
        type: Boolean,
        requiere: true
    },
    fechaDefuncion: {
        type: Date,
        requiere: true
    }
});

export default model<IPaciente>('PacienteSchema', pacienteSchema);