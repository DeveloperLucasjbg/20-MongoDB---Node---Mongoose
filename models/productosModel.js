let mongoose = require("mongoose");
const productosCollection = "productos";

const ProductosEsquema = mongoose.Schema({
  
  nombre: { type: String, require: true, minLength: 1, maxLength: 20 },
  precio: { type: Number, require: true, minLength: 1 },
  stock: { type: Number, require: true, minLength: 0, maxLength: 15 }
});

module.exports = {
  Producto: mongoose.model(productosCollection, ProductosEsquema),
};
