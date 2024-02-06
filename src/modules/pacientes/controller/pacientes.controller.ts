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
import { IPaciente } from '../models/IPaciente.model';
import PacienteSchema from '../models/PacienteSchema';

/**
 * Crear Paciente
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const create_paciente = async (req: Request, res: Response) => {
    const paciente:IPaciente = new PacienteSchema({
        nrDoc: req.body.nrDoc,
        tipoDoc: req.body.tipoDoc,
        fechaNacimiento: req.body.fechaNacimiento,
        genero: req.body.genero,
        apellido1: req.body.apellido1,
        apellido2: req.body.apellido2,
        nombre1: req.body.nombre1,
        nombre2: req.body.nombre2,
        email: req.body.email,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        zona: req.body.zona,
        ciudad: req.body.ciudad,
        barrio: req.body.barrio,
        ocupacion: req.body.ocupacion,
        nivelEducativo: req.body.nivelEducativo,
        estadoCivil: req.body.estadoCivil,
        pertenenciaEtica: req.body.pertenenciaEtica,
        nombreEtnia: req.body.nombreEtnia,
        entidad: req.body.entidad,
        regimen: req.body.regimen,
        nivel: req.body.nivel,
        tipoAfiliacion: req.body.tipoAfiliacion,
        fallecido: req.body.fallecido,
        fechaDefuncion: req.body.fechaDefuncion
    });
    await paciente.save();
    return res.status(201).json(paciente);
};

/**
 * Eliminar Paciente
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const delete_paciente = async (req: Request, res: Response) => {
    await PacienteSchema.deleteOne({_id:req.body._id});
    return res.status(204).json('Paciente Eliminado');
};

/**
 * Editar Paciente
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const update_paciente= async(req: Request, res: Response) => {
    await PacienteSchema.updateOne({_id:req.body._id},{
        nrDoc: req.body.nrDoc,
        tipoDoc: req.body.tipoDoc,
        fechaNacimiento: req.body.fechaNacimiento,
        genero: req.body.genero,
        apellido1: req.body.apellido1,
        apellido2: req.body.apellido2,
        nombre1: req.body.nombre1,
        nombre2: req.body.nombre2,
        email: req.body.email,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        zona: req.body.zona,
        ciudad: req.body.ciudad,
        barrio: req.body.barrio,
        ocupacion: req.body.ocupacion,
        nivelEducativo: req.body.nivelEducativo,
        estadoCivil: req.body.estadoCivil,
        pertenenciaEtica: req.body.pertenenciaEtica,
        nombreEtnia: req.body.nombreEtnia,
        entidad: req.body.entidad,
        regimen: req.body.regimen,
        nivel: req.body.nivel,
        tipoAfiliacion: req.body.tipoAfiliacion,
        fallecido: req.body.fallecido,
        fechaDefuncion: req.body.fechaDefuncion
    });
    return res.status(201).json('Paciente Editado');
};

/**
 * Obtener Paciente
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const get_paciente= async (req: Request, res: Response) => {
    const { userId } = req.query;
    if(userId == undefined) return res.status(404);

    const reminders:IPaciente[] = await PacienteSchema.find({userId:userId});
    return res.status(200).json(reminders);
};