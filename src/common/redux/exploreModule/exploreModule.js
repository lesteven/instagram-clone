
const prefix = 'explore';

const GET_EXPLORE = `${prefix}/GET_EXPLORE`;

export const fetchExplore = (data) => ({
  type: GET_EXPLORE,
  data,
});

const initialState = {};

export const explore = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPLORE:
      return {

      }
    default:
      return state;

  }
}
