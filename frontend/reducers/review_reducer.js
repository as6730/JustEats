import {
  RECEIVE_ALL_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
} from '../actions/review_actions';
import merge from 'lodash/merge';

const ReviewReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return [action.review];
    case REMOVE_REVIEW:
      let newState = merge({}, oldState);
      delete newState[action.reviewId];
      return newState;
    default:
      return oldState;
  }
};

export default ReviewReducer;
