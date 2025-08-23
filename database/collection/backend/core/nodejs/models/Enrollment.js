const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: String,
  department: { type: String, required: true },
  trainingCenter: { type: String, required: true },
  trainingProgram: {
    type: String,
    enum: [
      'Desarrollo de Software',
      'Automatización Industrial',
      'Diseño de Modas',
      'Tecnología en Electricidad'
    ],
    required: true
  },
  hasGitHub: { type: Boolean, default: false },
  englishLevel: {
    type: String,
    enum: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    default: 'A1'
  },
  recommendedInstructor: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);
