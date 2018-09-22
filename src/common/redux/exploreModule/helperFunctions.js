
const updateFeed = (state, data) => {
  if (!state.feed) {
    return [
      ...data.feed,
    ];
  }
  return [
    ...state.feed,
    ...data.feed,
  ];
};

export const updateGridFeed = (state, data) => {
  // console.log(data.feed);
  if (!state.feed) {
    return [
      data.feed,
    ];
  }
  return [
    ...state.feed,
    data.feed,
  ];
};

export default updateFeed;
