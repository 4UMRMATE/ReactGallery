const activeIndex = (state = 0, action) => {
  switch (action.type) {
    case "ASSIGN_INDEX":
      return action.payload;
    default:
      return state;
  }
};

export default activeIndex;
