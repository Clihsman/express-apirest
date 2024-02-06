/********************************************
 * Author : Clihsman Iscala                 *
 * Developer : Clihsman Iscala              *
 * Creation date : 11/06/2023               *
 * Module : usuarioes                       *
 * Source : src/modules/usuarioes/          *
 * FileName : usuarios.route.ts             *
 * ******************************************/

// imports
import { Router,Application } from 'express';
import { create_usuario, delete_usuario, get_usuario, update_usuario} from '../controller/usuarios.controller';

// Esta clase contiene la estructura para las rutas de los usuarios
export class RouteUsuarios {
    // variables privadas
    private m_route: string = '/api'; 
    private m_usuarios: string = '/usuarios'; 
    private m_router: Router = Router();

    //contructor de la clase Routeusuarioes
    constructor(app:Application) {
        this.m_router.post(this.m_usuarios, create_usuario);
        this.m_router.delete(this.m_usuarios, delete_usuario);
        this.m_router.get(this.m_usuarios, get_usuario);
        this.m_router.patch(this.m_usuarios, update_usuario);
        app.use(this.m_route, this.m_router);
    }
}