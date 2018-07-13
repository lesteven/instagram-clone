import { registerAC } from './registerModule';
import { asyncPostData } from '../thunks/postData';

const url = '/api/register';


const registerUser = data => (dispatch) => {
  asyncPostData(dispatch, registerAC, url, 'POST', data);
};

export default registerUser;
