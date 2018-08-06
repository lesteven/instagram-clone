import express from 'express';
import userRegister from './public/userRegister';
import userLogin from './public/userLogin';


const publicRoutes = express.Router();

publicRoutes.use('/register', userRegister);
publicRoutes.use('/login', userLogin);

export default publicRoutes;
