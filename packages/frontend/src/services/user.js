import api from './api';

export const login = (user) => {
  return api.post("login", user);
};
