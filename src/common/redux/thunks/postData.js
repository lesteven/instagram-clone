
export const postData = (url, method, data) => fetch(url, {
  method,
  credentials: 'same-origin',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});

export const asyncPostData =
  async (dispatch, action, url, method, data) => {
    const response = await postData(url, method, data)
      .catch(() => console.log('post err'));

    const json = await response.json()
      .catch(() => console.log('json err'));

    dispatch(action(json));
  };
