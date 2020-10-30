// index.js invoca la ruta del controlador routes/tendero auth producto.js

const express= require("express");
const mongoose= require("mongoose");

// traer o importar el usuario del modulo routes 
const tendero= require("./routes/tendero");
const auth= require("./routes/auth");
const producto= require("./routes/producto");

// crear nuestra app 
const app =express();
// todo la comunicación va a ser formato JSON 
app.use(express.json());
// indicamos cual es la ruta de la API cuando se este registrando un tendero
app.use("/api/tendero/", tendero);
app.use("/api/auth/", auth);
app.use("/api/producto/", producto);

// puerto para ejecutar nuestro  aplicacion servidor

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log("Escuchando en el puerto :" +port));

// creamos la conexion con la base de datos MONGODB
mongoose
.connect("mongodb://localhost/tiendabictia",{
    // utilizar 4 parametros por defacto para que funcionen bien
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
.then(()=> console.log("Conexión a MongoDB: online"))
.catch((error) => console.log("Conexión a MongoDB: offline") );