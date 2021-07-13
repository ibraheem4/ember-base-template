import { resolve, reject } from 'rsvp';

export default function checkStatus(response) {
  return response.status >= 200 && response.status < 300
    ? resolve(response)
    : reject(response);
}
