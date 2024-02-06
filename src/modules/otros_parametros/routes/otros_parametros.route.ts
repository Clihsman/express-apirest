/****************************************************
 * Author : Clihsman Iscala                         *
 * Developer : Clihsman Iscala                      *
 * Creation date : 12/06/2023                       *
 * Module : otros_parametros                        *
 * Source : src/otros_parametros/otros_parametross/ *
 * FileName : otros_parametros.route.ts             *
 * **************************************************/

// imports
import { Router,Application } from 'express';
import { create_otros_parametros, delete_otros_parametros, get_otros_parametros, update_otros_parametros} from '../controller/otros_parametros.controller';

// Esta clase contiene la estructura para las rutas de las RouteOtrosParametros
export class RouteOtrosParametros {
    // variables privadas
    private m_route: string = '/api'; 
    private m_otros_parametross: string = '/otros_parametroses'; 
    private m_router: Router = Router();

    //contructor de la clase RouteOtrosParametros
    constructor(app:Application) {
        this.m_router.post(this.m_otros_parametross, create_otros_parametros);
        this.m_router.delete(this.m_otros_parametross, delete_otros_parametros);
        this.m_router.get(this.m_otros_parametross, get_otros_parametros);
        this.m_router.patch(this.m_otros_parametross, update_otros_parametros);
        app.use(this.m_route, this.m_router);
    }
}