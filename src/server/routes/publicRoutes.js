import express from 'express';
import userRegister from './public/userRegister';
import userLogin from './public/userLogin';
import account from './public/account';


const publicRoutes = express.Router();

publicRoutes.use('/register', userRegister);
publicRoutes.use('/login', userLogin);
publicRoutes.use('/account', account);

export default publicRoutes;
