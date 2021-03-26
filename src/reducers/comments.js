const comments = (state = [], action) => {
  switch (action.type) {
    case "ASSIGN_COMMENTS":
      return action.payload;
    default:
      return state;
  }
};

export default comments;
