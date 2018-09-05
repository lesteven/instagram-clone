const prefix = 'profile';

const FETCHING = `${prefix}/FETCHING`;
const GET_PROFILE = `${prefix}/GET_PROFILE`;

export const fetchingData = () => ({
  type: FETCHING,
});

export const getProfilePage = profile => ({
  type: GET_PROFILE,
  profile,
});



const initialState = {};

export const profile = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true,
      }
    case GET_PROFILE:
      return {
        ...action.profile,
        fetching: false,
      };
    default:
      return state;
  }
};
