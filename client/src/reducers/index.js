import { combineReducers } from 'redux';
import TeacherReducer from './reducer_teacher';
import StudentReducer from './reducer_student';
import AdminReducer from './reducer_admin';

const rootReducer = combineReducers({
  teacherState: TeacherReducer,
  studentState: StudentReducer,
  adminState: AdminReducer
});

export default rootReducer;