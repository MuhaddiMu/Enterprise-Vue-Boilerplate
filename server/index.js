const express = require("express");
const app = express();
const path = require("path");

const mongoose = require("mongoose");
const { MONGO_DB_URI, PORT, E2E } = process.env;
mongoose.connect(
  MONGO_DB_URI ? MONGO_DB_URI : "mongodb://localhost:27017/full-stack-vue",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use("/items", require("./routes/items"));

if (process.env.NODE_ENV === "production") {
  app.use("/dist", express.static(path.join(__dirname, "dist")));
}

if (process.env.NODE_ENV !== "test" && !E2E) {
  const port = PORT ? PORT : "8070";
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

module.exports = app;
