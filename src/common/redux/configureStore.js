import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { view } from './viewModule/viewModule';
import { register } from './registerModule/registerModule';
import { error } from './errorModule/errorModule';


export const reducers = combineReducers({
  view,
  register,
  error,
});


export default function configureStore(preloadedState) {
  return createStore(
    reducers,
    preloadedState,
    compose(
      applyMiddleware(thunk),
      typeof window !== 'undefined' &&
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  );
}
