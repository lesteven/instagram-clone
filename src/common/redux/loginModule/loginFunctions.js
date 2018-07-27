import { loginAC } from './loginModule';
import submit from '../utils/submit';

const registerUser = submit(loginAC);

export default registerUser;
