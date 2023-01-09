const express = require("express");
var morgan = require("morgan");
const app = express();

app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] - :response-time ms'
  )
);

app.get("/", (req, res) => {
  res.send("Welcome to the logger middleware!");
});

app.listen(3001, () => {
  console.log("running on 3001");
});
