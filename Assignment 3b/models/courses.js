const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema(
{
  course_id: {type: Number, required: true },
  name: {type: String, required: true },
  instructor: {type: String, required: true },
  meeting_day: {type: String, required: true },
  meeting_time: {type: String, required: true },
  building: {type: Number, required: true}
});

module.exports = mongoose.model("courses", CourseSchema);