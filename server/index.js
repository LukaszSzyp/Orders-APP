const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "orderappdb",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/insert", (req, res) => {
  const name = req.body.name;

  const sqlInsert = "INSERT INTO orderappdb.assortment (name) VALUES (?);";
  db.query(sqlInsert, [name], (err, result) => {
    console.log(err);
  });
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
