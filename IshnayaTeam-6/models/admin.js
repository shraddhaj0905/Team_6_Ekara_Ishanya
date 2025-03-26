const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Hashed password
  role: { type: String, enum: ["admin"], default: "admin" }
});
// Function to create a default admin on startup
adminSchema.statics.initializeAdmin = async function () {
  const Admin = this;

  // Check if an admin already exists
  const existingAdmin = await Admin.findOne({ email: "admin@example.com" });
  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash("securepassword", 10);
    await Admin.create({
      name: "Super Admin",
      email: "admin@example.com",
      password: hashedPassword,
      role: "admin"
    });
    console.log(" Default Admin Created!");
  } else {
    console.log(" Admin already exists, skipping creation.");
  }
};

module.exports = mongoose.model("Admin", adminSchema);
