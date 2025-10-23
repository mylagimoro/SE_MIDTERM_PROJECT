const Appointment = require('../models/appointmentModel');

// Get all appointments (with doctor & patient details)
exports.getAllAppointments = async (req, res) => {
  const appointments = await Appointment.find()
    .populate('patientId', 'name email')
    .populate('doctorId', 'name specialty');
  res.json(appointments);
};

// Create appointment
exports.createAppointment = async (req, res) => {
  const appointment = new Appointment(req.body);
  await appointment.save();
  res.status(201).json(appointment);
};

// Get appointment by ID
exports.getAppointment = async (req, res) => {
  const appointment = await Appointment.findById(req.params.id)
    .populate('patientId', 'name email')
    .populate('doctorId', 'name specialty');
  if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
  res.json(appointment);
};

// Update appointment
exports.updateAppointment = async (req, res) => {
  const updated = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

// Delete appointment
exports.deleteAppointment = async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.json({ message: 'Appointment deleted' });
};
