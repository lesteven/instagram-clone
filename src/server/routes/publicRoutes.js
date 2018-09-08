import express from 'express';
import userRegister from './public/userRegister';
import userLogin from './public/userLogin';
import account from './public/account';
import friends from './public/friends';


const publicRoutes = express.Router();

publicRoutes.use('/register', userRegister);
publicRoutes.use('/login', userLogin);
publicRoutes.use('/account', account);
publicRoutes.use('/friends', friends);

export default publicRoutes;
