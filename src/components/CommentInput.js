// import Comment from "./Comment";
import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { commenting, fetching } from "../actions";

export default function CommentInput(props) {
  const [author, setAuthor] = useState("Guest");
  const [avatar, setAvatar] = useState(
    "https://cdn4.iconfinder.com/data/icons/gray-business-2/512/xxx006-512.png"
  );
  const [text, setText] = useState("");
  const isFetching = useSelector((state) => state.isFetching);
  const dispatch = useDispatch();

  const sendComment = async (id, author, avatar, text) => {
    try {
      dispatch(fetching(true));
      await axios
        .post(
          `https://ms-gallery-api.herokuapp.com/api/gallery/add-comment/?picture_id=${id}&author=${author}&avatar=${avatar}&text=${text}`
        )
        .then((res) => {
          dispatch(fetching(false));
          console.log("New Comment!");
        });
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (text) {
        sendComment(props.picture_id, author, avatar, text);
        dispatch(commenting());
        setText("");
      }
    }
  };

  return (
    <div className="CommentInput">
      <div className="user-info">
        <input
          id="username"
          type="text"
          placeholder="username"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          id="avatar"
          type="url"
          placeholder="avatar url"
          onChange={(e) => setAvatar(e.target.value)}
        />
      </div>
      <input
        id="comment-input"
        type="text"
        placeholder="Write a public comment..."
        autoComplete="off"
        maxLength="120"
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
        value={text || ""}
      />
      {isFetching ? <i className="loader"></i> : ""}
    </div>
  );
}
