import { TEACHER_LOGIN, TEACHER_DATA } from '../actions/teacher_actions';

const INITIAL_STATE = { tId: null, tData: {} };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case TEACHER_LOGIN:
    return { ...state, tId: action.payload };
  case TEACHER_DATA:
    return { ...state, tData: action.payload.data };
  default:
    return state;
  }
}