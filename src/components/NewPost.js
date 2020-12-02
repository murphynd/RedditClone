import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewPost(props) {
  return (
    <React.Fragment>
      <h1> New Post Form</h1>
      <ReusableForm
        formSubmissionHandler={handleNewPostFormSubmission}
        buttonText="Add Post"
      />
    </React.Fragment>
  );
  function handleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      userName: event.target.userName.value,
      content: event.target.content.value,
      // upvotes: event.target.upvotes.value,
      // downvotes: event.target.downvotes.value,
      id: v4(),
    });
  }
}

NewPost.propTypes = {
  onNewPostCreation: PropTypes.func,
};

export default NewPost;
