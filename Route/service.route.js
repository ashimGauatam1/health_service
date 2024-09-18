
const express = require('express');
const router = express.Router();
const serviceController = require('../controller/serviceController.js');


router.post('/addservice', serviceController.addService);
router.get('/getallservice', serviceController.getAllServices);
router.put('/updateservice/:id', serviceController.updateService);
router.delete('/deleteservice/:id', serviceController.deleteService);

module.exports = router;
