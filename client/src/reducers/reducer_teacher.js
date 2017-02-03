import {
  TEACHER_LOGIN,
  TEACHER_LOGOUT,
  TEACHER_DATA,
  NAVIGATE_SIDE
} from '../actions/teacher_actions';

const INITIAL_STATE = {
  tId: null,
  tData: {},
  destination: ''
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  
  case TEACHER_LOGIN:
    return { ...state, tId: action.payload };
  
  case TEACHER_LOGOUT:
    return { ...state, tId: action.payload };
  
  case TEACHER_DATA:
    return { ...state, tData: action.payload.data };
  
  case NAVIGATE_SIDE:
    return { ...state, destination: action.payload.data };
  
  default:
    return state;
  }
}