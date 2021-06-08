module.exports = () => {
  const userDB = require("../data/users.json");
  const jwtUtils = require("../utils/jwt");
  const twofactorNode = require("node-2fa");
  const controller = {};

  controller.login = (req, res) => {
    const data = req.body;
    if (userDB.email === data.email && userDB.password === data.password) {
      res.status(200).json({
        name: userDB.name,
        email: userDB.email,
        jwt: jwtUtils.generateAccessToken({
          email: userDB.email,
          twoFactor: false,
        }),
      });
    } else {
      res.status(401).json({ error: "Email or password wrong!" });
    }
  };

  controller.twoFactor = (req, res) => {
    const data = req.body;
    const checkTwoFactory = twofactorNode.verifyToken(userDB.secret, data.code);
    if (checkTwoFactory && checkTwoFactory.delta == 0) {
      res.status(200).json({
        name: userDB.name,
        email: userDB.email,
        jwt: jwtUtils.generateAccessToken({
          email: userDB.email,
          twoFactor: true,
        }),
      });
    } else {
      res.status(401).json({ error: "2fa fail." });
    }
  };

  return controller;
};
