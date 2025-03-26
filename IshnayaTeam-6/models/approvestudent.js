

// module.exports = mongoose.model("ApprovedStudent", approvedStudentSchema);
// const mongoose = require("mongoose");

// const approvedStudentSchema = new mongoose.Schema({
//     student_id: { type: String, unique: true, required: true },
//     parent_email: { type: String, required: true, unique: true },
//     parent_name: { type: String, required: true },
//     contact_number: { type: String, required: true },
//     address: { type: String, required: true },
//     student_name: { type: String, required: true },
//     dob: { type: Date, required: true },
//     blood_group: { type: String, required: true },
//     gender: { type: String, required: true },
//     disability_type: { type: String, required: true },
//     disability_description: { type: String },
//     special_requirements: { type: String },
//     previous_interventions: { type: String },
//     recommended_programs: { type: String },
//     join_date: { type: Date, required: true, default: Date.now },
//     approved_at: { type: Date, default: Date.now },
//     password: { type: String, required: true },
//     udid: { type: String, required: true, unique: true },

//     // Assignments
//     teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: "ApprovedEmployee" }, // Assigned Teacher
//     courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }] // Assigned Courses
// });

// module.exports = mongoose.model("ApprovedStudent", approvedStudentSchema);

const mongoose = require("mongoose");

const approvedStudentSchema = new mongoose.Schema({
    student_id: { type: String, unique: true, required: true },
    parent_email: { type: String, required: true, unique: true },
    parent_name: { type: String, required: true },
    contact_number: { type: String, required: true },
    address: { type: String, required: true },
    student_name: { type: String, required: true },
    dob: { type: Date, required: true },
    blood_group: { type: String, required: true },
    gender: { type: String, required: true },
    disability_type: { type: String, required: true },
    disability_description: { type: String },
    special_requirements: { type: String },
    previous_interventions: { type: String },
    recommended_programs: { type: String },
    join_date: { type: Date, required: true, default: Date.now },
    approved_at: { type: Date, default: Date.now },
    password: { type: String, required: true },
    udid: { type: String, required: true, unique: true },

    // Assignments
    teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: "ApprovedEmployee" }, // Assigned Teacher
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }], // Assigned Courses

    // Attendance Array
    attendance: [
        {
            date: { type: Date, required: true },
            status: { type: String, enum: ["Present", "Absent"], required: true },
            remarks: { type: String }
        }
    ],

    // Monthly Evaluations
    monthly_evaluation: [
        {
            month: { type: String, required: true },
            communication: {
                score: { type: Number, min: 0, max: 5, required: true },
                comments: { type: String }
            },
            cognition: {
                score: { type: Number, min: 0, max: 5, required: true },
                comments: { type: String }
            },
            academics_OBE_Level_A: {
                score: { type: Number, min: 0, max: 5, required: true },
                comments: { type: String }
            },
            functional_skills: {
                score: { type: Number, min: 0, max: 5, required: true },
                comments: { type: String }
            }
        }
    ],

    // Common Area of Improvement
    area_to_improve: { type: [String], default: [] }

});

module.exports = mongoose.model("ApprovedStudent", approvedStudentSchema);
