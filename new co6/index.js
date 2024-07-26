const express = require("express");
const app = express();
app.use(express.json());
// get all blog in homepage

const myStudent = [
  { id: 1, name: "emmanuel", age: 25 },
  { id: 2, name: "chimaobi", age: 19 },
  { id: 3, name: "samuel", age: 26 },
  { id: 4, name: "micheal", age: 24 },
  { id: 5, name: "franklin", age: 25 },
];

app.get;

app.listen(5000, () => {
  console.log("app is running");
});
