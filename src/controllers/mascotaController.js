const Mascota = require("../models/Mascota")
const mongo = require('../mongo');

const createMascota = async (req,res) => {
    const newMascota = new Mascota(req.body)
    await mongo().then(async mongoose => {
        try {
            const mascotaSaved = await newMascota.save()
            res.status(201).json(mascotaSaved);
        } catch (error) {
            res.status(500).json(error);
        }
        finally {
            mongoose.connection.close();
        }
    })
    
}

const getListaMascotas = async (req, res) => {
    await mongo().then(async mongoose => {
        try {
            const mascotas = await Mascota.find();
            res.status(200).json(mascotas);
        } catch (error) {
            res.status(500).json(error);
        }
        finally {
            mongoose.connection.close();
        }
    })
}

const getMascota = async (req, res) => {
    const {id} = req.params;
    if(id) {
        await mongo().then(async mongoose => {
            try {
                const mascota = await Mascota.findById(id)
                res.status(200).json(mascota);
            } catch (error) {
                res.status(500).json(error);
            }
            finally {
                mongoose.connection.close();
            }
        })
    } else {
        res.status(400).json({"error": "bad request: param id required"});
    }
}

const updateMascota = async (req, res) => {
    const {id} = req.params;
    if (id) {
        await mongo().then(async mongoose => {
            try {
                //const existingMascota = await Mascota.findById

                const updatedMascota = await Mascota.findByIdAndUpdate(id, req.body, {new: true})
                if(!updatedMascota) {
                    res.status(404).json({"error": "id not found"});
                } else {
                    res.status(200).json(updatedMascota);
                }
            } catch (error) {
                res.status(500).json(error);
            }
            finally {
                mongoose.connection.close();
            }
        })
    } else {
        res.status(400).json({"error": "bad request: param id required"});
    }
}

const deleteMascota = async (req, res) => {
    const {id} = req.params;
    if (id) {
        await mongo().then(async mongoose => {
            try {
                await Mascota.findByIdAndDelete(id);
                res.status(204).json();
            } catch (error) {
                res.status(500).json(error);
            }
            finally {
                mongoose.connection.close();
            }
        })
    } else {
        res.status(400).json({"error": "bad request: param id required"});
    }
}

module.exports = {
    createMascota, 
    getListaMascotas, 
    getMascota, 
    updateMascota, 
    deleteMascota
}