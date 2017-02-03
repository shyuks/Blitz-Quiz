import { STUDENT_LOGIN } from '../actions/student_actions';

const INITIAL_STATE = { sId: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case STUDENT_LOGIN:
    return Object.assign({}, state, { sId: action.payload });
  default:
    return state;
  }
}