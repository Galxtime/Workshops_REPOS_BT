// model product
const mongoose = require("mongoose");

const esquemaProducto = new mongoose.Schema({
    idTendero:String,
    nombre:String,
    tipo:String,
    precio:Number,
    fecha: {
        type:Date,
        default: Date.now,
    },
});
const Producto= mongoose.model("producto",esquemaProducto);

 module.exports.Producto = Producto;