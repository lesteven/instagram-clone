

export const postFile = (url, method, data) => () => fetch(url, {
  method,
  body: data,
});
