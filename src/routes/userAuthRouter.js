import express from 'express';
import {handleUserSingup, handleUserSingin} from '../controllers/user-controller.js';

const routes = express.Router();

routes.post('/', handleUserSingup);
routes.post('/login', handleUserSingin);

export default routes;