const Exoplanet = require("../db/models/Exoplanet");

module.exports = {
  index: function(req, res) {
    Exoplanet.find({}).then(exoplanet => res.json(exoplanet));
  },
  show: function(req, res) {
    Exoplanet.findById(req.params.id).then(exoplanet => res.json(exoplanet));
  },
  show2: function(req, res) {
    Exoplanet.findOne({ name: req.params.name }).then(exoplanet =>
      res.json(exoplanet)
    );
  },
  show3: function(req, res) {
    Exoplanet.find({}).then(exoplanet => {
      var resultTrue = exoplanet.filter(list => {
        return list.habitability === true;
      });
      res.json(resultTrue);
    });
  },
  show4: function(req, res) {
    Exoplanet.find({}).then(exoplanet => {
      var resultFalse = exoplanet.filter(list => {
        return list.habitability === false;
      });
      res.json(resultFalse);
    });
  },
  create: function(req, res) {
    Exoplanet.create(req.body).then(exoplanet => res.json(exoplanet));
  },
  update: function(req, res) {
    Exoplanet.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    }).then(exoplanet => res.json(exoplanet));
  },
  destroy: function(req, res) {
    Exoplanet.findByIdAndRemove(req.params.id).then(exoplanet =>
      res.send(exoplanet)
    );
  }
};
