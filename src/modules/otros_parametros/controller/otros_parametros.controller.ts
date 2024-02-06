/***************************************************************
 * Author : Clihsman Iscala                                    *
 * Developer : Clihsman Iscala                                 *
 * Creation date : 11/08/2023                                  *
 * Module : otros_parametross                                  *
 * Source : src/modules/otros_parametross/                     *
 * Filenombre : otros_parametross.contotros_parametrosler.ts   *
 * *************************************************************/

// imports
import { Request,Response } from 'express';
import { IOtrosParametros } from '../model/IOtrosParametros.model';
import OtroParametrosSchema from '../model/OtrosParametrosSchema';


/**
 * Crear Otros Parametros
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const create_otros_parametros = async (req: Request, res: Response) => {
    const otros_parametros:IOtrosParametros = new OtroParametrosSchema({
        pais: req.body.pais,
        ciudades: req.body.ciudades, 
        modenas: req.body.modenas      
    });
    await otros_parametros.save();
    return res.status(201).json(otros_parametros);
};

/**
 * Eliminar Otros Parametros
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const delete_otros_parametros = async (req: Request, res: Response) => {
    await OtroParametrosSchema.deleteOne({_id:req.body._id});
    return res.status(204).json('Otros Parametros Eliminada');
};

/**
 * Editar Otros Parametros
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const update_otros_parametros = async(req: Request, res: Response) => {
    await OtroParametrosSchema.updateOne({_id:req.body._id},{
        pais: req.body.pais,
        ciudades: req.body.ciudades,
        modenas: req.body.modenas
    });
    return res.status(201).json('Otros Parametros Editada');
};

/**
 * Obtener Otros Parametros
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const get_otros_parametros = async (req: Request, res: Response) => {
    const { id } = req.query;
    if(id == undefined) return res.status(404);

    const otrosParametros:IOtrosParametros[] = await OtroParametrosSchema.find({id:id});
    return res.status(200).json(otrosParametros);
};