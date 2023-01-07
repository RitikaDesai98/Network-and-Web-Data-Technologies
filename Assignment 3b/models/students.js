const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  student_id: { type: Number, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  courses: { type: Array, required: true },
});

// Export model
module.exports = mongoose.model("students", StudentSchema);
