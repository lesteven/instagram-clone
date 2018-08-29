

export const genFetch = method => (url, data) => fetch(url, {
  method,
  body: data,
});

export const postFile = genFetch('POST');
