import axios from 'axios';

export const TEACHER_LOGIN = 'TEACHER_LOGIN';
export const TEACHER_DATA = 'TEACHER_DATA';

export function teacherLogin(tId) {  
  return {
    type: TEACHER_LOGIN,
    payload: tId
  };
}

export function getTeacherData(tId) {
  const request = axios.get('/test/' + tId)

  return {
    type: TEACHER_DATA,
    payload: request
  };
}