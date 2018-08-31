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


export const reducers = combineReducers({
  view,
  popUp,
  userActions,
  login,
  error,
  upload,
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
