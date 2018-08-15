const prefix = 'login';
const LOGIN = `${prefix}/LOGIN`;
const PERSIST_LOGIN = `${prefix}/PERSIST`;
const LOGOUT = `${prefix}/LOGOUT`;

export const loginAC = success => ({
  type: LOGIN,
  success,
});

export const loggedIn = data => ({
  type: PERSIST_LOGIN,
  data,
});

export const logoutAC = success => ({
  type: LOGOUT,
  success,
});

const initialState = {
  redirect: false,
};

export const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.success,
      };
    case PERSIST_LOGIN:
      return {
        ...state,
        ...action.data,
      };
    case LOGOUT:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};
