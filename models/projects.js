const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  title: String,
  description: String,
  button: [String], // tableau de strings
});

const Project = mongoose.model("projects", projectSchema);

module.exports = Project;