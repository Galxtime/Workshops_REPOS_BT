
// route Tendero API a funcionar nos llega por metodo POST desde angular los campos que registro el usuario 
const express= require("express");
const router= express.Router();

//modulos internos creados por el desarrollador

const {Tendero}= require("../model/tendero");

//usa el modelo de  model/tendero

// cuando completa un formulario desde angular lo envian por POST
router.post("/", async (req, res) =>{

    // espera a que se cumpla un proceso la validacion si correo existe DB
    let tendero= await Tendero.findOne({correo:req.body.correo})

    if (tendero) return res.status(400).send("El correo ya esta registrado");
   // mapeo para registrar lo que llego por parte del usuario desde el Front(angular)  y guardar en MONGODB

    tendero= new Tendero({
        nombre: req.body.nombre,
        correo: req.body.correo,
        pass:   req.body.pass,
        
    });

        // guardamos el usuario que se va a crear con el JWT 
// crear un resultado .save se encarga de guardar y crear usuario en MONGODB donde vamos a utilizar
// el ASYNC jwtToken 

const result = await tendero.save();
const jwtToken = tendero.generateJWT();
res.status(200).send({jwtToken});
});


// Exportar el modulo se envia a la APP que es index.js (router xq tiene el POST)
module.exports=router;