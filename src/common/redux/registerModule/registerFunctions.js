import { registerAC } from './registerModule';
import { post, postAction } from '../thunks/postData';
import { checkJson } from '../../utils/sanitizeData';
import { inputError } from '../errorModule/errorModule';


const registerUser = (url, data) => (dispatch) => {
  const validJson = checkJson(data); 
  if (validJson) {
    const postData = post(url, 'POST', data);
    postAction(dispatch, postData, registerAC, url);
  }
  else {
    const errorMsg = 'all fields are required';
    dispatch(inputError(url, errorMsg));
  }
};

export default registerUser;
