const { validationResult} = require("express-validator");
const { Producto } = require("../models/producto");

const obtenerProductos = async (req, res) => {
  const productos = await Producto.find();
  res.json({ productos });
};

//CREATE producto
const cargarProducto = async (req, res) => {
  try {
    const producto = new Producto(req.body);
    await producto.save();
    res.status(201).json({
      msg: "El producto ha sido guardado exitosamente.",
      producto: producto,
    });
  } catch (error) {
    console.error(error.message);
  }
};

//READ producto
const obtenerProductoPorId = async (req, res) => {
  const producto = await Producto.findById(req.params.id);
  res.status(201).json({ producto });
};

//UPDATE producto
const editarProducto = async (req, res) => {
  try {
    const error = validationResult(req);
    if (error.isEmpty()) {
      await Producto.findByIdAndUpdate(req.params.id, req.body);
      res.status(201).json({ msg: "Producto actualizado" });
    } else {
      res.status(501).json({ msg: " error" }); //Error de la validacion
    }
  } catch (error) {
    console.log(error.message); //Error de la base de datos (conexion)
  }
};


//DELETE producto
const eliminarProducto = async(req,res) =>{
  try {
    const producto = await Producto.findByIdAndDelete(req.params.id);
    res.json({msg: "Producto eliminado", producto});
  } catch (error) {
    console.log(error.message)
    
  }
}
module.exports = {
  obtenerProductos,
  obtenerProductoPorId,
  cargarProducto,
  editarProducto,
  eliminarProducto
};
