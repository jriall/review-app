import { ADD_REVIEW, DELETE_REVIEW, EDIT_REVIEW } from "./types";

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

export function editReview(review) {
  return {
    type: EDIT_REVIEW,
    payload: review
  }
}