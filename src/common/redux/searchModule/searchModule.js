const prefix = 'search';
const ON_CHANGE = `${prefix}/ON_CHANGE`;
const ENTER = `${prefix}/ENTER`;
const CLEAR = `${prefix}/CLEAR`;


export const keyPress = e => ({
  type: ON_CHANGE,
  value: e.target.value,
});

export const onEnter = data => ({
  type: ENTER,
  data,
});

export const clearSearch = () => ({
  type: CLEAR,
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
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};
