import axios from 'axios';

export const ADMIN_LOGIN = 'ADMIN_LOGIN';
export const ADMIN_LOGOUT = 'ADMIN_LOGOUT';

export function adminLogin(adminEmail) {  
  return {
    type: ADMIN_LOGIN,
    payload: adminEmail
  };
}

export function adminLogout() {  
  return {
    type: ADMIN_LOGOUT,
    payload: null
  };
}