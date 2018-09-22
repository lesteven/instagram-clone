const prefix = 'search';
const ON_CHANGE = `${prefix}/ON_CHANGE`;
const ENTER = `${prefix}/ENTER`;


export const keyPress = e => ({
  type: ON_CHANGE,
  value: e.target.value,
});

export const onEnter = data => ({
  type: ENTER,
  data,
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
    case ENTER:
      return {
        ...state,
        ...action.data,
      };
    default:
      return state;
  }
};
