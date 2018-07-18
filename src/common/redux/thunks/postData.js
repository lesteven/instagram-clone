import {
  jsonError,
  serverError,
  clearError,
} from '../errorModule/errorModule';
import { postAC } from '../userModule/userModule';


export const post = (url, method, data) => () => fetch(url, {
  method,
  credentials: 'same-origin',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});


const jsonErrMsg = 'failed to process data';


const handleJson = (dispatch, action, url, json) => {
  if (json.success) {
    dispatch(action(json));
    dispatch(clearError(url));
  } else {
    dispatch(serverError(url, json.failed));
  }
};

// handles data if success, else send error message
export const postAction = (dispatch, postFn, action, url) => {
  dispatch(postAC());

  postFn()
    .then(res => res.json())
    .then(
      json => handleJson(dispatch, action, url, json),
      () => dispatch(jsonError(url, jsonErrMsg)),
    );
};

