import { postAction } from '../thunks/postData';
import { followUser, unfollowUser } from './friendsModule';


export const follow = postAction(followUser);

export const unfollow = postAction(unfollowUser);

export const followStatus = (data) => {
  if (data.follow) {
    return {
      text: 'Following',
      className: 'following',
    }
  } else {
    return {
      text: 'Follow',
      className: 'follow',
    }    
  } 
}
