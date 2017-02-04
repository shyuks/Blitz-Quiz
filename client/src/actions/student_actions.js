import axios from 'axios';

export const STUDENT_LOGIN = 'STUDENT_LOGIN';
export const NEW_STUDENT_QUESTION = 'NEW_STUDENT_QUESTION';
export const STUDENT_LOGOUT = 'STUDENT_LOGOUT';
export const STUDENT_ANSWER = 'STUDENT_ANSWER';
export const STUDENT_QUESTION = 'STUDENT_QUESTION'

export function studentLogin(sId) {  
  return {
    type: STUDENT_LOGIN,
    payload: sId
  };
}

export function studentReceivingQuestion(newQuestion){
  return {
    type: NEW_STUDENT_QUESTION,
    payload: newQuestion
  }
}

export function studentLogout(){
  return {
    type : STUDENT_LOGOUT,
    payload : null
  }
}

export function handleStudentAnswer(){
  return {
    type : STUDENT_ANSWER,
    payload : null
  }
}

export function handleSelectQuestion(question){
  return {
    type : STUDENT_QUESTION,
    payload : question
  }
}

