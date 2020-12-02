export default (state = {}, action) => {
  const { timeStamp, content, userName, id, upvotes, downvotes } = action;
  switch (action.type) {
    case "ADD_UPDATE_POST":
      return Object.assign({}, state, {
        [id]: {
          timeStamp: timeStamp,
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
    case "UP_VOTE":
      const upvote = { ...state };
      upvote[id].upvotes++;
      return upvote;
    case "DOWN_VOTE":
      const downvote = { ...state };
      downvote[id].downvotes--;
      return downvote;
    default:
      return state;
  }
};
