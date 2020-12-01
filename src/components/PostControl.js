import React from "react";
import PostList from "./PostList";
import EditPost from "./EditPost";
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
    if (this.props.selectedPost != null) {
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

  handleEditingPostInList = (postToEdit) => {
    const { dispatch } = this.props;
    const { userName, content, timestamp, id, upvotes, downvotes } = postToEdit;
    const action = {
      type: "ADD_UPDATE_POST",
      userName: userName,
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
  handleEditClick = () => {
    this.setState({ editing: true });
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
    const { userName, content, timeStamp, id, upvotes, downvotes } = newPost;
    const action = {
      type: "ADD_UPDATE_POST",
      userName: userName,
      content: content,
      timeStamp: timeStamp,
      id: id,
      upvotes: upvotes,
      downvotes: downvotes,
    };
    dispatch(action);
    this.setState({ formVisible: false });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditPost
          post={this.state.selectedPost}
          onEditPost={this.handleEditingPostInList}
        />
      );
      buttonText = "Return to Post List";
    } else if (this.state.formVisible) {
      currentlyVisibleState = (
        <NewPost onNewPostCreation={this.handleAddingNewPostToList} />
      );
      buttonText = "Return to Post List";
    } else {
      currentlyVisibleState = (
        <PostList
          onClickingEdit={this.handleEditClick}
          postList={this.props.masterPostList}
        />
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
