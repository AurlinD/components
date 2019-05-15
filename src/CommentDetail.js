import React from "react";

//render comment detail into our app

const CommentDetail = props => {
  //console.log(props);
  return (
    <div className="comment">
      <a herf="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>

        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.commentUser}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
