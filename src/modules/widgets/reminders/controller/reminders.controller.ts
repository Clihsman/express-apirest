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
import { IReminder } from '../models/IReminder';
import ReminderSchema from '../models/ReminderSchema';

/**
 * Crear recordatorio
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const create_reminder = async (req: Request, res: Response) => {
    const reminder:IReminder = new ReminderSchema({
        userId:req.body.userId,
        date:req.body.date,
        level:req.body.level,
        message:req.body.message
    });
    await reminder.save();
    return res.status(201).json(reminder);
};

/**
 * Eliminar ecordatorio
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const delete_reminder = async (req: Request, res: Response) => {
    await ReminderSchema.deleteOne({_id:req.body._id});
    return res.status(204).json('Recordatorio Eliminado');
};

/**
 * Editar recordatorio
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const update_reminder = async(req: Request, res: Response) => {
    await ReminderSchema.updateOne({_id:req.body._id},{
        date:req.body.date,
        level:req.body.level,
        message:req.body.message
    });
    return res.status(201).json('Recordatorio Editado');
};

/**
 * Obtener recordatorios
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const get_reminder = async (req: Request, res: Response) => {
    const { userId, startDate, endDate  } = req.query;
    
    console.log(startDate);
    console.log(endDate);

    if(userId == undefined) return res.status(404);

    if(startDate != undefined && endDate != undefined)
      return get_reminder_date_range(req, res);

    const reminders:IReminder[] = await ReminderSchema.find({userId:userId});
    return res.status(200).json(reminders);
};

/**
 * Obtener recordatorios por rango de fecha
 * @param req Peticion del servidor
 * @param res Respuesta del servidor
 * @returns 
 */
export const get_reminder_date_range = async (req: Request, res: Response) => {
    const { userId, startDate, endDate  } = req.query;

    if(userId == undefined || startDate == undefined || endDate == undefined) return res.status(404);

     const reminders:IReminder[] = await ReminderSchema.find({userId:userId,
     date: { 
        $gte: new Date(startDate as string), $lte: new Date(endDate as string)
    }});
    return res.status(200).json(reminders);
};