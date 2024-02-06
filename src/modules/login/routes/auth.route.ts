/***************************************
 * Author : Clihsman Iscala            *
 * Developer : Clihsman Iscala         *
 * Creation date : 27/02/2023          *
 * Module : Login                      *
 * Source : src/modules/login/routes/  *
 * FileName : auth.route.ts            *
 * *************************************/

// imports
import { Router,Application } from 'express';
import { signup, signin, profile, TokenValidation } from '../controller/auth.controller';

// Esta clase contiene toda la rutas de la autenticación para el usuario
export class RouteAuth {
    // variables privadas
    private m_signup: string = '/signup';
    private m_signin: string = '/signin';
    private m_profile: string = '/profile';
    private m_route: string = '/api/auth';
    private m_router: Router = Router();

    //contructor de la clase RouteAuth
    constructor(app:Application) {
        this.m_router.post(this.m_signup, signup);
        this.m_router.post(this.m_signin, signin);
        this.m_router.get(this.m_profile, TokenValidation, profile);
        app.use(this.m_route, this.m_router);
    }
}