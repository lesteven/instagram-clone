import { RESET } from '../loginModule/loginModule';
import updateFeed from '../profileModule/helperFunctions';

const prefix = 'feed';

const FETCHING = `${prefix}/FETCHING`;
export const GET_FEED = `${prefix}/GET_FEED`;

export const fetchingData = () => ({
  type: FETCHING,
});

export const getFeedPage = feed => ({
  type: GET_FEED,
  feed,
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
        ...action.feed,
        feed: updateFeed(state, action),
        fetching: false,
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};
