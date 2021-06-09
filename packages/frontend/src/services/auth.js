import jwt_decode from "jwt-decode";

export const isAuthenticated = () => localStorage.getItem("TOKEN_KEY") !== null;
export const isAuthenticatedTwoFactor = () => {
  const decoded = jwt_decode(getToken());
  return decoded.twoFactor;
};
export const getToken = () => localStorage.getItem("TOKEN_KEY");
export const getUser = () => JSON.parse(localStorage.getItem("USER"));
