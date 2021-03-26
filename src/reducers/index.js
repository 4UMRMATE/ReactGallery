import activeIndex from "./activeIndex";
import pictures from "./pictures";
import comments from "./comments";
import commenting from "./commenting";
import isFetching from "./isFetching";
const { combineReducers } = require("redux");

const allReducers = combineReducers({
  activeIndex: activeIndex,
  pictures: pictures,
  comments: comments,
  commenting: commenting,
  isFetching: isFetching,
});

export default allReducers;
