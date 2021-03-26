export const assignPictures = (state) => {
  return {
    type: "ASSIGN_PICTURES",
    payload: state,
  };
};

export const assignComments = (state) => {
  return {
    type: "ASSIGN_COMMENTS",
    payload: state,
  };
};

export const assignIndex = (state) => {
  return {
    type: "ASSIGN_INDEX",
    payload: state,
  };
};

export const commenting = (state) => {
  return {
    type: "COMMENTING",
  };
};

export const fetching = (state) => {
  return {
    type: "FETCHING",
    payload: state,
  };
};
