import axios from 'axios';

export const STUDENT_LOGIN = 'STUDENT_LOGIN';

export function teacherLogin(sId) {  
  return {
    type: STUDENT_LOGIN,
    payload: sId
  };
}