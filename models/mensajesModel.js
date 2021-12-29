let mongoose = require("mongoose");
const MensajesCollection = "mensajes";

const MensajesEsquema = mongoose.Schema({
  
  autor: { type: String, require: true, minLength: 1, maxLength: 16},
  texto: { type: String, require: true, minLength: 1 },
  date: {type: Date}
});

module.exports = {
  Mensaje: mongoose.model(MensajesCollection, MensajesEsquema),
};
