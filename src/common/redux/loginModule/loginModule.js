const prefix = 'login';
const LOGIN = `${prefix}/LOGIN`;
const PERSIST_LOGIN = `${prefix}/PERSIST`;


export const loginAC = success => ({
  type: LOGIN,
  success,
});

export const loggedIn = (data) => ({
  type: PERSIST_LOGIN,
  data, 
})

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
      }
    default:
      return state;
  }
};
