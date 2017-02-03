import { STUDENT_LOGIN, STUDENT_LOGOUT, NEW_STUDENT_QUESTION, STUDENT_ANSWER} from '../actions/student_actions';

const INITIAL_STATE = { sId: null , studentQuestions : []};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case STUDENT_LOGIN:
<<<<<<< HEAD
    return { ...state, sId: action.payload };
=======
    return {...state, sId: action.payload };
  case NEW_STUDENT_QUESTION:
  return {...state, studentQuestions : [action.payload, ...studentQuestions]};
  case STUDENT_LOGOUT:
  return INITIAL_STATE;
  case STUDENT_ANSWER:
  return {...state, studentQuestions : studentQuestions.splice(0, 1)}
>>>>>>> refactored student dashboard to redux
  default:
    return state;
  }
}
