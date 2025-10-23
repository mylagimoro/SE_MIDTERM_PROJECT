const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

// Routes
router.get('/', doctorController.getAllDoctors);
router.post('/', doctorController.createDoctor);
router.get('/:id', doctorController.getDoctor);
router.put('/:id', doctorController.updateDoctor);
router.delete('/:id', doctorController.deleteDoctor);

module.exports = router; // 👈 THIS MUST EXIST

