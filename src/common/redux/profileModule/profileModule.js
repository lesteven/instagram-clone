const prefix = 'profile';

const GET_PROFILE = `${prefix}/GET_PROFILE`;

export const getProfilePage = profile => ({
  type: GET_PROFILE,
  profile,
});

const initialState = {};

export const profile = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...action.profile,
      };
    default:
      return state;
  }
};
