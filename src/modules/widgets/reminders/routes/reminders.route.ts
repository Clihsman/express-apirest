/********************************************
 * Author : Clihsman Iscala                 *
 * Developer : Clihsman Iscala              *
 * Creation date : 16/03/2023               *
 * Module : Login                           *
 * Source : src/modules/widgets/reminders/  *
 * FileName : reminders.route.ts            *
 * ******************************************/

// imports
import { Router,Application } from 'express';
import { create_reminder, delete_reminder, get_reminder,/*, get_reminder_date_range*/ 
update_reminder} from '../controller/reminders.controller';
//import { signup, signin, profile, TokenValidation } from '../controller/auth.controller';

// Esta clase contiene toda la estructura de la autenticación para el usuario
export class RouteReminders {
    // variables privadas
    private m_route: string = '/api/widgets'; 
    private m_reminders: string = '/reminders'; 
 //   private m_reminders_date_range: string = '/reminders/:userId/:startDate/:endDate'; 
    private router: Router = Router();

    //contructor de la clase RouteReminders
    constructor(app:Application) {
        this.router.post(this.m_reminders, create_reminder);
        this.router.delete(this.m_reminders, delete_reminder);
        this.router.get(this.m_reminders, get_reminder);
        this.router.put(this.m_reminders, update_reminder);
      //  this.router.get(this.m_reminders_date_range, get_reminder_date_range);
        app.use(this.m_route, this.router);
    }
}