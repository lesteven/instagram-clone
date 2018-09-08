import { postAction } from '../thunks/postData';


const prefix = 'FRIENDS';
const FOLLOW = `${prefix}/FOLLOW`;
const UNFOLLOW = `${prefix}/UNFOLLOW`;


export const followUser = (data) => ({
  type: FOLLOW,
  data
});

export const unfollowUser = (data) => ({
  type: UNFOLLOW,
  data,
});

const initialState = {};

export const friends = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...action.data,
      };
    case UNFOLLOW:
      return {
        ...action.data,
      };
    default:
      return state;
  }
};
