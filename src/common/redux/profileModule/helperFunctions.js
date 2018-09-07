
const updateFeed = (state, action) => {
  if (!state.feed || state.profile !== action.profile.profile) {
    return [
      ...action.profile.feed,
    ];
  }
  return [
    ...state.feed,
    ...action.profile.feed,
  ];
};

export default updateFeed;
