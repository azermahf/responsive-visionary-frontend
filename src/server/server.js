
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// Create Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory storage (in a real app, you would use a database)
let appointments = [];

// Routes
// Get all appointments
app.get('/api/appointments', (req, res) => {
  res.json(appointments);
});

// Create a new appointment
app.post('/api/appointments', (req, res) => {
  const newAppointment = {
    id: Date.now().toString(),
    ...req.body,
    createdAt: new Date()
  };
  
  appointments.push(newAppointment);
  
  // Send confirmation email (in a real app)
  sendConfirmationEmail(newAppointment);
  
  res.status(201).json({
    success: true,
    message: 'Appointment booked successfully!',
    appointment: newAppointment
  });
});

// Update an appointment
app.put('/api/appointments/:id', (req, res) => {
  const appointmentId = req.params.id;
  const updateData = req.body;
  
  const appointmentIndex = appointments.findIndex(apt => apt.id === appointmentId);
  
  if (appointmentIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Appointment not found'
    });
  }
  
  appointments[appointmentIndex] = {
    ...appointments[appointmentIndex],
    ...updateData,
    updatedAt: new Date()
  };
  
  res.json({
    success: true,
    message: 'Appointment updated successfully!',
    appointment: appointments[appointmentIndex]
  });
});

// Cancel/Delete an appointment
app.delete('/api/appointments/:id', (req, res) => {
  const appointmentId = req.params.id;
  
  const appointmentIndex = appointments.findIndex(apt => apt.id === appointmentId);
  
  if (appointmentIndex === -1) {
    return res.status(404).json({
      success: false,
      message: 'Appointment not found'
    });
  }
  
  const cancelledAppointment = appointments.splice(appointmentIndex, 1)[0];
  
  res.json({
    success: true,
    message: 'Appointment cancelled successfully!',
    appointment: cancelledAppointment
  });
});

// Handle contact form submissions
app.post('/api/contact', (req, res) => {
  // Process the contact form data
  const { name, email, subject, message } = req.body;
  
  // Here, you would typically send an email
  // For demo purposes, just log it
  console.log('Contact form submission:', { name, email, subject, message });
  
  res.status(200).json({
    success: true,
    message: 'Message received! We will contact you shortly.'
  });
});

// Email sending function (simulation)
const sendConfirmationEmail = (appointment) => {
  // In a real application, you would use nodemailer to send actual emails
  console.log(`Sending confirmation email to ${appointment.email} for appointment on ${appointment.date} at ${appointment.time}`);
};

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
