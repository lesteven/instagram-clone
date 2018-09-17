
export const genFetch = method => (url, data) => fetch(url, {
  method,
  credentials: 'same-origin',
  body: data,
});

export const postFile = genFetch('POST');
