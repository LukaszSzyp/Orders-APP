const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost:3306",
  user: "root",
  password: "root",
  database: "orderappdb",
});

app.listen(3001, () => {
  console.log("running on port 3001");
});

/* app.get("/", (req, res) => {
  const sqlInsert = "INSERT INTO orderappdb.assortment (name) VALUES ('test');";
  db.query(sqlInsert, (err, result) => {
    res.send("hello Lukas");
  });
}); */
