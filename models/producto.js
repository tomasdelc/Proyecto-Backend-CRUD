const mongoose = require ('mongoose');

const Schema = mongoose.Schema;
const productoSchema = new Schema({
    //propiedad
    codigo: {
            type: Number,
            required: true,
            unique: true,  //por default esto es FALSE. Codigo UNICO por producto
    },

    descripcion: { 
        type: String,
        required: true,

    },

    marca: {
        type: String,
        required: true,
    },

    precio : {
        type: Number,
        required: true
    },

    estaEnOferta: {
        type: Boolean,
        required: false,
    },
});

const Producto = mongoose.model('Producto', productoSchema);
module.exports = { Producto };