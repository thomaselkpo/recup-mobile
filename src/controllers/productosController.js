const supabase = require('../config/database')

const getProductos = async (req, res) => {
  try {
    const { data, error } = await supabase.from('productos').select('*')
    if (error) return res.status(500).json({ error: error.message })
    console.log('Productos obtenidos:', data)
    res.json(data)
  } catch (err) {
    console.log('Error en getProductos:', err.message)
    res.status(500).json({ error: 'Error del servidor' })
  }
}

const createProducto = async (req, res) => {
  try {
    const { nombre, precio, stock } = req.body
    const { data, error } = await supabase.from('productos').insert([{ nombre, precio, stock }]).select()
    if (error) return res.status(500).json({ error: error.message })
    console.log('Producto creado:', data[0])
    res.status(201).json(data[0])
  } catch (err) {
    console.log('Error en createProducto:', err.message)
    res.status(500).json({ error: 'Error del servidor' })
  }
}

const updateProducto = async (req, res) => {
  try {
    const { id } = req.params
    const { nombre, precio, stock } = req.body
    const { data, error } = await supabase.from('productos').update({ nombre, precio, stock }).eq('id', id).select()
    if (error) return res.status(500).json({ error: error.message })
    console.log('Producto actualizado:', data[0])
    res.json(data[0])
  } catch (err) {
    console.log('Error en updateProducto:', err.message)
    res.status(500).json({ error: 'Error del servidor' })
  }
}

const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params
    const { error } = await supabase.from('productos').delete().eq('id', id)
    if (error) return res.status(500).json({ error: error.message })
    console.log('Producto eliminado, id:', id)
    res.json({ mensaje: 'Producto eliminado' })
  } catch (err) {
    console.log('Error en deleteProducto:', err.message)
    res.status(500).json({ error: 'Error del servidor' })
  }
}

module.exports = { getProductos, createProducto, updateProducto, deleteProducto }
