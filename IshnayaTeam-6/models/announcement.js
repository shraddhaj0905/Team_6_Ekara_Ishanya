// const mongoose = require("mongoose");

// const announcementSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   description: {
//     type: String,
//     required: true
//   },
//   date: {
//     type: Date,
//     default: Date.now // Automatically sets the current date
//   }
// });

// module.exports = mongoose.model("Announcement", announcementSchema);
const mongoose = require("mongoose");

const announcementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now // Automatically sets the current date
  },
  category: {
    type: String,
    enum: ["Holiday", "Events", "Urgent"], // Allowed values
    required: true // Category must be specified
  }
});

module.exports = mongoose.model("Announcement", announcementSchema);
