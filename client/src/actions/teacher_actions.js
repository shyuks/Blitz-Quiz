import axios from 'axios';

export const TEACHER_LOGIN = 'TEACHER_LOGIN';
export const TEACHER_LOGOUT = 'TEACHER_LOGOUT';
export const TEACHER_DATA = 'TEACHER_DATA';
export const NAVIGATE_SIDE = 'NAVIGATE_SIDE';

export function teacherLogin(tId) {  
  return {
    type: TEACHER_LOGIN,
    payload: tId
  };
}

export function teacherLogout() {  
  return {
    type: TEACHER_LOGOUT,
    payload: null
  };
}

export function getTeacherData(tId) {
  const request = axios.get('/test/' + tId)

  return {
    type: TEACHER_DATA,
    payload: request
  };
}

export function navigateSidebar(location) {
  return {
    type: NAVIGATE_SIDE,
    payload: location
  };
}