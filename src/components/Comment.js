export default function Comment(props) {
  return (
    <div className="Comment">
      <div className="user">
        <img
          id="avatar"
          src={props.avatar}
          alt="avatar"
          width="50px"
          height="50px"
        ></img>
        <h5 id="username">{props.username}</h5>
      </div>
      <p id="text">{props.text}</p>
      <div className="upvotes">
        <button id="upvote">+</button>
        <p>{props.upvotes}</p>
        <button id="downvote">-</button>
      </div>
    </div>
  );
}
