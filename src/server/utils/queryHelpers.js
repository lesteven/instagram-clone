
// keys used to access data value. transform to param array
export const turnToParamsArr = (keys, data) => {
  const keysArr = keys.split(',');
  const paramArr = [];
  for (let i = 0; i < keysArr.length; i += 1) {
    paramArr[i] = data[keysArr[i]];
  }
  return paramArr;
};

// make placeholders for sql values
export const valuesPlaceholder = (keys) => {
  const keysArr = keys.split(',');

  let valuesPH = '(';

  for (let i = 1; i <= keysArr.length; i += 1) {
    valuesPH += `$${i}`;
    if (i !== keysArr.length) {
      valuesPH += ',';
    }
  }
  valuesPH += ')';
  return valuesPH;
};

/*
// update values for sql command
export const updateValues = (keys) => {
  const keysArr = keys.split(',');
};
*/
