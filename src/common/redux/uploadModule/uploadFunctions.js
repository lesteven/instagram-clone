import { postFile } from '../thunks/postFile';
import { uploadAC } from './uploadModule';
import { postCurry } from '../thunks/postData';


const uploadImage = postCurry(postFile)(uploadAC);
export default uploadImage;
