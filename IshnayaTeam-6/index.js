const express = require("express");
const app = express();
const studentRoutes = require("./routes/studentRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const adminRoutes=require("./routes/adminRoutes");
const mongoose = require("mongoose");
const Admin = require("./models/admin"); // Import Admin model

const cors = require("cors");

app.use(cors({
    origin: "http://localhost:3000", // Allow requests from frontend
    credentials: true, // Allow cookies & authentication headers
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow these HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow these headers
}));

require("dotenv").config();
const PORT = process.env.PORT || 4000;

// Connect to Database
require("./config/database").connect();

app.use(express.json());

// Routes
app.use("/api/students", studentRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/admin", adminRoutes);
// Run the function after database connection
mongoose.connection.once("open", async () => {
  await Admin.initializeAdmin(); //  Call the function to create a default admin
});

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
