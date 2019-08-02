const Exoplanet = require("./models/Exoplanet");
const Star = require("./models/Star");

Exoplanet.find({}).then(exoplanet => {
  Star.find({}).then(star => {
    let starList = star.map(list => {
      return list._id;
    });
    for (let i = 0; i < exoplanet.length; i++) {
      exoplanet[i].star = starList[i];
      exoplanet[i].save();
    }
  });
});

Star.find({}).then(star => {
  Exoplanet.find({}).then(exoplanet => {
    let exoplanetList = exoplanet.map(list => {
      return list._id;
    });
    for (let i = 0; i < star.length; i++) {
      star[i].exoplanet = exoplanetList[i];
      star[i].save();
    }
  });
});
