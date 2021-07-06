const {Router} = require('express')
const router = Router();
const mascotaRoute = require('./mascotaRoute');

router.get('/mascotas', mascotaRoute)

module.exports = router;