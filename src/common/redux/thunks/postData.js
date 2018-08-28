import { postAC } from '../userModule/userModule';
import { handleJson, handleJsonErr } from '../errorModule/errorHandle';


export const post = (url, method, data) => () => fetch(url, {
  method,
  credentials: 'same-origin',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});

export const postFile = (url, method, data) => () => fetch(url, {
  method,
  body: data,
});

// handles data if success, else send error message
export const postAction = (dispatch, postFn, action, url) => {
  dispatch(postAC());

  postFn()
    .then(res => res.json())
    .then(json => handleJson(dispatch, action, url, json))
    .catch((err) => {
      console.log('error message!!!', err);
      return handleJsonErr(dispatch, url);
    });
};
