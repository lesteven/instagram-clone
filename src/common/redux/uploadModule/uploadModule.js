const prefix = 'upload';
const DROP = `${prefix}/DROP`;
const UPLOAD = `${prefix}/UPLOAD`;


export const dropImage = (accepted, rejected) => ({
  type: DROP,
  accepted,
  rejected,
});

export const uploadAC = (success) => ({
  type: UPLOAD,
  success,
});

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
    default:
      return state;
  }
};
