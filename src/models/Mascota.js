const mongoose = require('mongoose');

const mascotaSchema = new mongoose.Schema({
    nombre: String, 
    edad: Number, 
    categoria: String,
    genero: Number,
    descripcion: String,
    direccion: String, 
    distrito: String, 
    ciudad: String,
    imgUrl: String
}, {
    timestamps: true,
    versionKey: false,
})

module.exports = mongoose.model('Mascota', mascotaSchema);