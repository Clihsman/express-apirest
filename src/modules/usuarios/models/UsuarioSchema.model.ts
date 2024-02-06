/****************************************
 * Author : Clihsman Iscala             *
 * Developer : Clihsman Iscala          *
 * Creation date : 09/08/2023           *
 * Module : Usuarios                    *
 * Source : src/modules/usuarios/models *
 * FileName : UsuarioSchema.ts          *
 * **************************************/

// imports
import { model, Schema } from "mongoose";
import { IUsuario } from "./IUsuario.model";

/*
* esta constante se encarga de darle el esquema a mongoDB 
* para el documento en la base de datos    
*/
const UsuarioSchema = new Schema({
    userId:{
        type: Number,
        require: true,
        //min: 4,
        lowercase: true
    }, 
    nrDoc:{
        type: Number,
        require: true,
        //min: 4,
        lowercase: true
    }, 
    tipoDoc:{
        type: Number,
        require: true,
        //min: 4,
        lowercase: true
    }, 
    fechaCreacion:{
        type: Date,
        require: true,
        //min: 4,
        lowercase: true
    }, 
    genero:{
        type: Number,
        require: false,
        //min: 1,
        length:1,
        lowercase: true
    }, 
    apellidos:{
        type: String,
        require: false,
        //min: 4,
        lowercase: true
    }, 
    nombres:{
        type: String,
        require: true,
        //min: 4,
        lowercase: true
    },
     email:{
        type: String,
        require: true,
        //min: 10,
        lowercase: true
    }, 
    direccion:{
        type: String,
        require: false,
        //min: 10,
        lowercase: true
    }, 
    telefono:{
        type: String,
        require: false,
        //min: 8,
        lowercase: true
    }, 
    cargo:{
        type: String,
        require: true,
        //min: 4,
        lowercase: true
    }
});

export default model<IUsuario>('UsuarioSchema', UsuarioSchema);