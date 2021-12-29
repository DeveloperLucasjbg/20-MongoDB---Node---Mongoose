const {
  setManyProductos,
  getProductos,
  deleteProducto,
  deleteAllProductos,
  actualizarTabla,
} = require("./productosCRUD/crudPRODUCTOS.js");

class metodos {
  constructor(id, req) {
    this.idToSearch = id;
    this.productos = require("./productosCRUD/db.js");
    this.newReq = req;
  }

  async listar() {
    await getProductos().then((data) => (this.productos = data));
    if (this.productos.length == 0) {
      return "tabla vacia";
    } else {
      console.log(this.productos);
      return this.productos;
    }
  }

  async listarPorId() {
    await getProductos().then((data) => (this.productos = data));
    let thisProduct = this.productos.find(
      (productos) => productos.id == this.idToSearch
    );
    console.log(thisProduct);
    return thisProduct || "nose encontro producto";
  }
  async guardar() {
    await setManyProductos(this.newReq)
    return;
  }
  async actualizar() {
    await getProductos().then((data) => (this.productos = data));
    let thisProduct = await this.productos.find(
      (productos) => productos.id == this.idToSearch
      );
    if (!thisProduct) {
      return json({ msg: "prod no encontrad" });
    }
    thisProduct.nombre = this.newReq.nombre || thisProduct.nombre;
    thisProduct.precio = this.newReq.precio || thisProduct.precio;
    thisProduct.stock = this.newReq.stock || thisProduct.stock;
    await actualizarTabla(this.idToSearch, thisProduct);
    return 201;
  }
  borrar() {
    if (this.productos.length !== 0) {
      if (this.idToSearch == undefined) {
        deleteAllProductos();
        return 201;
      } else {
        if(this.idToSearch.length == 24){
          deleteProducto((this.idToSearch))    
    }else{
      console.log('el id no es un id de mongo')
    }
        return 201;
      }
    } else {
      return "no hay productos para borrar";
    }
  }
}
module.exports = metodos;
