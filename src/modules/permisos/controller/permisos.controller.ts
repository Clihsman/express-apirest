/********************************************
 * Author : Clihsman Iscala                 *
 * Developer : Clihsman Iscala              *
 * Creation date : 11/08/2023               *
 * Module : Permisos                        *
 * Source : src/modules/permisos/           *
 * Filenombre : permisos.contpermisoler.ts  *
 * ******************************************/

// imports
import { Request,Response } from 'express';
import { IPermiso } from '../models/IPermiso.model';
import PermisoSchema from '../models/PermisoSchema';

/**
 * Crear Permiso
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const create_permiso = async (req: Request, res: Response) => {
    const permiso:IPermiso = new PermisoSchema({
        nombre: req.body.nombre,
        permisos: req.body.permisos,       
    });
    await permiso.save();
    return res.status(201).json(permiso);
};

/**
 * Eliminar Permiso
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const delete_permiso = async (req: Request, res: Response) => {
    await PermisoSchema.deleteOne({_id:req.body._id});
    return res.status(204).json('permiso Eliminado');
};

/**
 * Editar Permiso
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const update_permiso = async(req: Request, res: Response) => {
    await PermisoSchema.updateOne({_id:req.body._id},{
        nombre: req.body.nombre,
        permisos: req.body.permisos
    });
    return res.status(201).json('permiso Editado');
};

/**
 * Obtener Permiso
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const get_permiso = async (req: Request, res: Response) => {
    const { permisoId } = req.query;
    if(permisoId == undefined) return res.status(404);

    const permisoes:IPermiso[] = await PermisoSchema.find({permisoId:permisoId});
    return res.status(200).json(permisoes);
};