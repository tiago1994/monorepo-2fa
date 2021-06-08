require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.generateAccessToken = function (user) {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: 300 });
};
