const express = require("express");
const router = express.Router();

const RoutesProperties = require("./Properties");
const RoutesUser = require("./Users");
const RoutesAdmin = require("./Admin")

router.use("/properties", RoutesProperties);
router.use("/users", RoutesUser);
router.use("/admin", RoutesAdmin);

module.exports = router;
