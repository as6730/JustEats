import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

export const fetchReviews = () => dispatch => (
  ReviewApiUtil.fetchReviews().then(reviews => dispatch(receiveAllReviews(reviews)))
);

export const fetchReview = (userId, id) => dispatch => (
  ReviewApiUtil.fetchReview(userId, id).then(review => dispatch(receiveReview(review)))
);

export const createReview = (restaurantId, review) => dispatch => (
  ReviewApiUtil.createReview(restaurantId, review).then(review => dispatch(receiveReview(review)))
);

export const updateReview = (restaurantId, review) => dispatch => (
  ReviewApiUtil.updateReview(restaurantId, review).then(review => dispatch(receiveReview(review)))
);

export const deleteReview = reviewId => dispatch => (
  ReviewApiUtil.deleteReview(reviewId).then(review => dispatch(removeReview(reviewId)))
);

const receiveAllReviews = reviews => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
});

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
});
