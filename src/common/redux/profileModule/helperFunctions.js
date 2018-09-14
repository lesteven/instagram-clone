
const updateFeed = (state, data) => {
  if (!state.feed || state.profile !== data.profile) {
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
