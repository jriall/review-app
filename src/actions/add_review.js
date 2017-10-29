import { ADD_REVIEW } from "./types";
import { DELETE_REVIEW } from "./types";

export function addReview(review) {
  return {
    type: ADD_REVIEW,
    payload: review
  };
}

export function deleteReview(review) {
  return {
    type: DELETE_REVIEW,
    payload: review
  };
}
