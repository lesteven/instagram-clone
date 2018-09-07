import { fetchingData, getProfilePage } from './profileModule';
import { asyncGen } from '../thunks/fetchData';


// const getProfile = fetchGen(fetchingData)(getProfilePage);
const getProfile = asyncGen(fetchingData)(getProfilePage);

export const updateFeed = (state, action) => {
  if (!state.feed || state.profile !== action.profile.profile) { 
    return [
      ...action.profile.feed,
    ]
  } else {
    return [
      ...state.feed,
      ...action.profile.feed,
    ]
  }
}
export default getProfile;
