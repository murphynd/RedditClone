import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewPost(props) {
  return (
    <React.Fragment>
      <h1> New Post For</h1>
  return (
    <React.Fragment>
      <h1> New Post For</h1>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="content_body" placeholder="Content Body" />
        <input type="text" name="username" placeholder="UserName" />
        <button type="submit">Submit Post</button>
 
  NewPost.propTypes = {
    onNewPostCreation: PropTypes.func
  };
  


export default NewPost;
  }
