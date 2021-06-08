require("dotenv").config();

const app = require('./config/express')();

// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
app.listen(process.env.PORT, () =>
  console.log(`Server runing on port ${process.env.PORT}!`)
);