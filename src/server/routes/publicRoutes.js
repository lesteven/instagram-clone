import express from 'express';
import userRegister from './public/userRegister';
import userLogin from './public/userLogin';
import account from './public/account';
import friends from './public/friends';
import feed from './public/feed';
import search from './public/search';
import explore from './public/explore';


const publicRoutes = express.Router();

publicRoutes.use('/register', userRegister);
publicRoutes.use('/login', userLogin);
publicRoutes.use('/account', account);
publicRoutes.use('/friends', friends);
publicRoutes.use('/feed', feed);
publicRoutes.use('/search', search);
publicRoutes.use('/explore', explore);


export default publicRoutes;
