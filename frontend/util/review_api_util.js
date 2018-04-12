export const fetchReviews = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/reviews`
  })
);

export const fetchReview = (userId, reviewId) => (
  $.ajax({
    method: 'GET',
    url: `api/${userId}/${reviewId}`
  })
);

export const createReview = (restaurantId, review) => (
  $.ajax({
    method: "POST",
    url: `/api/restaurants/${restaurantId}/reviews`,
    data: JSON.stringify(review),
    contentType: "application/json; charset=utf-8",
    dataType: "json"
  })
);

export const updateReview = (restaurantId, review) => (
  $.ajax({
    url: `/api/restaurants/${restaurantId}/reviews/${review.id}`,
    method: 'PATCH',
    data: JSON.stringify(review),
    contentType: "application/json; charset=utf-8",
    dataType: "json"
  })
);

export const deleteReview = id => (
  $.ajax({
    url: `api/restaurants/${restaurantId}/reviews/${id}`,
    method: 'DELETE'
  })
);
