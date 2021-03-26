const pictures = (state = [], action) => {
  switch (action.type) {
    case "ASSIGN_PICTURES":
      return action.payload;
    default:
      return state;
  }
};

export default pictures;
