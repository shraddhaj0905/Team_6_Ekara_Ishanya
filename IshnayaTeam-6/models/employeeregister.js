const mongoose = require("mongoose");

const employeeRegistrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Hashed password
  contact_number: { type: String, required: true },
  address: { type: String, required: true },

  qualifications: { type: String, required: true },
  experience: { type: String }, // Years of experience
  skills: { type: [String] }, // ✅ Fix here (Array of Strings)

  resume: { type: String }, // Stores uploaded file URL/path


});

module.exports = mongoose.model("EmployeeRegistration", employeeRegistrationSchema);
