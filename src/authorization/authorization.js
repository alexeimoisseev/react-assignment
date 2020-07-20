import { register as apiRegister } from '../api/api.js';

const EXPIRATION_TIME = 60 * 60 * 1000; // 1 hour

function parseToken() {
  const tokenString = localStorage.getItem('token');
  if (!tokenString) {
    return null;
  }
  return JSON.parse(tokenString);
}

function authorize(response) {
  const { data: { sl_token } } = response;
  const token = {
    value: sl_token,
    expires: new Date(Date.now() + EXPIRATION_TIME),
  };
  localStorage.setItem('token', JSON.stringify(token));
}

export async function register(name, email) {
  const response = await apiRegister(name, email);
  authorize(response);
}

export function getToken() {
  const token = parseToken();
  if (!token) {
    return null;
  }

  const expires = new Date(token.expires);
  if (expires < new Date()) {
    localStorage.removeItem('token');
    return null;
  }
  return token.value;
}
