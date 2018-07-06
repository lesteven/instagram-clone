import express from 'express';
import accountSettings from './private/accountSettings';

const privateRoutes = express.Router();

privateRoutes.use('/settings', accountSettings);

export default privateRoutes;
