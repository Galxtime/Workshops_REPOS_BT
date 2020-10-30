// model tendero cuando registran desde angular  y los modulos internos node
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// Esquema 
const esquemaTendero = new mongoose.Schema({
nombre: {
    type: String,
},

correo: {
    type: String,
},
pass : {
    type: String,
},
fechaRegistro : {
    type:Date,
    default: Date.now,
}
});
// Generar el JWT 

esquemaTendero.methods.generateJWT=function() {
return jwt.sign({
    _id:this.id,
    nombre:this.nombre,
    correo:this.correo
}, "clave");

};
// exportamos modulo
 const Tendero= mongoose.model("tendero",esquemaTendero);

 module.exports.Tendero=Tendero;
 module.exports.esquemaTendero=esquemaTendero;