import { post, postAction, postCurry } from '../thunks/postData';
import { checkJson } from '../../utils/sanitizeData';
import { inputError } from '../errorModule/errorModule';


const submit = actionCreator => (url, data) => (dispatch) => {
  const validJson = checkJson(data);
  if (validJson) {
//    const postData = post(url, data);
//    postAction(dispatch, postData, actionCreator, url);
    postCurry(actionCreator)(url,data)(dispatch);
  } else {
    const errorMsg = 'all fields are required';
    dispatch(inputError(url, errorMsg));
  }
};


export default submit;
