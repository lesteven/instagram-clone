import { RESET } from '../loginModule/loginModule';
import updateFeed from './helperFunctions';

const prefix = 'profile';

const FETCHING = `${prefix}/FETCHING`;
const GET_PROFILE = `${prefix}/GET_PROFILE`;

export const fetchingData = () => ({
  type: FETCHING,
});

export const getProfilePage = profile => ({
  type: GET_PROFILE,
  profile,
});


const initialState = {};

export const profile = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true,
      };
    case GET_PROFILE:
      return {
        success: action.profile.success,
        profile: action.profile.profile,
        id: action.profile.id,
        feed: updateFeed(state, action),
        hasOldPage: action.profile.hasOldPage,
        fetching: false,
        follow: action.profile.follow,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
