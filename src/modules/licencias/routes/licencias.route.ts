/********************************************
 * Author : Clihsman Iscala                 *
 * Developer : Clihsman Iscala              *
 * Creation date : 11/06/2023               *
 * Module : licencias                       *
 * Source : src/modules/licencias/          *
 * FileName : licencias.route.ts            *
 * ******************************************/

// imports
import { Router,Application } from 'express';
import { create_licencia, delete_licencia, get_licencia, update_licencia} from '../controller/licencias.controller';

// Esta clase contiene la estructura para las rutas de las licencias
export class Routelicencias {
    // variables privadas
    private m_route: string = '/api'; 
    private m_licencias: string = '/licenciaes'; 
    private m_router: Router = Router();

    //contructor de la clase Routelicencias
    constructor(app:Application) {
        this.m_router.post(this.m_licencias, create_licencia);
        this.m_router.delete(this.m_licencias, delete_licencia);
        this.m_router.get(this.m_licencias, get_licencia);
        this.m_router.patch(this.m_licencias, update_licencia);
        app.use(this.m_route, this.m_router);
    }
}