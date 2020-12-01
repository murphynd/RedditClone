import React from "react";
import PropTypes from "prop-types";
import Post from "./Post";

function PostList(props) {
  return (
    <React.Fragment>
      <h1>List of Posts</h1>
      {Object.values(props.postList).map((post) => (
        <Post
          userName={post.userName}
          content={post.content}
          timestamp={post.timeStamp}
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
