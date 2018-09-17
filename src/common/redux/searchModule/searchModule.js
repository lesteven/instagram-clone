const prefix = 'search';
const ON_CHANGE = `${prefix}/ON_CHANGE`;

export const keyPress = (e) => ({
  type: ON_CHANGE,
  value: e.target.value,
});

const initialState = {
  value: '',
};

export const search = (state = initialState, action) => {
  switch (action.type) {
    case ON_CHANGE:
      return {
        value: action.value,
      };
    default:
      return state;
  }
};
