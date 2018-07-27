import { registerAC } from './registerModule';
import submit from '../utils/submit';

/*
const registerUser = (url, data) => (dispatch) => {
  const validJson = checkJson(data);
  if (validJson) {
    const postData = post(url, 'POST', data);
    postAction(dispatch, postData, registerAC, url);
  } else {
    const errorMsg = 'all fields are required';
    dispatch(inputError(url, errorMsg));
  }
};
*/

const registerUser = submit(registerAC);

export default registerUser;
