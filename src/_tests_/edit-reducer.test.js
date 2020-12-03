import editReducer from "../reducers/edit-reducer";

describe("editReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(editReducer(false, { type: null })).toEqual(false);
  });
  test("Should toggle edit state to true", () => {
    expect(editReducer(false, { type: "TOGGLE_EDIT" })).toEqual(true);
  });
  // test("Edit reducer toggle between true and false", () => {
  //   action = {
  //     type: "TOGGLE_EDIT",
  //     editing: false,
  //   };
  //   expect(false).toEqual(true);
  // });
  // test("Edit reducer toggle between true and false", () => {
  //   action = {
  //     type: "TOGGLE_EDIT",
  //     editing: true,
  //   };
  //   expect(true).toEqual(false);
  // });
});
