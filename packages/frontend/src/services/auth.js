export const isAuthenticated = () => localStorage.getItem('TOKEN_KEY') !== null;
export const getToken = () => localStorage.getItem('TOKEN_KEY');
export const getUser = () => JSON.parse(localStorage.getItem('USER'));
export const logout = () => {
    localStorage.removeItem('TOKEN_KEY');
    localStorage.removeItem('USER');
};