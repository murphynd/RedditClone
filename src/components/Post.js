import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  console.log("sanity check");
  const e = () => {
    console.log("s");
    props.editButton(props);
  };
  const d = () => {
    console.log("s");
    props.deleteButton(props.id);
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
        <button onClick={e}>Edit</button>
        <button onClick={d}>Delete</button>
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
  upvotes: PropTypes.string,
  downvotes: PropTypes.string,
};

export default Post;
