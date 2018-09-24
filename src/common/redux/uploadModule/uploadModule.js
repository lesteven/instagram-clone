const prefix = 'upload';
const DROP = `${prefix}/DROP`;
const UPLOAD = `${prefix}/UPLOAD`;
const CLEAR = `${prefix}/CLEAR`;
const PROFILE = `${prefix}/DROP_PROFILE_IMG`;


export const genDrop = action => (accepted, rejected) => ({
  type: action,
  data : {
    accepted,
    rejected,
  },
});

export const dropImage = genDrop(DROP);
export const dropProfile = genDrop(PROFILE);


export const uploadAC = data => ({
  type: UPLOAD,
  success: data.success,
});

export const clearUpload = () => ({
  type: CLEAR,
});

const initialState = {
  post : {},
  userimage : {},
};

export const upload = (state = initialState, action) => {
  switch (action.type) {
    case DROP:
      return {
        ...state,
        post: action.data,
      };
    case PROFILE:
      return {
        ...state,
        userimage: action.data,
      };
    case UPLOAD:
      return {
        ...state,
        success: action.success,
      };
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};
