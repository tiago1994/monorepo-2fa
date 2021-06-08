module.exports = (app) => {
  const authController = require("../controllers/auth")();
  const middleware = require("../middlewares/jwt");

  app.route("/login").post(authController.login);
  app.route("/2fa").post(middleware.checkJWT, authController.twoFactor);
};
