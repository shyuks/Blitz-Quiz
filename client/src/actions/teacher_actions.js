import axios from 'axios';

export const TEACHER_LOGIN = 'TEACHER_LOGIN';

export function teacherLogin(tId) {  
  return {
    type: TEACHER_LOGIN,
    payload: tId
  };
}