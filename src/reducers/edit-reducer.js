export default (state = {}, action) => {
  switch (action.type) {
    case "TOGGLE_EDIT":
      return !state;
    default:
      return state;
  }
};
