const express = require('express');
const router = express.Router();
const controller = require('../controllers/patientController');

router.get('/', controller.getAllPatients);
router.post('/', controller.createPatient);
router.get('/:id', controller.getPatient);
router.put('/:id', controller.updatePatient);
router.delete('/:id', controller.deletePatient);

module.exports = router;