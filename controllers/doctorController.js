const Doctor = require('../models/doctorModel');

// Get all doctors
exports.getAllDoctors = async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
};

// Create doctor
exports.createDoctor = async (req, res) => {
  const doctor = new Doctor(req.body);
  await doctor.save();
  res.status(201).json(doctor);
};

// Get doctor by ID
exports.getDoctor = async (req, res) => {
  const doctor = await Doctor.findById(req.params.id);
  if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
  res.json(doctor);
};

// Update doctor
exports.updateDoctor = async (req, res) => {
  const updated = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

// Delete doctor
exports.deleteDoctor = async (req, res) => {
  await Doctor.findByIdAndDelete(req.params.id);
  res.json({ message: 'Doctor deleted' });
};
