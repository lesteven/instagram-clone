const LOGIN = 'login/LOGIN';

export const loginAC = success => ({
  type: LOGIN,
  success,
});


const initialState = {
  status: false,
};

export const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.success,
      };
    default:
      return state;
  }
};
