const { Producto } = require("../models/producto");
const validarId = async (req, res, next) => {
  const producto = await Producto.findById(req.params.id);
  if (producto !== null) {
    next();
  } else {
    res.status(500).json({ msg: "ID no encontrado" });
  }
};

module.exports = { validarId };
