import {
  handleJson,
  handleJsonErr,
} from '../errorModule/errorHandle';
import { fetchAC } from '../userModule/userModule';

require('es6-promise').polyfill();
require('isomorphic-fetch');


export const fetchData = url => fetch(url, {
  credentials: 'same-origin',
});

export const isoFetch = url => fetch(url, {
  credentials: 'include',
});

/*
  async function needed to await data on server
  before sending to client
*/

export const asyncGen = userAC => action => url => async (dispatch) => {
  if (userAC) {
    dispatch(userAC());
  }
  const response = await fetchData(url)
    .catch((e) => {
      console.log(e);
      console.log('fetch error');
    });

  const data = await response.json()
    .catch(() => handleJsonErr(dispatch, url));

  handleJson(dispatch, action, url, data);
};

// pure function for redux
export const fetchGen = userAction => actionAC => url => (dispatch) => {
  if (userAction) {
    dispatch(userAction());
  }

  fetchData(url)
    .then(res => res.json())
    .then(json => handleJson(dispatch, actionAC, url, json))
    .catch(() => handleJsonErr(dispatch, url));
};

export const fetchAction = fetchGen(fetchAC);
