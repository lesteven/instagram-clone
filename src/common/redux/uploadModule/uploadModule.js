const prefix = 'upload';
const DROP = `${prefix}/DROP`;

export const dropImage = (accepted, rejected) => ({
  type: DROP,
  accepted,
  rejected,
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
