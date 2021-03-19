import Comment from "./Comment";
import CommentInput from "./CommentInput";
import axios from "axios";

import { useEffect, useState } from "react";

export default function CommentsBox() {
  const [comments, setComments] = useState(["a"]);

  const fetchComments = async (picture_id) => {
    try {
      await axios
        .get(
          `https://ms-gallery-api.herokuapp.com/api/gallery/comment/?picture_id=60548d846660ce0015392f33`
          //   ${picture_id}`
        )
        .then((res) => {
          setComments(res.data.comments);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="CommentsBox">
      <CommentInput />
      {comments.map((comment) => (
        <Comment
          username={comment.author}
          avatar={comment.avatar}
          text={comment.text}
          upvotes={comment.upvotes}
        />
      ))}
    </div>
  );
}
