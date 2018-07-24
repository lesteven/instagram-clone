const REGISTERED = 'register/REGISTERED';

export const registerAC = success => ({
  type: REGISTERED,
  success,
});


const initialState = {
  status: false,
};

export const register = (state = initialState, action) => {
  switch (action.type) {
    case REGISTERED:
      return {
        ...state,
        ...action.success,
      };
    default:
      return state;
  }
};
