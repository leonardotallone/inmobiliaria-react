const express = require('express')
const router = express.Router()

const properties = require('./properties')
// const user = require('./users')
// const carrito = require('./carrito')
// const admin = require('./admin')
// const orden = require('./orden')

router.use('/properties', properties)
// router.use('/users', user)
// router.use('/carrito', carrito)
// router.use('/admin', admin)
// router.use('/orden',orden)


module.exports = router