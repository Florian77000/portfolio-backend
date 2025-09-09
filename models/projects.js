const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  title: String,
  description: String,
  button: [String],
  imageMain : String,
  imageSecond : String,
});

const Project = mongoose.model("projects", projectSchema);

module.exports = Project;