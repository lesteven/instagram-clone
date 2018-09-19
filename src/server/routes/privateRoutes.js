import express from 'express';
import accountSettings from './private/accountSettings';
import upload from './private/upload';
import authCheck from './private/utils/authCheck';

const privateRoutes = express.Router();

privateRoutes.all('*', authCheck, (req,res,next) => {
  next();
})

privateRoutes.use('/settings', accountSettings);
privateRoutes.use('/upload', upload);

export default privateRoutes;
