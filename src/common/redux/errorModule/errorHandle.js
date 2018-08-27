import {
  jsonError,
  serverError,
  clearError,
} from './errorModule';


export const handleJson = (dispatch, action, url, json) => {
  if (json.success) {
    dispatch(action(json));
    dispatch(clearError(url));
  } else {
    dispatch(serverError(url, json.failed));
  }
};


const jsonErrMsg = 'failed to process data';

export const handleJsonErr = (dispatch, url) => {
  dispatch(jsonError(url, jsonErrMsg));
};
