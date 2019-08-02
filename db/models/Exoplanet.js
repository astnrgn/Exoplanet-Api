const mongoose = require("../connection");
const Schema = mongoose.Schema;

const ExoplanetSchema = new Schema({
  name: {
    type: String
  },
  habitability: {
    type: Boolean
  },
  semiMajorAxis: {
    type: Number
  },
  orbitalPeriod: {
    type: Number
  },
  mass: {
    type: Number
  },
  radius: {
    type: Number
  },
  density: {
    type: Number
  },
  star: [
    {
      type: Schema.Types.ObjectId,
      ref: "Star"
    }
  ]
});

module.exports = mongoose.model("Exoplanet", ExoplanetSchema);
