
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

export default updateFeed;
