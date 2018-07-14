import { registerAC } from './registerModule';
import { postData } from '../thunks/postData';


const registerUser = (url, data) => (dispatch) => {
  postData(dispatch, registerAC, url, 'POST', data);
};

export default registerUser;
