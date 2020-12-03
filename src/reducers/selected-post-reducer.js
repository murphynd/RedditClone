export default (state = null, action) => {
    switch (action.type) {
      case "SELECTED_POST":
          const newState = action.selectedPost;
        return newState;
        case "NO_POST":
          const noPost = null;
        return noPost;
      default:
        return state;
    }
  };

