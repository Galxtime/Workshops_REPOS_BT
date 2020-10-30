// routes auth Modulos de Node
const express = require("express");
const router = express.Router();


// Modulos internos para el sistema de login traemos el modelo tendero
const { Tendero } = require("../model/tendero");
// Ruta
router.post("/", async (req, res) => {
  // Validamos que el correo exista
  const tendero = await Tendero.findOne({ correo: req.body.correo });
  // Si el correo no existe
  if (!tendero)
    return res.status(400).send("Correo o contraseña no son validos");
  // si el pass no existe
  if (tendero.pass !== req.body.pass)
    return res.status(400).send("Correo o contraseña no son validos");
  // cuando una persona se loguea Generamos un JWT para que index.js lo pueda utilizar
  // lo importamos desde el model de tendero
  const jwtToken = tendero.generateJWT();
  res.status(200).send({ jwtToken });
});
module.exports = router;