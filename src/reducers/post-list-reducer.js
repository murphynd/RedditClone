export default (state = {}, action) => {
  const { timestamp, content, userName, id, upvotes, downvotes } = action;
  switch (action.type) {
    case "ADD_UPDATE_POST":
      console.log("ADD POST REACHED");
      return Object.assign({}, state, {
        [id]: {
          timestamp: timestamp,
          content: content,
          userName: userName,
          id: id,
          upvotes: upvotes,
          downvotes: downvotes,
        },
      });
    case "DELETE_POST":
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};
