    /********************************************
     * Author : Clihsman Iscala                 *
     * Developer : Clihsman Iscala              *
     * Creation date : 09/08/2023               *
     * Module : Usuarios                        *
     * Source : src/modules/usuarios/models/    *
     * FileName : IUsuario.model.ts             *
     * ******************************************/
    
// imports
import { Document } from "mongoose";

/**
 * esta interface contiene todos los datos del usuario
 * la clase Document nos permite que esta interface se 
 * pueda implementar en MongoDB
 * los datos que son obligatorios terminan con un *
 */
export interface IUsuario extends Document
{
    userId:number; // id del usuario *
    nrDoc:number; // numero de documento del usuario *
    tipoDoc:number; // tipo de documento del usuario *
    fechaCreacion:Date; // fecha en la que se creo el usuario *
    genero:number; // genero del usuario
    apellidos:string; // apellidos del usuario
    nombres:string; // nombres del usuario *
    email:string; // correo electronico del usuario *
    direccion:string; // direccion del usuario
    telefono:string; // telefono del usuario
    cargo:string; // cargo del usuario *
    activo:boolean; // estado del usuario
}
