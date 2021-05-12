require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 5050;
const app = express();

app.use(express.json());
app.use(require("cors")());
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

app.listen(port, async () => {
  console.log(`Am listening on http://localhost:${port}`);
});

module.exports = app;
