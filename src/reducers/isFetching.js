const fetching = (state = false, action) => {
  switch (action.type) {
    case "FETCHING":
      return action.payload;
    default:
      return state;
  }
};

export default fetching;
