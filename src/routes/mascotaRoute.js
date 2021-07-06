const {Router} = require('express');
const router = Router();
const mascotaController = require('../controllers/mascotaController');

router.get('/', mascotaController.getListaMascotas);

router.get('/:id', mascotaController.getMascota);

router.put('/:id', mascotaController.updateMascota);

router.post('/', mascotaController.createMascota);

router.delete('/:id', mascotaController.deleteMascota);

module.exports = router;