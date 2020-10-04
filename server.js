const path = require("path");
const fs = require("fs");
const express = require("express");

const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3030;
app.use(cors());

app.use(express.static("./dist/peachtree"));
app.get("/", function (req, res) {
  res.sendFile("index.html", { root: "dist/peachtree" });
});

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

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
