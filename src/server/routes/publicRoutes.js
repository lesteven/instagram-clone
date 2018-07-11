import express from 'express';
import userRegister from './public/userRegister';

const publicRoutes = express.Router();

publicRoutes.use('/register', userRegister);


export default publicRoutes;
