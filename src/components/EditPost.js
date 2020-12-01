import PropTypes from "prop-types";
import React from "react";
import ReusableForm from "./ReusableForm";

function EditPost(props) {
  function handleEditPostFormSubmission(event) {
    event.preventDefault();
    props.onEditPost({
      userName: event.target.userName.value,
      content: event.target.content.value,
    });
  }
  return (
    <React.Fragment>
      <h1>Edit Post</h1>
      <ReusableForm
        formSubmissionHandler={handleEditPostFormSubmission}
        buttonText="Edit Post"
      />
    </React.Fragment>
  );
}

EditPost.propTypes = {
  onEditCreation: PropTypes.func,
};

export default EditPost;
