/*
export const sanitizeData = (object) => {
  const keys = Object.keys(object);
  for (let i = 0; i < keys.length; i += 1) {
    object[keys[i]];
  }
};
*/
export const checkJson = (object) => {
  const keys = Object.keys(object);
  for (let i = 0; i < keys.length; i += 1) {
    if (object[keys[i]] === '') return false;
  }
  return true;
};

export const sanitizeData = 'hello';
