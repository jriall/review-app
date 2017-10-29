import testData from "../assets/testdata";
import { ADD_REVIEW } from "../actions/types";
import { DELETE_REVIEW } from "../actions/types";

function reviewReducer(state = testData, action) {
  switch (action.type) {
    case ADD_REVIEW:
      const newStateAddition = { ...state };
      newStateAddition[action.payload.category][action.payload.id] = action.payload;
      return newStateAddition;
    case DELETE_REVIEW:
      const newStateDeletion = { ...state};
      Object.keys(newStateDeletion[action.payload.category]).filter(key => key === action.payload.id).forEach(key => delete newStateDeletion[action.payload.category][key]);
      return newStateDeletion;
    default:
      return state;
  }
}
export default reviewReducer;
