/***************************************
 * Author : Clihsman Iscala            *
 * Developer : Clihsman Iscala         *
 * Creation date : 27/02/2023          *
 * Module : Login                      *
 * Source : src/modules/login/models   *
 * FileName : IPayload.ts              *
 * *************************************/

export interface IPayload {
    _id: string;
    workstation:string;
    iat: number;
    exp: number;
}