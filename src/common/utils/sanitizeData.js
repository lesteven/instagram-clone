
export const sanitizeData = object =>{
  for (const key in object) {
    console.log(object[key]);
  }
}

export const checkJson = object => {
  for (const key in object) {
    if (object[key] === '') return false;
  }
  return true;
}
