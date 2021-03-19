import CommentsBox from "./CommentsBox";
import { useState } from "react";

export default function Panel() {
  const [commentsBox, setCommentsBox] = useState(false);

  const toogleComments = () => {
    setCommentsBox(!commentsBox);
  };

  return (
    <div className="Panel">
      <div className="buttons">
        <button>Like</button>
        <button onClick={toogleComments}>Comments</button>
      </div>
      {commentsBox ? <CommentsBox /> : ""}
    </div>
  );
}
