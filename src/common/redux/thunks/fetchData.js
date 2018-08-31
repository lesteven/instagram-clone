import { handleJson, handleJsonErr } from '../errorModule/errorHandle';
import { fetchAC } from '../userModule/userModule';

require('es6-promise').polyfill();
require('isomorphic-fetch');


export const fetchData = url => fetch(url, {
  credentials: 'same-origin',
});

export const asyncFetchData = action => url => async (dispatch) => {
  const response = await fetchData(url)
    .catch((e) => {
      console.log(e);
      console.log('fetch error')
    });

  const data = await response.json()
    .catch(() => console.log('json error'));

  dispatch(action(data));
};

export const fetchAction = actionAC => url => (dispatch) => {
  dispatch(fetchAC());

  fetchData(url)
    .then(res => res.json())
    .then(json => handleJson(dispatch, actionAC, url, json))
    .catch(() => handleJsonErr(dispatch, url));
};
