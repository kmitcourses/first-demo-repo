// console.log("Hello Codespace");
// const mysec= process.env.MYSEC;
// console.log(mysec);
const express = require("express");
const app = express();
const PORT = 3000;
console.log("Code from Dev1-new code");
console.log("Code changed by dev2");

app.get("/", (req, res) => {
  res.send("Hello from GitHub Codespaces");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
