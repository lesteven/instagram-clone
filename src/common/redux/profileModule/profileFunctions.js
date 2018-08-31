import { getProfilePage } from './profileModule';
import { asyncFetchData } from '../thunks/fetchData';


const getProfile = asyncFetchData(getProfilePage);

export default getProfile;


