const express = require("express");
const routerUsers = express.Router();
const { Users } = require("../models/index");
const passport = require("passport");
// const { db } = require("../db");


routerUsers.post("/register", (req, res) => {
    const user = req.body;
    Users.create(user) 
    .then((user) => {
        res.status(201).send(user);
    });
});

routerUsers.post("/login", passport.authenticate("local"), (req, res) => {
  res.json(req.user); 
});

routerUsers.post("/logout", (req, res) => {
  req.logOut();
  res.sendStatus(200).send({})
});

// routerUsers.put("/favorite", (req, res) => {
//   req.logOut();
//   res.sendStatus(200).send({})
// });


routerUsers.get("/me", (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  res.send(req.user);
});

routerUsers.post("/me", (req, res) => {
  const { name, surname, email, password, adress, phoneNumber } = req.body; 
  Users.update(req.body, {
    where: {
      name: name,
      surname: surname,
      email: email,
      password: password,
      adress: adress,
      phoneNumber: phoneNumber,
    },
  })
    .then((data) => res.sendStatus(200))
    .catch((err) => console.log(err));
});

//Perfil del Logueado.
routerUsers.get("/:id", (req, res) => {
  const { id } = req.params;
  Users.findByPk({ where: { id } }).then((user) => {
    res.status(201).send(user);
  });
});

module.exports = routerUsers;

