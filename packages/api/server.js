require("dotenv").config();

const app = require("./config/express")();

app.listen(process.env.PORT, () =>
  console.log(`Server runing on port ${process.env.PORT}!`)
);
