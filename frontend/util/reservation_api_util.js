export const fetchReservations = () => (
  $.ajax({
    method: 'GET',
    url: `api/reservations`
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
    method: 'PATCH',
    url: `/api/restaurants/${restaurantId}/reservations/${reservation.id}`,
    data: JSON.stringify(reservation),
    contentType: "application/json; charset=utf-8",
    dataType: "json"
  })
);

export const deleteReservation = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/restaurants/${restaurantId}/reservations/${id}`,
  })
);
