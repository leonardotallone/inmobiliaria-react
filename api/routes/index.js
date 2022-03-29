const express = require("express");
const router = express.Router();

const RoutesProperties = require("./properties");
const RoutesUser = require("./users");

router.use("/properties", RoutesProperties);
router.use("/users", RoutesUser);

module.exports = router;
