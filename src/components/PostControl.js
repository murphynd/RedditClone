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
  handleDownVotingPost = (id) => {
    console.log("DownVote Post Function Executing");
    const { dispatch } = this.props;
    const action = {
      type: "DOWN_VOTE",
      id: id,
    };
    dispatch(action);
    this.setState({});
  };
  handleUpVotingPost = (id) => {
    console.log("UpVote Post Function Executing");
    const { dispatch } = this.props;
    const action = {
      type: "UP_VOTE",
      id: id,
    };
    dispatch(action);
    this.setState({});
  };
  handleEditingPostInList = (postToEdit) => {
    console.log("Edit this post!");
    console.log(this.props.userName);
    console.log(this.props.upvotes);
    const { dispatch } = this.props;
    const { userName, content, timestamp, upvotes, downvotes, id } = postToEdit;
    const action = {
      type: "ADD_UPDATE_POST",
      userName: userName,
      content: content,
      timeStamp: timestamp,
      id: id,
      upvotes: upvotes || Number("0"),
      downvotes: downvotes || Number("0"),
    };
    dispatch(action);
    this.setState({
      editing: false,
      selectedPost: null,
    });
  };
  handleEditClick = (id) => {
    // console.log(this.props.post.userName);
    // console.log(this.props.post.upvotes);
    // console.log("Handle Edit CLick");
    // console.log(this.props.post.id);
    const selectedPost = this.props.masterPostList[id];
    this.setState({
      editing: true,
      selectedPost: selectedPost,
    });
  };

  handleDeletingPost = (id) => {
    console.log("Deleting Post Function Executing");
    const { dispatch } = this.props;
    const action = {
      type: "DELETE_POST",
      id: id,
    };
    dispatch(action);
    this.setState({ selectedPost: null });
  };
  // * 66-68 NOT NEEDED
  // handleDeleteClick = () => {
  //   this.setState({ selectedPost: null
  // });

  handleAddingNewPostToList = (newPost) => {
    const { dispatch } = this.props;
    const { userName, content, timeStamp, id, upvotes, downvotes } = newPost;
    const action = {
      type: "ADD_UPDATE_POST",
      userName: userName,
      content: content,
      timeStamp: timeStamp,
      id: id,
      upvotes: upvotes || Number("0"),
      downvotes: downvotes || Number("0"),
    };
    console.log(this.state);
    dispatch(action);
    this.setState({ formVisible: false });
  };

  whenUpvoteClicked = (post) => {
    const { dispatch } = this.props;
    const { id } = post;
    const action = {
      type: "UPDATE_UPVOTE",
      id: id,
    };
    dispatch(action);
    this.setState({});
  };

  whenDownvoteClicked = (post) => {
    console.table(post);
    const { dispatch } = this.props;
    const { id } = post;
    const action = {
      type: "UPDATE_DOWNVOTE",
      id: id,
    };
    dispatch(action);
    this.setState({});
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
          onClickingDownVote={this.handleDownVotingPost}
          onClickingUpVote={this.handleUpVotingPost}
          onClickingDelete={this.handleDeletingPost}
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
