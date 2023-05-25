const express = require("express");
const mysql = require("mysql2")
const app = express();
const cors = require("cors");

const db = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
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

app.put("/edit", (req, res) => {
  const {id} = req.body;
  const {name} = req.body;
  const {cost} = req.body;
  const {category} = req.body;

  let SQL = "UPDATE games SET name=?, cost=?, category=? WHERE idgames=?";

  db.query(SQL, [name, cost, category, id], (err, result) => {
    if(err) console.log(err)
    else res.send(result)
  })
})

app.delete("/delete/:id", (req, res) => {
  const {id} = req.params;

  let SQL = "DELETE FROM games WHERE idgames = ?"

  db.query(SQL, [id],(err, result) => {
    if(err) console.log(err)
    else res.send(result)
  })
})

app.listen(3001, () => {
  console.log("server ativo")
});