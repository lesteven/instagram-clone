import { postAC } from '../userModule/userModule';
import { handleJson, handleJsonErr } from '../errorModule/errorHandle';

const debug = require('debug')('http');

export const postCurry = post => action => (url, data) => (dispatch) => {
  dispatch(postAC());

  post(url, data)
    .then(res => res.json())
    .then(json => handleJson(dispatch, action, url, json))
    .catch((err) => {
      debug('error message!!!', err);
      return handleJsonErr(dispatch, url);
    });
};


export const genFetch = (method, modify) => (url, data) => {
  const modifiedData = modify(data);
  return fetch(url, {
    method,
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: modifiedData,
  });
};

export const post = genFetch('POST', JSON.stringify);
export const deleteData = genFetch('DELETE', JSON.stringify);
export const update = genFetch('PUT', JSON.stringify);

export const postAction = postCurry(post);
