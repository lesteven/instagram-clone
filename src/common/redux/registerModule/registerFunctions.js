import { registerAC } from './registerModule';
import { postData } from '../thunks/postData';
import preventDefault from '../../utils/preventDefault';


export const registerUser = (url, data) => (dispatch) => {
  postData(dispatch, registerAC, url, 'POST', data);
};

