import { postFile, postAction } from '../thunks/postData';
import { uploadAC } from './uploadModule';


const uploadImage = (url, file) => (dispatch) => {
  const postData = postFile(url, 'POST', file);
  return postAction(dispatch, postData, uploadAC, url);
}

export default uploadImage;
