import { fetchAction } from '../thunks/fetchData';
import { onEnter } from './searchModule';

const searchUser = fetchAction(onEnter);

export default searchUser;
