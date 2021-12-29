let { Mensaje } = require("../models/mensajesModel.js");
let { ConectMongo } = require("../options/options.js");

const getMsjs = async () => {
  await ConectMongo('mensajes');
  let msjs = []
  aux = await Mensaje.find({});
  return aux
};

const setMsj = async (msjIn) => {
  ConectMongo().then(() => {
    Mensaje.insertMany(msjIn, (err) => {
      if (err) {
        throw "Error grabando el msjs" + error;
      } else {
        console.log("msj guardado : " + JSON.stringify(msjIn));
      }
    });
  });
};

module.exports = {
  getMsjs,
  setMsj,
};
