require("dotenv").config();

const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const jsonfile = require("./database/users.json");
const twofactor = require("node-2fa");
app.use(express.json());
app.use(cors());

app.post("/login", (req, res) => {
  const data = req.body;
  if (jsonfile.email === data.email && jsonfile.password === data.password) {
    res.status(200).json({
      name: jsonfile.name,
      email: jsonfile.email,
      jwt: generateAccessToken({
        email: jsonfile.email,
        twoFactor: false
      }),
    });
  } else {
    res.send("Oops, usuário não encountrado!");
  }
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "15s" });
}

app.post("/2fa", (req, res) => {
  const data = req.body;
  const checkTwoFactory = twofactor.verifyToken(jsonfile.secret, data.code);
  if (checkTwoFactory && checkTwoFactory.delta == 0) {
    res.status(200).json({
      name: jsonfile.name,
      email: jsonfile.email,
      jwt: generateAccessToken({
        email: jsonfile.email,
        twoFactor: true
      }),
    });
  } else {
    res.status(200).json({ error: "2fa fail." });
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Server runing on port ${process.env.PORT}!`)
);
