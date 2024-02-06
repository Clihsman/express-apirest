    /********************************************
     * Author : Clihsman Iscala                 *
     * Developer : Clihsman Iscala              *
     * Creation date : 19/06/2023               *
     * Module : Pacientes                       *
     * Source : src/modules/pacientes/models/   *
     * FileName : Paciente.ts                   *
     * ******************************************/
    
// imports
import { Document } from "mongoose";

export interface IPaciente extends Document
{
    nrDoc:number;
    tipoDoc:number
    fechaNacimiento:Date;
    genero:number;
    apellido1:string;
    apellido2:string;
    nombre1:string;
    nombre2:string;
    email:string;
    direccion:string;
    telefono:string;
    zona:string;
    ciudad:string;
    barrio:string;
    ocupacion:string;
    nivelEducativo:number;
    estadoCivil:number;
    pertenenciaEtica:number;
    nombreEtnia:string;
    entidad:number;
    regimen:number;
    nivel:number;
    tipoAfiliacion:number;
    fallecido:boolean;
    fechaDefuncion:Date;
}