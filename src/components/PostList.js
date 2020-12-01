import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";

function PostList(props) {
  return (
    <React.Fragment>
      {Object.values(props.postList).map((post) => (
        <Post
          name={post.username}
          content={post.content}
          timestamp={post.timestamp}
          id={post.id}
          key={post.id}
          upvotes={post.upvotes}
          downvotes={post.downvotes}
        />
      ))}
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
};

export default PostList;
