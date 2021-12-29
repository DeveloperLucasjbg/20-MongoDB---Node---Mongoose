const mongoose = require("mongoose");
const URL = "mongodb://localhost:27017/ecomerce";

const ConectMongo = async (dbName) => {
  try {
    await mongoose.connect(
      URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 1000,
      },
      (err) => {
        if (err) {
          throw "Error al conectar";
        }else{
          console.log(`Conectado a mongo --> ${dbName}`)
        }
      }
      );
    } catch { console.log("error");}
  };

  module.exports = {ConectMongo}