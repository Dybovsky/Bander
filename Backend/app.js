require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 5050;

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const app = express();

app.use(express.json());
app.use(require("cors")());
app.use("/", indexRouter);
app.use("/users", usersRouter);

app.listen(port, async () => {
  console.log(`Am listening on http://localhost:${port}`);
});

module.exports = app;
