import { GET_PROFILE } from '../profileModule/profileModule';
import followStatus from './helperFunctions';

const prefix = 'FRIENDS';

export const FOLLOW = `${prefix}/FOLLOW`;
export const UNFOLLOW = `${prefix}/UNFOLLOW`;


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
