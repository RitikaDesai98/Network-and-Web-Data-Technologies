const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema(
  {
    text: String,
    sender: String,
    receiver: String,
  },
  { timestamps: true }
);

const Message = mongoose.model("message", MessageSchema);

module.exports = Message;