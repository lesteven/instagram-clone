import { loggedIn } from '../../common/redux/loginModule/loginModule';

const debug = require('debug')('http');


const checkAuthenticated = (user, store) => {
  debug('user! checkAuthenticated', user);
  debug(store);
  let data = {};
  if (user) {
    data = {
      user: user.email,
      redirect: true,
    };
  } else {
    data = {
      redirect: false,
    };
  }
  store.dispatch(loggedIn(data));
};

export default checkAuthenticated;
