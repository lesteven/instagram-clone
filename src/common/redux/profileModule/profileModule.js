import { RESET } from '../loginModule/loginModule';
import updateFeed from './helperFunctions';

const prefix = 'profile';

const FETCHING = `${prefix}/FETCHING`;
export const GET_PROFILE = `${prefix}/GET_PROFILE`;

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
        ...action.profile,
        feed: updateFeed(state, action),
        fetching:false,
        follow: 'check friends redux',
      }
    case RESET:
      return initialState;
    default:
      return state;
  }
};
