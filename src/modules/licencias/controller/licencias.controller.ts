/***********************************************
 * Author : Clihsman Iscala                    *
 * Developer : Clihsman Iscala                 *
 * Creation date : 11/08/2023                  *
 * Module : licencias                          *
 * Source : src/modules/licencias/             *
 * Filenombre : licencias.contlicencialer.ts   *
 * *********************************************/

// imports
import { Request,Response } from 'express';
import { ILicencia } from '../models/ILicencia.model';
import LicenciaSchema from '../models/LicenciaSchema';

/**
 * Crear licencia
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const create_licencia = async (req: Request, res: Response) => {
    const licencia:ILicencia = new LicenciaSchema({
        nombre: req.body.nombre,
        licencia: req.body.licencia,       
    });
    await licencia.save();
    return res.status(201).json(licencia);
};

/**
 * Eliminar licencia
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const delete_licencia = async (req: Request, res: Response) => {
    await LicenciaSchema.deleteOne({_id:req.body._id});
    return res.status(204).json('licencia Eliminada');
};

/**
 * Editar licencia
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const update_licencia = async(req: Request, res: Response) => {
    await LicenciaSchema.updateOne({_id:req.body._id},{
        nombre: req.body.nombre,
        licencia: req.body.licencia
    });
    return res.status(201).json('licencia Editada');
};

/**
 * Obtener licencia
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const get_licencia = async (req: Request, res: Response) => {
    const { licenciaId } = req.query;
    if(licenciaId == undefined) return res.status(404);

    const licencias:ILicencia[] = await LicenciaSchema.find({licenciaId:licenciaId});
    return res.status(200).json(licencias);
};