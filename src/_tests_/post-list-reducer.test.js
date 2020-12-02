import postListReducer from "../reducers/post-list-reducer";

describe("postListReducer", () => {
  let action;

  const postData = {
    timeStamp: "10:30",
    content: "Hello World",
    userName: "kalecat",
    id: 1,
    upvotes: 5,
    downvotes: 2,
  };

  const currentState = {
    1: {
      timeStamp: "10:30",
      content: "Hello World",
      userName: "kalecat",
      id: 1,
      upvotes: 5,
      downvotes: 2,
    },
    2: {
      timeStamp: "9:30",
      content: "wat",
      userName: "lildog",
      id: 2,
      upvotes: 8,
      downvotes: 1,
    },
  };

  test("Should successfully add new post data to masterPostList", () => {
    const { userName, content, timeStamp, id, upvotes, downvotes } = postData;
    action = {
      type: "ADD_UPDATE_POST",
      timeStamp: timeStamp,
      content: content,
      userName: userName,
      id: id,
      upvotes: upvotes,
      downvotes: downvotes,
    };
    expect(postListReducer({}, action)).toEqual({
      [id]: {
        timeStamp: timeStamp,
        content: content,
        userName: userName,
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
        timeStamp: "9:30",
        content: "wat",
        userName: "lildog",
        id: 2,
        upvotes: 8,
        downvotes: 1,
      },
    });
  });
  test("Should successfully increment upvotes post data to masterPostList", () => {
    action = {
      type: "UP_VOTE",
      id: 2,
    };
    expect(postListReducer(currentState, action)).toEqual({
      1: {
        timeStamp: "10:30",
        content: "Hello World",
        userName: "kalecat",
        id: 1,
        upvotes: 5,
        downvotes: 2,
      },
      2: {
        timeStamp: "9:30",
        content: "wat",
        userName: "lildog",
        id: 2,
        upvotes: 9,
        downvotes: 1,
      },
    });
  });
  test("Should successfully increment upvotes post data to masterPostList", () => {
    action = {
      type: "DOWN_VOTE",
      id: 2,
    };
    expect(postListReducer(currentState, action)).toEqual({
      1: {
        timeStamp: "10:30",
        content: "Hello World",
        userName: "kalecat",
        id: 1,
        upvotes: 5,
        downvotes: 2,
      },
      2: {
        timeStamp: "9:30",
        content: "wat",
        userName: "lildog",
        id: 2,
        upvotes: 9,
        downvotes: 0,
      },
    });
  });
});
