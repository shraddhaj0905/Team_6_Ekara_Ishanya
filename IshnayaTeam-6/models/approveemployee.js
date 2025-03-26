const mongoose = require("mongoose");

const approvedEmployeeSchema = new mongoose.Schema({
    emp_reg_id: { type: String, unique: true, required: true }, // ✅ Unique Employee ID
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    contact_number: { type: String, required: true },
    address: { type: String, required: true },
    qualifications: { type: String, required: true },
    experience: { type: String },
    skills: { type: [String] },
    // resume: { type: String }, // Stores uploaded file URL/path
    assigned_students: [{ type: mongoose.Schema.Types.ObjectId, ref: "ApprovedStudent" }],
    join_date: { type: Date, required: true, default: Date.now },
    approved_at: { type: Date, default: Date.now },
    password: { type: String, required: true }
});

module.exports = mongoose.model("ApprovedEmployee", approvedEmployeeSchema);
