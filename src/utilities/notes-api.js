import sendRequest from "./send-request";

const BASE_URL = '/api/notes';

export async function create(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}
export async function find() {
  return sendRequest(`${BASE_URL}/find`);
}