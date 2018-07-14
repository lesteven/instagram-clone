const JSON_ERR = '/error/JSON_ERROR';
const SERVER_ERR = '/error/SERVER_ERROR';


const initialState = {};


const errorWrap = actionCreator => (url, errMsg) => ({
  type: actionCreator,
  url,
  errMsg,
});

export const jsonError = errorWrap(JSON_ERR);
export const serverError = errorWrap(SERVER_ERR);

export const error = (state = initialState, action) => {
  switch (action.type) {
    case SERVER_ERR:
      return {
        ...state,
        [action.url]: action.errMsg,
      };
    case JSON_ERR:
      return {
        ...state,
        [action.url]: action.errMsg,
      };
    default:
      return state;
  }
};
