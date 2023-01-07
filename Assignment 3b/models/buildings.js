const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BuildingSchema = new Schema({
  building_id: { type: Number, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  zipcode: { type: Number, required: true },
});

module.exports = mongoose.model("buildings", BuildingSchema);
