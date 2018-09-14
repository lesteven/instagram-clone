import { fetchingData, getFeedPage } from './feedModule';
import { asyncGen } from '../thunks/fetchData';


const getFeed = asyncGen(fetchingData)(getFeedPage);

export default getFeed;
