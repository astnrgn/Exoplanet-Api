const Star = require("../db/models/Star");

module.exports = {
  index: function(req, res) {
    Star.find({}).then(star => res.json(star));
  },
  show: function(req, res) {
    Star.findById(req.params.id).then(star => res.json(star));
  },
  show2: function(req, res) {
    Star.findOne({ name: req.params.name }).then(star => res.json(star));
  },
  create: function(req, res) {
    Star.create(req.body).then(star => res.json(star));
  },
  update: function(req, res) {
    Star.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    }).then(star => res.json(star));
  },
  destroy: function(req, res) {
    Star.findByIdAndRemove(req.params.id).then(star => res.send(star));
  }
};
