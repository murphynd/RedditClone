import React from "react";
import PostList from "./PostList";
import EditPost from "./EditPost";
import NewPost from "./NewPost";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class PostControl extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
    
  //     selectedPost: null,
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  handleClick = () => {
    const {dispatch}=this.props;
    if (this.props.selectedPost != null) {
      const action = {
        type :"NO_POST"
      };
      dispatch(action);
      const action2 = {
        type:"TOGGLE_EDIT"
      };
      dispatch(action2);
      // this.setState({
      //   //formVisible: false,
      //   selectedPost: null
      //   // editing: false,
      // });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
    };
    dispatch(action);
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
    // this.setState({});
  };
  handleUpVotingPost = (id) => {
    console.log("UpVote Post Function Executing");
    const { dispatch } = this.props;
    const action = {
      type: "UP_VOTE",
      id: id,
    };
    dispatch(action);
    // this.setState({});
  };
  handleEditingPostInList = (postToEdit) => {
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
    const action2 ={
    type:"TOGGLE_EDIT"
    }
    dispatch(action2);
    const action3 ={
      type:"NO_POST"
    }
    dispatch(action3);
    // this.setState({
    //   //editing: false,
    //   selectedPost: null,
    // });
  };
  handleEditClick = (id) => {
    const { dispatch } = this.props;
    const selectedPost = this.props.masterPostList[id];
    const action = {
      type:'TOGGLE_EDIT'
    }
    dispatch(action);
    const action2 = {
      type:"SELECTED_POST"
    }
    dispatch(action.selectedPost);
    
    // this.setState({
    //   selectedPost: selectedPost,
    // });
    
  };

  handleDeletingPost = (id) => {
    console.log("Deleting Post Function Executing");
    const { dispatch } = this.props;
    const action = {
      type: "DELETE_POST",
      id: id,
    };
    dispatch(action);
    const action2 = {
      type:"NO_POST"
    }
    dispatch(action2);
  //   this.setState({ selectedPost: null });
  // };
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
    console.log(this.props);
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  };

  whenUpvoteClicked = (post) => {
    const { dispatch } = this.props;
    const { id } = post;
    const action = {
      type: "UPDATE_UPVOTE",
      id: id,
    };
    dispatch(action);
    // this.setState({});
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
    // this.setState({});
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.editing) {
      currentlyVisibleState = (
        <EditPost
          post={this.props.selectedPost}
          onEditPost={this.handleEditingPostInList}
        />
      );
      buttonText = "Return to Post List";
    } else if (this.props.formVisible) {
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
  formVisible: PropTypes.bool,
  selectedPost: PropTypes.object,
  editing: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    masterPostList: state.masterPostList,
    formVisible:state.formVisibleOnPage,
    selectedPost: state.selectedPost,
    editing:state.editAvailable
  };
};

PostControl = connect(mapStateToProps)(PostControl);
export default PostControl;
