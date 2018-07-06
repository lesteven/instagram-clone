import userRegister from './public/userRegister';


const mountPublicRoutes = (app) => {
  app.use('/register', userRegister);
};

export default mountPublicRoutes;
