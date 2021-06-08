import axios from 'axios';

export const twoFactorAuth = (code) => {
  return axios.post("http://localhost:8000/2fa", {code: code});
};
