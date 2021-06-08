import api from './api';

export const login = (user) => {
  return api.post("http://localhost:8000/login", user);
};
