import PropTypes from "prop-types";
import React from "react";
import ReusableForm from "./ReusableForm";

function EditPost(props) {
  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    props.onEditPost({
      userName: event.target.userName.value,
      content: event.target.content.value,
      id: props.post.id,
      upvotes: props.post.upvotes,
      downvotes: props.post.downvotes,
      //add everything from object
    });
  }
  return (
    <React.Fragment>
      <h1>Edit Post</h1>

      <ReusableForm
        selectedPost={props.post}
        formSubmissionHandler={handleEditPostFormSubmission}
        buttonText="Edit Post"
      />
    </React.Fragment>
  );
}
//post props=props.post.username
EditPost.propTypes = {
  onEditPost: PropTypes.func,
};

export default EditPost;
