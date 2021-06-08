import api from './api';

export const twoFactorAuth = (code) => {
  return api.post("2fa", {code: code});
};
