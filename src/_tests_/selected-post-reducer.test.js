import selectedPostReducer from "../reducers/selected-post-reducer";

describe("selectedPostReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(selectedPostReducer({ type: null })).toEqual(false);
  });
  test("Should toggle form visibility state to true", () => {
    expect(selectedPostReducer({ type: "SELECTED_POST" })).toEqual(true);
  });
});