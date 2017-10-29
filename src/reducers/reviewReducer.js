import testData from "../assets/testdata";
import { ADD_REVIEW } from '../actions/types';

function reviewReducer(state = testData, action) {
  switch (action.type) {
    case ADD_REVIEW:
      return { ...state, newItem: action.payload }
  default:
    return state;
  }
}
export default reviewReducer;
