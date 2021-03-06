import { RESET } from '../loginModule/loginModule';
import updateFeed from '../profileModule/helperFunctions';

const prefix = 'feed';

const FETCHING = `${prefix}/FETCHING`;
export const GET_FEED = `${prefix}/GET_FEED`;
const CLEAR = `${prefix}/CLEAR`;

export const fetchingData = () => ({
  type: FETCHING,
});

export const getFeedPage = data => ({
  type: GET_FEED,
  data,
});

export const clearFeed = () => ({
  type: CLEAR,
});

const initialState = {};

export const feed = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true,
      };
    case GET_FEED:
      return {
        ...action.data,
        feed: updateFeed(state, action.data),
        fetching: false,
      };
    case CLEAR:
      return initialState;
    case RESET:
      return initialState;
    default:
      return state;
  }
};
