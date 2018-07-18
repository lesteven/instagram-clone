const POSTING = 'user/POSTING';

export const postAC = () => ({
  type: POSTING,
});

export const userActions = (state = {}, action) => {
  switch (action.type) {
    case POSTING:
      return {
        posting: 'user posting data',
      };
    default:
      return state;
  }
};

