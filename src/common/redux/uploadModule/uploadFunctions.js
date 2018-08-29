import { postFile } from '../thunks/postFile';
import { uploadAC } from './uploadModule';
import { postAction } from '../thunks/postData';

const uploadImage = (url, file) => (dispatch) => {
  const postData = postFile(url, file);
  return postAction(dispatch, postData, uploadAC, url);
}

export default uploadImage;
