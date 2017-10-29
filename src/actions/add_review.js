import { ADD_REVIEW } from "./types";

export default function addReview(review) {
  return {
    type: ADD_REVIEW,
    payload: review,
  }
}
