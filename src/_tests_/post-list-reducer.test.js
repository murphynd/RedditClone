import postListReducer from "../reducers/post-list-reducer";

describe("postListReducer", () => {
  let action;

  const postData = {
    timestamp: "10:30",
    content: "Hello World",
    username: "kalecat",
    id: 1,
    upvotes: 5,
    downvotes: 2,
  };

  const currentState = {
    1: {
      timestamp: "10:30",
      content: "Hello World",
      username: "kalecat",
      id: 1,
      upvotes: 5,
      downvotes: 2,
    },
    2: {
      timestamp: "9:30",
      content: "wat",
      username: "lildog",
      id: 2,
      upvotes: 8,
      downvotes: 1,
    },
  };

  test("Should successfully add new post data to masterPostList", () => {
    const { username, content, timestamp, id, upvotes, downvotes } = postData;
    action = {
      type: "ADD_UPDATE_POST",
      timestamp: timestamp,
      content: content,
      username: username,
      id: id,
      upvotes: upvotes,
      downvotes: downvotes,
    };
    expect(postListReducer({}, action)).toEqual({
      [id]: {
        timestamp: timestamp,
        content: content,
        username: username,
        id: id,
        upvotes: upvotes,
        downvotes: downvotes,
      },
    });
  });

  test("Should successfully delete post data to masterPostList", () => {
    action = {
      type: "DELETE_POST",
      id: 1,
    };
    expect(postListReducer(currentState, action)).toEqual({
      2: {
        timestamp: "9:30",
        content: "wat",
        username: "lildog",
        id: 2,
        upvotes: 8,
        downvotes: 1,
      },
    });
  });
});
