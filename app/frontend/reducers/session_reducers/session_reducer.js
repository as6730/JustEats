import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from "../../actions/session_actions";
import merge from "lodash/merge";

const _nullUser = Object.freeze({ currentUser: null });

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, { action.currentUser });
    default:
      return state;
  }
};

export default SessionReducer;
