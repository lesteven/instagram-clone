import { jsonError, serverError } from '../errorModule/errorModule';

export const post = (url, method, data) => () => {
  return fetch(url, {
    method,
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}


const jsonErrMsg = 'failed to process data';


const handleJson = (dispatch, action, url, json) => {
  if (json.success) {
    dispatch(action(json));
  } else {
    dispatch(serverError(url, json.failed));
  }
};

// handles data if success, else send error message
export const postAction = (dispatch, postFn, action, url) => {
  postFn()
    .then(res => res.json())
    .then(
      json => handleJson(dispatch, action, url, json),
      err => {
        console.log(err.message);
        return dispatch(jsonError(url, jsonErrMsg));
      }
    );
};


