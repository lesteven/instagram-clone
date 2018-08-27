import { loginAC, logoutAC } from './loginModule';
import submit from '../utils/submit';
import { fetchAction } from '../thunks/fetchData';


export const loginUser = submit(loginAC);


export const logOutUser = fetchAction(logoutAC);
