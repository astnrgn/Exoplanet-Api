const mongoose = require("../connection");
const Schema = mongoose.Schema;

const StarSchema = new Schema({
  name: {
    type: String
  },
  mass: {
    type: Number
  },
  effTemp: {
    type: Number
  },
  radius: {
    type: Number
  },
  exoplanet: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exoplanet"
    }
  ]
});

module.exports = mongoose.model("Star", StarSchema);
