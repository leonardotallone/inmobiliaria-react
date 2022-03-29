const express = require('express')
const routerUsers = express.Router()
const {Users,Properties } = require("../models/index"); // Es necesario importar PROPERTIES
const { db } = require("../db");
const passport = require('passport');


routerUsers.post("/login", passport.authenticate("local"), (req, res) => {
    res.json(req.user); //esta linea no la entiendo...
});

routerUsers.post("/register", (req, res) => {
    const user = req.body //req.body deberia coincidir exactamente con los datos de mi tabla Users.??? O solo algunos, o no necesariamente.
    Users.create(user) // con que datos va a crear el usuario???
    .then((user)=> {
        res.status(201).send(user);
    })
});

routerUsers.post("/logout", (req, res) => { // el logout no es tambien con passport?
    req.logOut();
    res.sendStatus(200);
});

routerUsers.get("/me", (req, res) => {
    if (!req.user) {
      return res.sendStatus(401);
    }
    res.send(req.user);
});

routerUsers.post("/me", (req,res) => {
    const {name,surname,email,password,direction,phoneNumber} = req.body // Esta ruta edita el USER. WHERE deberia coincidir 100% con la tabla?
    Users.update(req.body,
    { where:{
        name : name,
        surname : surname,
        email : email,
        password: password,
        direction: direction,
        phoneNumber: phoneNumber
    }})
    .then((data) => res.sendStatus(200))
    .catch(err => console.log(err))
})

//Perfil del Logueado. FindOne by ID no es lo mismo, por que?
routerUsers.get("/:id", (req,res) => {
    const {id} = req.params
    Users.findByPk({where: {id}})
    .then((user)=> {
        res.status(201).send(user);
    })
})

module.exports = routerUsers;