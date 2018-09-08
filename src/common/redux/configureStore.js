import {
  createStore, applyMiddleware, combineReducers, compose,
} from 'redux';
import thunk from 'redux-thunk';
import { view } from './viewModule/viewModule';
import { error } from './errorModule/errorModule';
import { userActions } from './userModule/userModule';
import { login } from './loginModule/loginModule';
import { popUp } from './popUpModule/popUpModule';
import { upload } from './uploadModule/uploadModule';
import { profile } from './profileModule/profileModule';
import { friends } from './friendsModule/friendsModule';


export const reducers = combineReducers({
  view,
  popUp,
  userActions,
  login,
  error,
  upload,
  profile,
  friends,
});


export default function configureStore(preloadedState) {
  return createStore(
    reducers,
    preloadedState,
    compose(
      applyMiddleware(thunk),
      typeof window !== 'undefined'
        && window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  );
}
