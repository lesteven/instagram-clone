import { RESET } from '../loginModule/loginModule';
import { updateGridFeed } from './helperFunctions';

const prefix = 'profile';

const FETCHING = `${prefix}/FETCHING`;
export const GET_PROFILE = `${prefix}/GET_PROFILE`;
const CLEAR = `${prefix}/CLEAR`;

export const fetchingData = () => ({
  type: FETCHING,
});

export const getProfilePage = profile => ({
  type: GET_PROFILE,
  profile,
});

export const clearProfilePage = () => ({
  type: CLEAR,
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
        feed: updateGridFeed(state, action.profile),
        fetching: false,
        follow: 'check friends redux',
      };
    case CLEAR:
      return initialState;
    case RESET:
      return initialState;
    default:
      return state;
  }
};
