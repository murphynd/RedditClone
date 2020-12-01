import React from "react";
import PropTypes from "prop-types";

function Post(props) {
  return (
    <React.Fragment>
      <div>
        <h3>
          {props.username} - {props.timestamp}
        </h3>
        <p>
          <em>{props.content}</em>
        </p>
      </div>
      <hr />
    </React.Fragment>
  );
}

Post.propTypes = {
  timestamp: PropTypes.string,
  content: PropTypes.string,
  username: PropTypes.string,
  id: PropTypes.string,
  upvotes: PropTypes.string,
  downvotes: PropTypes.string,
};

export default Post;
