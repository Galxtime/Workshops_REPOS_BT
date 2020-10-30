// routes producto  API a funcionar nos llega por metodo POST desde angular los campos que registro el tendero 
const express= require("express");
const router= express.Router();

//modulos internos creados por el desarrollador
// Tablero donde guardar
const { Producto}  = require("../model/producto");
// usuario es el que hace el registro para hacer una actividad
const { Tendero } = require("../model/tendero");
// middleware pendiente de vigilancia del usuario 
const auth = require("../middleware/auth");

// ruta primero hace el proceso con middleware quien esta logeado trae correo &pass
router.post("/", auth, async(req, res) =>{
 //Obtenemos el id del usuario autenticado
 const tendero = await Tendero.findById( req.tendero._id);
 // Si el usuario no existe
 if(!tendero) return res.status(400).send("El usuario tendero no existe");
 //si el usuario existe creamos un actividad para ese usuario
 const producto = new Producto({
    idTendero: tendero._id,
    nombre: req.body.nombre,
    tipo: req.body.tipo
 })
 // Enviamos resultado
 const result = await producto.save();
 res.status(200).send(result)
})
module.exports = router;