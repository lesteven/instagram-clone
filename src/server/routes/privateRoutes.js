import express from 'express';
import accountSettings from './private/accountSettings';
import upload from './private/upload';


const privateRoutes = express.Router();

privateRoutes.use('/settings', accountSettings);
privateRoutes.use('/upload', upload);


export default privateRoutes;
