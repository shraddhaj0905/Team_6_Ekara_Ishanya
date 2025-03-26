const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || "babbar";

const employeeAuth = (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }

    // Verify Token
    const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);

    // ✅ Check if the role is "employee"
    if (decoded.role !== "employee") {
      return res.status(403).json({ message: "Access denied. Only employees allowed." });
    }

    req.employee = decoded; // Store employee details in request
    next(); // Proceed to next middleware
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token." });
  }
};

module.exports = employeeAuth;
