/********************************************
 * Author : Clihsman Iscala                 *
 * Developer : Clihsman Iscala              *
 * Creation date : 11/08/2023               *
 * Module : Roles                           *
 * Source : src/modules/roles/              *
 * FileName : roles.controller.ts           *
 * ******************************************/

// imports
import { Request,Response } from 'express';
import { IRol } from '../models/IRol.model';
import RolesSchema from '../models/RolSchema';

/**
 * Crear Rol
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const create_rol= async (req: Request, res: Response) => {
    const rol:IRol = new RolesSchema({
        name: req.body.name,
        permisos: req.body.permisos,       
    });
    await rol.save();
    return res.status(201).json(rol);
};

/**
 * Eliminar Rol
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const delete_rol = async (req: Request, res: Response) => {
    await RolesSchema.deleteOne({_id:req.body._id});
    return res.status(204).json('Rol Eliminado');
};

/**
 * Editar Rol
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const update_rol = async(req: Request, res: Response) => {
    await RolesSchema.updateOne({_id:req.body._id},{
        name: req.body.name,
        permisos: req.body.permisos
    });
    return res.status(201).json('Rol Editado');
};

/**
 * Obtener Rol
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const get_rol = async (req: Request, res: Response) => {
    const { rolId } = req.query;
    if(rolId == undefined) return res.status(404);

    const roles:IRol[] = await RolesSchema.find({rolId:rolId});
    return res.status(200).json(roles);
};