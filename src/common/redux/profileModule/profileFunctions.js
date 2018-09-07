import { fetchingData, getProfilePage } from './profileModule';
import { asyncGen } from '../thunks/fetchData';


// const getProfile = fetchGen(fetchingData)(getProfilePage);
const getProfile = asyncGen(fetchingData)(getProfilePage);

export default getProfile;
