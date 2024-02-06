/********************************************
 * Author : Clihsman Iscala                 *
 * Developer : Clihsman Iscala              *
 * Creation date : 11/06/2023               *
 * Module : Roles                           *
 * Source : src/modules/roles/              *
 * FileName : roles.route.ts                *
 * ******************************************/

// imports
import { Router,Application } from 'express';
import { create_rol, delete_rol, get_rol, update_rol} from '../controller/roles.controller';

// Esta clase contiene la estructura para las rutas de los roles
export class RouteRoles {
    // variables privadas
    private m_route: string = '/api'; 
    private m_roles: string = '/roles'; 
    private m_router: Router = Router();

    //contructor de la clase RouteRoles
    constructor(app:Application) {
        this.m_router.post(this.m_roles, create_rol);
        this.m_router.delete(this.m_roles, delete_rol);
        this.m_router.get(this.m_roles, get_rol);
        this.m_router.patch(this.m_roles, update_rol);
        app.use(this.m_route, this.m_router);
    }
}