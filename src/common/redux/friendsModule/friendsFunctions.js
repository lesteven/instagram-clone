import { postAction } from '../thunks/postData';
import { followUser, unfollowUser } from './friendsModule';

export const follow = postAction(followUser);

export const unfollow = postAction(unfollowUser);



