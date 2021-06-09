import api from "./api";

export const login = (user) => {
  return api.post("login", user);
};

export const logout = () => {
  localStorage.removeItem("TOKEN_KEY");
  localStorage.removeItem("USER");
};
