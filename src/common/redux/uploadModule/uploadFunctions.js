import { postFile } from '../thunks/postFile';
import { uploadAC, profileAC } from './uploadModule';
import { postCurry } from '../thunks/postData';


const uploadImage = postCurry(postFile)(uploadAC);
export const uploadProfile = postCurry(postFile)(profileAC);

export default uploadImage;
