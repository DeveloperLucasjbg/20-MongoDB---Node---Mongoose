let mongoose = require("mongoose");
let { Producto } = require("../models/productosModel.js");
let { ConectMongo } = require("../options/options.js");

const getProductos = async () => {
  await ConectMongo('productos');
  aux = await Producto.find({}).sort({ nombre: 1 });
  return aux;
};

const actualizarTabla = async (id, changes) => {
  await Producto.updateOne(
    { _id: mongoose.Types.ObjectId(id) },
    {
      $set: changes,
    }
  );
};

const deleteProducto = async (id) => {
  await Producto.deleteMany({ _id: mongoose.Types.ObjectId(id) }).then((e) => {
    if (e.deletedCount == 0) {
      console.log("no se borro nada");
    } else {
      return console.log(`Producto borrado`);
    }
  });
};
const deleteAllProductos = async () => {
  await Producto.deleteMany({});
  return console.log(`Productos borrado`);
};

const setManyProductos = (productsIn) => {
  ConectMongo().then(() => {
    Producto.insertMany(productsIn, (err) => {
      if (err) {
        throw "Error grabando en" + error;
      } else {
        console.log("se grabo : " + JSON.stringify(productsIn));
      }
    });
  });
};

module.exports = {
  getProductos,
  setManyProductos,
  deleteProducto,
  deleteAllProductos,
  actualizarTabla,
};
