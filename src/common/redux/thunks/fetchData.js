require('es6-promise').polyfill();
require('isomorphic-fetch');


export const fetchData = url => fetch(url, {
  credentials: 'same-origin',
});

export const asyncFetchData = async (dispatch, url, action) => {
  const response = await fetchData(url)
    .catch(() => console.log('fetch error'));

  const data = await response.json()
    .catch(() => console.log('json error'));

  dispatch(action(data));
};
