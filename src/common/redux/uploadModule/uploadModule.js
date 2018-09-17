const prefix = 'upload';
const DROP = `${prefix}/DROP`;
const UPLOAD = `${prefix}/UPLOAD`;
const CLEAR = `${prefix}/CLEAR`;

export const dropImage = (accepted, rejected) => ({
  type: DROP,
  accepted,
  rejected,
});

export const uploadAC = data => ({
  type: UPLOAD,
  success: data.success,
});

export const clearUpload = () => ({
  type: CLEAR,
})

const initialState = {

};

export const upload = (state = initialState, action) => {
  switch (action.type) {
    case DROP:
      return {
        ...state,
        accepted: action.accepted,
        rejected: action.rejected,
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
