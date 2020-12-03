import rootReducer from "../reducers/index";
import { createStore } from "redux";
let store = createStore(rootReducer);
describe("rootReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterPostList: {},
      formVisibleOnPage: false,
    });
  });
  test("Check that initial state of rootReducer matches root reducer", () => {
    expect(store.getState().masterPostList).toEqual(
      rootReducer(undefined, { type: null })
    );
  });

  test("Check that initial state of rootReducer matches root reducer", () => {
    expect(store.getState().formVisibleOnPage).toEqual(
      rootReducer(undefined, { type: null })
    );
  });
  test("Check that ADD_TICKET action works for rootReducer and root reducer", () => {
    const action = {
      type: "ADD_UPDATE_POST",
      userName: "Ryan & Aimen",
      timeStamp: "4pm",
      content: "Redux action is not working correctly.",
      id: 1,
      upvotes: 0,
      downvotes: 0,
    };
    store.dispatch(action);
    expect(store.getState().masterPostList).toEqual(
      rootReducer(undefined, action)
    );
  });

  test("Check that TOGGLE_FORM action works for rootReducer and root reducer", () => {
    const action = {
      type: "TOGGLE_FORM",
    };
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(
      rootReducer(undefined, action)
    );
  });
});
