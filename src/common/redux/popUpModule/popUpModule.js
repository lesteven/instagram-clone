import { toggle, toggleGrid } from './popUpFunctions';


const prefix = 'popUp';
const TOGGLE_POP_UP = `${prefix}/TOGGLE_POPUP`;
const CLICK_GRID = `${prefix}/CLICK_GRID`;


export const toggleClick = () => ({
  type: TOGGLE_POP_UP,
});

export const clickGridPost = () => ({
  type: CLICK_GRID,
});

const initialState = {
  popUpDisplay: { display: 'none' },
  gridPost: { display: 'none' },
};


export const popUp = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_POP_UP:
      return {
        ...state,
        popUpDisplay: {
          display: toggle(state.popUpDisplay.display),
        },
      };
    case CLICK_GRID:
      return {
        ...state,
        gridPost: {
          ...state.gridPost,
          display: toggleGrid(state.gridPost.display),
        }
      }
    default:
      return state;
  }
};
