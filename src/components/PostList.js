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
          selectedpost={props.post}
          upvoteButton={props.onClickingUpVote}
          downvoteButton={props.onClickingDownVote}
          editButton={props.onClickingEdit}
          deleteButton={props.onClickingDelete}
          // onClinckingDelete: PropTypes.func,
        />
      ))}
    </React.Fragment>
  );
}

PostList.propTypes = {
  onClickingDelete: PropTypes.func,
};

export default PostList;
