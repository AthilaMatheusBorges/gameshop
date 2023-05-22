const express = require("express");
const mysql = require("mysql2")
const app = express();
const cors = require("cors");

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "borges2016",
  database: "gameshop",
})

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const {name} = req.body;
  const {cost} = req.body;
  const {category} = req.body;

  let SQL = "INSERT INTO games (name, cost, category) VALUES (?,?,?)";

  db.query(SQL, [name, cost, category], (err, result) => {
    console.log(err)
  })
})

app.get("/getCards", (req, res) => {
  let SQL = "SELECT * from games"

  db.query(SQL, (err, result) => {
    if(err) console.log(err)
    else res.send(result)
  })
})


app.listen(3001, () => {
  console.log("server ativo")
});