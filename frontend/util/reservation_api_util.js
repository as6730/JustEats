export const fetchReservations = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/reservations`
  })
);

export const fetchReservation = (userId, reservationId) => (
  $.ajax({
    method: 'GET',
    url: `api/${userId}/${reservationId}`
  })
);

export const createReservation = (restaurantId, reservation) => (
  $.ajax({
    method: "POST",
    url: `/api/restaurants/${restaurantId}/reservations`,
    data: JSON.stringify(reservation),
    contentType: "application/json; charset=utf-8",
    dataType: "json"
  })
);

export const updateReservation = (restaurantId, reservation) => (
  $.ajax({
    url: `/api/restaurants/${restaurantId}/reservations/${reservation.id}`,
    method: 'PATCH',
    data: JSON.stringify(reservation),
    contentType: "application/json; charset=utf-8",
    dataType: "json"
  })
);

export const deleteReservation = id => (
  $.ajax({
    url: `api/restaurants/${restaurantId}/reservations/${id}`,
    method: 'DELETE'
  })
);
