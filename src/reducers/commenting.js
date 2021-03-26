const commenting = (state = false, action) => {
  switch (action.type) {
    case "COMMENTING":
      return true;
    default:
      return false;
  }
};

export default commenting;
