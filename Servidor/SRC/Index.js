const express = require("express");
var app = express();
var cors = require("cors");
var mongoose = require("mongoose");
const bodyParser = require("body-parser");

//rutas
const carRoute = require("./Routes/carRoute");
const recordRoute = require("./Routes/recordRoute");

//Permisos de cors
app.use(
  cors({
    origin: "*",
  })
);
//coneccion a la base de datos\
app.listen(5000, () => console.log("App escuchado en el puerto 5000"));
mongoose
  .connect(
    "mongodb+srv://JGalindo:Galindo02@cluster0.3ylgj.mongodb.net/PPF_Prueba?retryWrites=true&w=majority"
  );

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api",carRoute,recordRoute);

app.get("/", function (req, res) {
  res.send("Inicio de Aplicacion");
});
