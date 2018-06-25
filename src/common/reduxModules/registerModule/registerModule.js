const registerAct = 'redux/register/LOGIN';

export const registerAC = inputData => ({
  registerAct,
  inputData,
});

const initialState = {
  status: false,
};

export const register = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
