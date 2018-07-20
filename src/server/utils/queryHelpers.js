
// keys used to access data value. transform to param array
export const turnToParamsArr = (keys, data) => {
  const keysArr = keys.split(',');
  const paramArr = [];
  for (let i = 0; i < keysArr.length; i += 1) {
    paramArr[i] = data[keysArr[i]];
  }
  return paramArr;
};

export const dataToString = (keys, data) => {
  const keysArr = keys.split(',');
  let values = '(';
  for (let i = 0; i < keysArr.length; i += 1) {
    values += `${data[keysArr[i]]}`;
    if (i !== keysArr.length - 1) {
      values += ',';
    }
  }
  values += ')';
  return values;
};
