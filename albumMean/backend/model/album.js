//modulos internos node
const mongoose = require("mongoose");

const esquemaAlbum = new mongoose.Schema({
    idUsuario:String,
    nombre:String,
    imagen:String,
    fecha: {
        type:Date,
        default: Date.now,
    },
});
const Album= mongoose.model("album",esquemaAlbum);

 module.exports.Album=Album;