import { toggle } from './popUpFunctions';

const togglePopUp = 'popUp/TOGGLE_POPUP';

export const toggleClick = () => ({
  type: togglePopUp,
});

const initialState = {
  popUpDisplay: { display: 'none' },
};

export const popUp = (state = initialState, action) => {
  switch (action.type) {
    case togglePopUp:
      return {
        ...state,
        popUpDisplay: {
          display: toggle(state.popUpDisplay.display),
        },
      };
    default:
      return state;
  }
};
