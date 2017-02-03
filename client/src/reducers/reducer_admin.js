import { ADMIN_LOGIN, ADMIN_LOGOUT } from '../actions/admin_actions';

const INITIAL_STATE = null

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case ADMIN_LOGIN:
    return action.payload;
  case ADMIN_LOGOUT:
    return action.payload;
  default:
    return state;
  }
}