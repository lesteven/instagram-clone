import { FOLLOW, UNFOLLOW } from './friendsModule';


export const followUser = data => ({
  type: FOLLOW,
  data,
});

export const unfollowUser = data => ({
  type: UNFOLLOW,
  data,
});
