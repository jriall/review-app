import testData from "../assets/testdata";
import { ADD_REVIEW } from "../actions/types";

function reviewReducer(state = testData, action) {
  switch (action.type) {
    case ADD_REVIEW:
      const newState = {...state};
      newState[action.payload.category][action.payload.id] = action.payload;
      return newState;
    default:
      return state;
  }
}
export default reviewReducer;
