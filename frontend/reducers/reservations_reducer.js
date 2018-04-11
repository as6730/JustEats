import {
  RECEIVE_ALL_RESERVATIONS,
  RECEIVE_RESERVATION,
  REMOVE_RESERVATION,
} from '../actions/reservation_actions';
import merge from 'lodash/merge';

const ReservationsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_RESERVATIONS:
      return action.reservations;
    case RECEIVE_RESERVATION:
      return [action.reservation];
    case REMOVE_RESERVATION:
      let newState = merge({}, oldState);
      delete newState[action.reservationId];
      return newState;
    default:
      return oldState;
  }
};

export default ReservationsReducer;
