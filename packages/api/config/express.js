const express = require("express");
const cors = require("cors");
const path = require("path");

module.exports = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());

  require("../routes/auth")(app);

  app.use(express.static(path.join(__dirname+'../../../frontend', "build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname+'../../../frontend', "build", "index.html"));
  });

  return app;
};
