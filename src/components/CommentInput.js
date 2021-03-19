// import Comment from "./Comment";

export default function CommentInput() {
  return (
    <div className="CommentInput">
      <div className="user-info">
        <input id="username" type="text" placeholder="username" />
        <input id="avatar" type="url" placeholder="avatar url" />
      </div>
      <input
        id="text"
        type="text"
        placeholder="text"
        autoComplete="off"
        maxLength="120"
      />
    </div>
  );
}
