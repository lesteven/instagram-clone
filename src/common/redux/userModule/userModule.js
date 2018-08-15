const POSTING = 'user/POSTING';
const FETCHING = 'user/FETCHING';


export const postAC = () => ({
  type: POSTING,
});

export const fetchAC = () => ({
  type: FETCHING,
});

export const userActions = (state = {}, action) => {
  switch (action.type) {
    case POSTING:
      return {
        posting: 'user posting data',
      };
    case FETCHING:
      return {
        fetching: 'user fetching data',
      };
    default:
      return state;
  }
};
