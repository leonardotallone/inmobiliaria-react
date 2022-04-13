const express = require("express");
const routerAdmin = express.Router();
const { Users, Properties } = require("../models/index");
const passport = require("passport");
// const { db } = require("../db");

// ------------------------------------------------- usuarios -------------------------------------------------

routerAdmin.get("/userslist", (req, res) => {
  Users.findAll()
    .then((users) => {
      res.status(201).send(users);
    })
    .catch((err) => console.log(err));
});

routerAdmin.get("/userslist/:id", (req, res) => {
  const { id } = req.params;
  Users.findOne({ where: { id } })
    .then((users) => {
      res.status(201).send(users);
    })
    .catch((err) => console.log(err));
});

routerAdmin.post("/updateuser", (req, res) => {
  const { admin } = req.body;
  Users.update(req.body, {
    where: {
      admin: admin,
    },
  })
    .then((data) => res.sendStatus(200))
    .catch((err) => console.log(err));
});

routerAdmin.delete("/deleteuser/:id", function (req, res) {
  const { id } = req.params;
  Users.destroy({
    where: {
      id: id,
    },
  }).then((data) => res.sendStatus(202));
});

// ------------------------------------------------- Properties -------------------------------------------------
routerAdmin.get("/propertieslist", (req, res) => {
  Properties.findAll()
    .then((properties) => {
      res.status(201).send(properties);
    })
    .catch((err) => console.log(err));
});

routerAdmin.get("/propertieslist/:id", (req, res) => {
  const { id } = req.params;
  Properties.findOne({ where: { id } })
    .then((users) => {
      res.status(201).send(users);
    })
    .catch((err) => console.log(err));
});



routerAdmin.post("/addproperty", (req, res) => {
  const { name, description, price, location, category, image, availability } =
    req.body;
  Properties.create({
    name: name,
    description: description,
    price: price,
    location: location,
    category: category,
    image: image,
    availability: availability,
  }).then((properties) => {
    res.status(201).send(properties);
  });
});

routerAdmin.delete("/deleteproperties", (req, res) => {
  const { id } = req.body;
  Properties.destroy({
    where: {
      id: id,
    },
  })
    .then((data) => res.sendStatus(202))
    .catch(res.sendStatus(204));
});

routerAdmin.post("/updateproperty", (req, res) => {
  const { name, description, price, location, category, image, availability } =
    req.body;
  Properties.update({
    name: name,
    description: description,
    price: price,
    location: location,
    category: category,
    image: image,
    availability: availability,
  }).then((properties) => {
    res.status(201).send(properties);
  });
});

// ------------------------------------------------- categorias -------------------------------------------------

module.exports = routerAdmin;
