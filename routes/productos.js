const express = require("express");
const {
  obtenerProductos,
  cargarProducto,
  obtenerProductoPorId,
  editarProducto,
  eliminarProducto,
} = require("../controllers/productosController");

const router = express.Router();

//Middlewares requeridos

const { validarId } = require("../middlewares/validarId");
const { check } = require("express-validator");

/* GET users listing. */
router.get("/lista", obtenerProductos);
router.get("/id/:id([0-9a-fA-F]{24})", validarId, obtenerProductoPorId);

//POSTS (Crear recursos)
//El middleware debe estar entre el endpoint y la llamada al controlador entre corchetes.
router.post(
  "/crear",
  [
    check("codigo")
      .not()
      .isEmpty()
      .withMessage("El campo no puede estar vacío.")
      .isNumeric()
      .withMessage("El campo no puede estar vacío"),
    check("talle").not().isEmpty().withMessage("El campo no puede estar vacío"),
    check("precio")
      .isNumeric()
      .withMessage("El código debe ser de tipo numérico")
      .isLength({ min: 1, max: 5 })
      .withMessage("El precio ingresado debe tener un máximo de 5 dígitos"),
  ],
  cargarProducto
);

//PUT actualizacion de un producto
router.put(
  "/editar/:id",
  validarId,
  [
    check("codigo")
      .not()
      .isEmpty()
      .withMessage("El campo no puede estar vacío")
      .isNumeric()
      .withMessage("El código debe ser numérico"),
    check("descripcion")
      .not()
      .isEmpty()
      .withMessage("El campo no puede estar vacio"),
    check("precio")
      .isNumeric()
      .withMessage("El código debe ser de tipo numérico")
      .isLength({ min: 1, max: 5 })
      .withMessage("El precio ingresado debe tener un máximo de 5 dígitos"),
  ],
  editarProducto
);

//DELETE producto

router.delete("/eliminar/:id", validarId, eliminarProducto);
module.exports = router;
