const express = require("express");
const morgan = require("morgan");
const app = express(); // Ejecuto Express, este devuelve un objeto, y ese objeto es el servidor.
const db = require("./db");
const { Properties, Users} = require("./models/index.js");

const routes = require("./routes/index");
const cors = require("cors");


//Midlewares, siempre antes de todas las rutas, excepto el midleware Static q se coloca al final
app.use(express.json()); // Este traduce los objetos Json para q Express los pueda leer.
app.use(morgan("tiny")); // Sirve para ver o loggear los datos de peticiones al servidor.
app.use(
  cors({
    origin: "http://localhost:4000",
  })
);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Some custom error!!");
});

// app.use(express.static("public"));

db.sync({ force: false }).then(() => {
  app.listen(8000, () => {
    console.log("Server listen on port 8000");
  });
});
