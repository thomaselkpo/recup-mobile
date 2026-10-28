const express = require('express')
const router = express.Router()
const { getProductos, createProducto, updateProducto, deleteProducto } = require('../controllers/productosController')

router.get('/productos', getProductos)
router.post('/productos', createProducto)
router.put('/productos/:id', updateProducto)
router.delete('/productos', deleteProducto)

module.exports = router
