const path = require("path");
const fs = require("fs");
const express = require("express");

const cors = require("cors");
const app = express();

app.use(cors());

app.get("/api/transactions", (req, res, next) => {
  fs.readFile(
    path.join(__dirname, "mock", "transactions.json"),
    "utf8",
    (err, data) => {
      if (err) throw err;
      res.send(JSON.parse(data));
    }
  );
});

app.listen(3030, () => {
  console.log("Server is running...");
});
