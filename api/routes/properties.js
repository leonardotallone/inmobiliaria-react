const express = require("express");
const routerProperties = express.Router();
const { Op } = require("sequelize");
const {
  db,
  User,
  Product,
  CarritoItem,
  Order,
  OrderItem,
} = require("../models/index");

routerProperties.get("/", (req, res) => {
  Product.findAll().then((guitar) => {
    res.status(201).send(guitar);
  });
});

routerProperties.get("/select/:id", (req, res) => {
  const { id } = req.params;
  Product.findOne({ where: { id } })
    .then((guitar) => {
      res.status(201).send(guitar);
    })
    .catch((err) => {
      console.log(err);
    });
});

routerProperties.get("/:marca", (req, res) => {
  const { marca } = req.params;
  Product.findAll({ where: { marca } }).then((guitar) => {
    res.status(201).send(guitar);
  });
});

routerProperties.get("/:marca/:categoria", (req, res) => {
  const { marca, categoria } = req.params;
  Product.findAll({ where: { marca, categoria }, raw: true }).then((guitar) => {
    res.status(201).send(guitar);
  });
});

module.exports = routerProperties;

/*routerProduct.get("/:nombre", (req,res) => {
    const nombre = req.params
    const findProduct = await Product.findAll({ 
        where:{
            marca: {[op.startWith]: nombre},
        }
    })
    return(res.status(201).send(findProduct))
})*/
