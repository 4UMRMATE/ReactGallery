import Comment from "./Comment";
import CommentInput from "./CommentInput";
import axios from "axios";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { assignComments } from "../actions";

export default function CommentsBox() {
  const comments = useSelector((state) => state.comments);
  const commenting = useSelector((state) => state.commenting);
  const pictures = useSelector((state) => state.pictures);
  const index = useSelector((state) => state.activeIndex);
  const dispatch = useDispatch();

  const fetchComments = async (picture_id) => {
    try {
      await axios
        .get(
          `https://ms-gallery-api.herokuapp.com/api/gallery/comment/?picture_id=${picture_id}`
        )
        .then((res) => {
          dispatch(assignComments(res.data.comments));
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchComments(pictures[index]._id);
  }, [index, commenting]);

  return (
    <div className="CommentsBox">
      <CommentInput picture_id={pictures[index]._id} />
      {comments.map((comment, idx) => (
        <Comment
          key={idx}
          username={comment.author}
          avatar={comment.avatar}
          text={comment.text}
          upvotes={comment.upvotes}
        />
      ))}
    </div>
  );
}
