import api from './api';

export const twoFactorAuth = (code) => {
  return api.post("http://localhost:8000/2fa", {code: code});
};
