import { fetchingData, fetchedExplore } from './exploreModule';
import { asyncGen } from '../thunks/fetchData';


const getExplore = asyncGen(fetchingData)(fetchedExplore);

export default getExplore;
