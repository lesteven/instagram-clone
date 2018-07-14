import { jsonError, serverError } from '../errorModule/errorModule';

export const post = (url, method, data) => fetch(url, {
  method,
  credentials: 'same-origin',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});


const jsonErrMsg = 'failed to process data';


const handleJson = (dispatch, action, url, json) => {
  if (json.success) {
    dispatch(action(json));
  } else {
    dispatch(serverError(url, json));
  }
};

export const postData = (dispatch, action, url, method, data) => {
  post(url, method, data)
    .then(res => res.json())
    .then(
      json => handleJson(dispatch, action, url, json),
      () => dispatch(jsonError(url, jsonErrMsg)),
    );
};
