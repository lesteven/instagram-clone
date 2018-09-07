
const prefix = 'FRIENDS';
const FOLLOW = `${prefix}/FOLLOW`;
const UNFOLLOW = `${prefix}/UNFOLLOW`;

const initialState = {};

export const followUser = () => ({

});

export const unfollowUser = () => ({

});

export const friends = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {

      };
    case UNFOLLOW:
      return {

      };
    default:
      return state;
  }
};

