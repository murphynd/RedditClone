import React from "react";
import PostList from "./PostList";
import NewPost from "./NewPost";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class PostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false,
      selectedPost: null,
      editing: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.selectedPost != null) {
      this.setState({
        formVisible: false,
        selectedPost: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisible: !prevState.formVisible,
      }));
    }
  };

  handleNewPostClick = () => {
    this.setState((prevState) => ({
      postFormVisible: !prevState.postFormVisible,
    }));
  };
  handleEditingPostInList = (postToEdit) => {
    const { dispatch } = this.props;
    const { username, content, timestamp, id, upvotes, downvotes } = postToEdit;
    const action = {
      type: "ADD_UPDATE_POST",
      username: username,
      content: content,
      timestamp: timestamp,
      id: id,
      upvotes: upvotes,
      downvotes: downvotes,
    };
    dispatch(action);
    this.setState({
      editing: false,
      selectedPost: null,
    });
  };

  handleDeletingPost = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "DELETE_POST",
      id: id,
    };
    dispatch(action);
    this.setState({ selectedPost: null });
  };

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const { username, content, timestamp, id, upvotes, downvotes } = newPost;
    const action = {
      type: "ADD_UPDATE_POST",
      username: username,
      content: content,
      timestamp: timestamp,
      id: id,
      upvotes: upvotes,
      downvotes: downvotes,
    };
    dispatch(action);
    this.setState({ formVisibleOnPage: false });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisible) {
      <NewPost onNewPostCreation={this.handleAddingNewPostToList} />;
      buttonText = "Return to post List";
    } else {
      currentlyVisibleState = currentlyVisibleState = (
        <PostList postList={this.props.masterPostList} />
      );
      buttonText = "Add post";
    }
    return (
      <React.Fragment>
        <div>
          {currentlyVisibleState}
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={this.handleClick}
          >
            {buttonText}
          </button>
          {/* <button onClick={this.handleClick}>{buttonText}</button> */}
        </div>
      </React.Fragment>
    );
  }
}

PostControl.propTypes = {
  masterPostList: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    masterPostList: state,
  };
};

PostControl = connect(mapStateToProps)(PostControl);
export default PostControl;
