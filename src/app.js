const express = require('express')
const cors = require('cors')
require('dotenv').config()

const productosRoutes = require('./routes/productosRoutes')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', productosRoutes)

app.get('/', (req, res) => {
  res.json({ mensaje: 'Backend del recuperatorio funcionando' })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})

module.exports = app
