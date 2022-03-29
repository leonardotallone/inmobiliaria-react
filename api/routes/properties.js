const express = require("express");
const routerProperties = express.Router(); //"routerProperties" puede tener cualquier nombre, o simplemente router al igual q en los otros archivos.

// Es necesario importar TODAS las tablas aun q sea de propiedades???
const { Op } = require("sequelize"); // que es Op ???
const { Users, Properties } = require("../models/index"); 
const { db } = require ("../db")


routerProperties.get("/", (req, res) => {
  Properties.findAll().then((properties) => {
    res.status(201).send(properties);
  });
});

routerProperties.get("/select/:id", (req, res) => {
  const { id } = req.params; 
  Properties.findOne({ where: { id } })
    .then((properties) => {
      res.status(201).send(properties);
    })
    .catch((err) => {
      console.log(err);
    });
});

routerProperties.get("/:location", (req, res) => {
  const { location } = req.params;
  Properties.findAll({ where: { location } }).then((location) => {
    res.status(201).send(location);
  });
});

routerProperties.get("/:location/:category", (req, res) => {
  const { location, category } = req.params;
  Properties.findAll({ where: { location, category }, raw: true }).then((properties) => { //que es el raw:true
    res.status(201).send(properties);
  });
});

//Deberia agrear una ruta PRICE???

module.exports = routerProperties;

