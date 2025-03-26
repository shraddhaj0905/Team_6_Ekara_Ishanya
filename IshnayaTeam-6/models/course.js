const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseId: { type: String, required: true, unique: true }, // Unique Course ID
  name: { type: String, required: true },
  ageGroup: { type: String, required: true },
  skillAreas: { type: [String], required: true } // Array of skills
});

module.exports = mongoose.model("Course", courseSchema);