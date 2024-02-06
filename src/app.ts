// imports
import express, { Application } from 'express'
//import authRouter from './routes/auth';
import  morgan  from 'morgan';
import {RouteAuth} from './modules/login/routes/auth.route';
import { RouteReminders } from './modules/widgets/reminders/routes/reminders.route';
import { RoutePacientes } from './modules/pacientes/routes/pacientes.route';
import { RouteUsuarios } from './modules/usuarios/routes/usuarios.route';
// variables
const PORT = 3000
const app:Application = express();

//setting
app.set('port', PORT);

// middlewares
app.use(express.json());
app.use(morgan('dev'));

// routes
//app.use('/api/auth', authRouter);

new RouteAuth(app);
new RouteReminders(app);
new RoutePacientes(app);
new RouteUsuarios(app);
export default app;