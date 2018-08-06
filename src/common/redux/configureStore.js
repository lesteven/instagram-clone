import {
  createStore, applyMiddleware, combineReducers, compose,
} from 'redux';
import thunk from 'redux-thunk';
import { view } from './viewModule/viewModule';
import { register } from './registerModule/registerModule';
import { error } from './errorModule/errorModule';
import { userActions } from './userModule/userModule';
import { login } from './loginModule/loginModule';


export const reducers = combineReducers({
  view,
  userActions,
  register,
  login,
  error,
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
