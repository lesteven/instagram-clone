import { postAC } from '../userModule/userModule';
import { handleJson, handleJsonErr } from '../errorModule/errorHandle';


// handles data if success, else send error message
export const postAction = (dispatch, postFn, action, url) => {
  dispatch(postAC());

  postFn
    .then(res => res.json())
    .then(json => handleJson(dispatch, action, url, json))
    .catch((err) => {
      console.log('error message!!!', err);
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
