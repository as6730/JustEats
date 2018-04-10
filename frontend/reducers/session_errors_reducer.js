// keeps track of any error messages
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from "../actions/session_actions";
import { CLOSE_MODAL } from '../actions/modal_actions';

const SessionErrorReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case CLOSE_MODAL:
      return [];
    default:
      return state;
  }
};

export default SessionErrorReducer;
