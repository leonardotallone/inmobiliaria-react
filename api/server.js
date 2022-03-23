const express = require("express");
const morgan = require("morgan");
const db = require("./db");
const app = express(); // Ejecuto Express, este devuelve un objeto, y ese objeto es el servidor.

//Midlewares, siempre antes de todas las rutas, excepto el midleware Static q se coloca al final
app.use(express.json()); // Este traduce los objetos Json para q Express los pueda leer.
app.use(morgan("tiny")); // Sirve para ver o loggear los datos de peticiones al servidor.

// app.use(express.static("public"));


db.sync({ force: false }).then(() => {
    app.listen(8000, () => {
      console.log("Server listen on port 8000");
    });
  });