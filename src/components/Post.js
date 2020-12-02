import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  // ! Try and set initial values to zero or current value from props on lines 6 and 7
  // props.upvotes = props.upvotes ||= 0;
  // props.downvotes = props.downvotes ||= 0;
  console.log("sanity check");
  const e = () => {
    console.log("e");
    props.editButton(props.id);
  };
  const d = () => {
    console.log("d");
    props.deleteButton(props.id);
  };
  const up = () => {
    console.log("upvote button pressed");
    props.upvoteButton(props.id);
  };
  const down = () => {
    console.log("downvote button presed");
    props.downvoteButton(props.id);
  };
  return (
    <React.Fragment>
      <div>
        <h3>
          {props.userName} - {props.timeStamp}
        </h3>
        <p>
          <em>{props.content}</em>
        </p>
        <p>
          upvotes: {props.upvotes} - downvotes: {props.downvotes}
        </p>
        <button className="btn btn-primary" onClick={up}>
          Upvote
        </button>
        <button className="btn btn-primary" onClick={down}>
          Downvote
        </button>
        <button className="btn btn-primary" onClick={e}>
          Edit
        </button>

        <br />
        <button className="btn btn-dark" onClick={d}>
          Delete
        </button>
      </div>
      <hr />
    </React.Fragment>
  );
}

Post.propTypes = {
  timeStamp: PropTypes.string,
  content: PropTypes.string,
  userName: PropTypes.string,
  id: PropTypes.string,
  upvotes: PropTypes.number,
  downvotes: PropTypes.number,
};

export default Post;
