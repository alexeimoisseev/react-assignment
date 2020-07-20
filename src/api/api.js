import { getToken } from '../authorization/authorization';

const queryString = require('query-string');
const API_URL = 'https://api.supermetrics.com/assignment';
const CLIENT_ID = 'ju16a6m81mhid5ue1z3v2g0uh';

function apiCall(path, options) {
  return fetch(`${API_URL}/${path}`, {
    headers: {
      'content-type': 'application/json',
    },
    ...options
  }).then(res => res.json());
}

function apiPost(path, _body) {
  const body = JSON.stringify({
    client_id: CLIENT_ID,
    ..._body
  });
  return apiCall(path, {
    method: 'POST',
    body,
  });
}

function apiGet(path, params) {
  let url = path;
  if (params) {
    url += `?${queryString.stringify(params)}`;
  }
  return apiCall(url);
}

export async function register(name, email) {
  return apiPost('register', { name, email });
}

export async function getPosts() {
  const token = getToken();
  return apiGet('posts', { sl_token: token });
}
