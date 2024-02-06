/********************************************
 * Author : Clihsman Iscala                 *
 * Developer : Clihsman Iscala              *
 * Creation date : 16/03/2023               *
 * Module : Reminders                       *
 * Source : src/modules/widgets/reminders/  *
 * FileName : reminders.controller.ts       *
 * ******************************************/

// imports
import { Request,Response } from 'express';
import UsuarioSchema from '../models/UsuarioSchema.model';
import { IUsuario } from '../models/IUsuario.model';
//import { Iusuario } from '../models/Iusuario.model';
//import usuarioSchema from '../models/usuarioSchema';

/**
 * Crear usuario
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const create_usuario = async (req: Request, res: Response) => {
    const usuario:IUsuario = new UsuarioSchema({
        userId: req.body.userId,
        nrDoc: req.body.nrDoc,
        tipoDoc: req.body.tipoDoc,
        fechaCreacion: req.body.fechaCreacion,
        genero: req.body.genero,
        apellidos: req.body.apellidos,
        nombres: req.body.nombres,
        email: req.body.email,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        cargo: req.body.cargo
    });
    await usuario.save();
    return res.status(201).json(usuario);
};

/**
 * Eliminar usuario
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const delete_usuario = async (req: Request, res: Response) => {
    await UsuarioSchema.deleteOne({_id:req.body._id});
    return res.status(204).json('usuario Eliminado');
};

/**
 * Editar usuario
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const update_usuario = async(req: Request, res: Response) => {
    await UsuarioSchema.updateOne({_id:req.body._id},{
        userId: req.body.userId,
        nrDoc: req.body.nrDoc,
        tipoDoc: req.body.tipoDoc,
        fechaCreacion: req.body.fechaCreacion,
        genero: req.body.genero,
        apellidos: req.body.apellidos,
        nombres: req.body.nombres,
        email: req.body.email,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        cargo: req.body.cargo,
       /* activo: req.body.activo*/
    });
    return res.status(201).json('usuario Editado');
};

/**
 * Obtener usuario
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 *//*
export const get_usuario = async (req: Request, res: Response) => {
    const { userId } = req.query;
    if(userId == undefined) return res.status(404);

    const reminders:IUsuario[] = await UsuarioSchema.find({userId:userId});
    return res.status(200).json(reminders);
};*/

export const get_usuario = async (_req: Request, res: Response) => {
    const usuarios:IUsuario[] = await UsuarioSchema.find();
    return res.status(200).json(usuarios);
};