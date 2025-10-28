const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/cart", (req, res) => {
  console.log("장바구니 요청 받음");
  res.send([
    { id: 1, name: "치킨", price: 10000 },
    { id: 2, name: "피자", price: 20000 },
    { id: 3, name: "햄버거", price: 30000 },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
