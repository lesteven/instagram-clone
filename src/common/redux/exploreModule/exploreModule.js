import { updateGridFeed } from './helperFunctions';


const prefix = 'explore';

const GET_EXPLORE = `${prefix}/GET_EXPLORE`;
const FETCHING = `${prefix}/FETCHING`;

export const fetchingData = () => ({
  type: FETCHING,
});

export const fetchedExplore = data => ({
  type: GET_EXPLORE,
  data,
});

const initialState = {};

export const explore = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true,
      };
    case GET_EXPLORE:
      return {
        ...action.data,
        fetching: false,
        // feed: updateFeed(state, action.data),
        feed: updateGridFeed(state, action.data),
      };
    default:
      return state;
  }
};
