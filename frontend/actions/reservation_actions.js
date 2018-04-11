import * as ReservationApiUtil from '../util/reservation_api_util';

export const RECEIVE_ALL_RESERVATIONS = "RECEIVE_ALL_RESERVATIONS";
export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";

export const fetchReservations = () => dispatch => (
  ReservationApiUtil.fetchReservations().then(reservations => dispatch(receiveAllReservations(reservations)))
);

export const fetchReservation = (userId, id) => dispatch => (
  ReservationApiUtil.fetchReservation(userId, id).then(reservation => dispatch(receiveReservation(reservation)))
);

export const createReservation = (restaurantId, reservation) => dispatch => (
  ReservationApiUtil.createReservation(restaurantId, reservation).then(reservation => dispatch(receiveReservation(reservation)))
);

export const updateReservation = (restaurantId, reservation) => dispatch => (
  ReservationApiUtil.updateReservation(restaurantId, reservation).then(reservation => dispatch(receiveReservation(reservation)))
);

export const deleteReservation = reservationId => dispatch => (
  ReservationApiUtil.deleteReservation(reservationId).then(reservation => dispatch(removeReservation(reservationId)))
);

const receiveAllReservations = reservations => ({
  type: RECEIVE_ALL_RESERVATIONS,
  reservations
});

const receiveReservation = reservation => ({
  type: RECEIVE_RESERVATION,
  reservation
});

const removeReservation = reservationId => ({
  type: REMOVE_RESERVATION,
  reservationId
});
