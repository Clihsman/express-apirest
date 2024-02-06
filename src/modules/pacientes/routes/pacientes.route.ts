/********************************************
 * Author : Clihsman Iscala                 *
 * Developer : Clihsman Iscala              *
 * Creation date : 19/06/2023               *
 * Module : Pacientes                       *
 * Source : src/modules/pacientes/          *
 * FileName : pacientes.route.ts            *
 * ******************************************/

// imports
import { Router,Application } from 'express';
import { create_paciente, delete_paciente, get_paciente, update_paciente} from '../controller/pacientes.controller';

// Esta clase contiene la estructura para las rutas de los pacientes
export class RoutePacientes {
    // variables privadas
    private m_route: string = '/api'; 
    private m_pacientes: string = '/pacientes'; 
    private m_router: Router = Router();

    //contructor de la clase RoutePacientes
    constructor(app:Application) {
        this.m_router.post(this.m_pacientes, create_paciente);
        this.m_router.delete(this.m_pacientes, delete_paciente);
        this.m_router.get(this.m_pacientes, get_paciente);
        this.m_router.patch(this.m_pacientes, update_paciente);
        app.use(this.m_route, this.m_router);
    }
}