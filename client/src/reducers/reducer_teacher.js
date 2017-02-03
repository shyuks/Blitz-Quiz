import { TEACHER_LOGIN } from '../actions/teacher_actions';

const INITIAL_STATE = { tId: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case TEACHER_LOGIN:
    return Object.assign({}, state, { tId: action.payload });
  default:
    return state;
  }
}