import { postAction } from '../thunks/postData';
import { GET_PROFILE } from '../profileModule/profileModule';
import { followStatus } from './friendsFunctions';

const prefix = 'FRIENDS';
const FOLLOW = `${prefix}/FOLLOW`;
const UNFOLLOW = `${prefix}/UNFOLLOW`;


export const followUser = data => ({
  type: FOLLOW,
  data,
});

export const unfollowUser = data => ({
  type: UNFOLLOW,
  data,
});

const initialState = {};

export const friends = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...action.data,
        ...followStatus(action.data),
      };
    case UNFOLLOW:
      return {
        ...action.data,
        ...followStatus(action.data),
      };
    case GET_PROFILE:
      return {
        follow: action.profile.follow,
        ...followStatus(action.profile),
      };
    default:
      return state;
  }
};
