// API a funcionar nos llega por metodo POST desde angular los campos que registro el usuario 
const express= require("express");
const router= express.Router();

//modulos internos creados por el desarrollador
// Album donde guardar
const { Album }  = require("../model/album");
// usuario es el que hace el registro para hacer una actividad
const { Usuario } = require("../model/usuario");
// middleware pendiente de vigilancia del usuario 
const auth = require("../middleware/auth");
const cargarArchivo= require("../middleware/file")


// Listar actividades del usuario con GET 
// autenticación pasar por el proceso de middleware para verificar usuario
router.get("/lista", auth, async (req, res) => {
   // Buscamos el usuario por id
   const usuario = await Usuario.findById(req.usuario._id);
   // Si el usuario no existe
   if (!usuario) return res.status(400).send("El usuario no existe en BD");
   // si el usuario existe almacenamos en nuestra Colección Album con find trae una colección de actividades
   const album = await Album.findByIdAndUpdate({ idUsuario: req.usuario._id})
    res.send(album)
});   
   




//REGISTRAR ACTIVIDAD POST ruta primero hace el proceso con middleware quien esta logeado trae correo &pass
router.post("/", auth, async(req, res) =>{
 //Obtenemos el id del usuario autenticado
 const usuario = await Usuario.findById( req.usuario._id);
 // Si el usuario no existe
 if(!usuario) return res.status(400).send("El usuario no existe");
 //si el usuario existe creamos un nombre para ese usuario
 const album = new Album({
    idUsuario: usuario._id,
    nombre: req.body.nombre,
     })
 // Enviamos resultado
 const result = await album.save();
 res.status(200).send(result)
});

//Crear actividad con actividad 
router.post("/cargarArchivo",  cargarArchivo.single("imagen"),  auth,  async (req, res) => {
  //obtengo valores url=protocolo http el host es la ruta y el puerto localhost:3000 si es hosting mi pagina.comf
    const url = req.protocol + "://" + req.get("host");
    // Validamos si existe el usuario
    const usuario = await Usuario.findById(req.usuario._id);
    // si el usuario no existe
    if (!usuario) return res.status(400).send("El usuario no existe en BD");
    // Si existe el usuario continuamos el proceso
    let rutaImagen = null;
    if (req.file.filename) {
      rutaImagen = url + "/public/" + req.file.filename;
    } else {
      rutaImagen = null;
    }
    // Guardar la nombre con imagen en BD
    const album = new Album({
      idUsuario: usuario._id,
      nombre: req.body.nombre,
      imagen: rutaImagen,
      
    });
    // Enviamos resultado
    const result = await album.save();
    res.status(200).send(result);
  }
);

//Actualizar actividad 

router.put("/", auth, async (req, res) => {
   // Buscamos el usuario por id
   const usuario = await Usuario.findById(req.usuario._id);
   // Si el usuario no existe
   if (!usuario) return res.status(400).send("El usuario no existe en BD");
   // si el usuario existe
   const album = await Album.findByIdAndUpdate(
     req.body._id,
     {
       idUsuario: req.usuario._id,
       nombre: req.body.nombre,
        },
     {
       new: true,
     }
   );
   if (!album)
     return res.status(400).send("No hay imagenes asignada a este usuario");
   res.status(200).send(album);
 });
 // Eliminar el usuario , traemos un parametro del id de la tarea
 router.delete("/:_id", auth, async (req, res) => {
   // Buscamos el usuario por id
   const usuario = await Usuario.findById(req.usuario._id);
   // Si el usuario no existe
   if (!usuario) return res.status(400).send("El usuario no existe en BD");
   // si el usuario existe eliminamos una actividad nuestra Colección tablero con find 
   const album = await Album.findByIdAndDelete({ idUsuario: req.params._id})
   if (!album)
   return res.status(400).send("No se encuentra album a eliminar");
 res.status(200).send({message:"Album  eliminado"});
});



module.exports = router;