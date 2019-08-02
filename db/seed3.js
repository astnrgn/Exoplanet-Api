const Exoplanet = require("./models/Exoplanet");
const Star = require("./models/Star");

Exoplanet.find({}).then(exoplanet => {
  Star.find({}).then(star => {
    let starTemps = star.map(list => {
      return list.effTemp;
    });

    let starRadii = star.map(list => {
      return list.radius;
    });

    let radii = [];
    for (let i = 0; i < starTemps.length; i++) {
      radii.push([starRadii[i] ** 2 * (starTemps[i] / 5780) ** 4] ** (1 / 2));
    }

    let radiiInner = [];
    for (let i = 0; i < starRadii.length; i++) {
      radiiInner.push(0.75 * radii[i]);
    }

    let radiiOuter = [];
    for (let i = 0; i < starRadii.length; i++) {
      radiiOuter.push(1.77 * radii[i]);
    }

    for (let i = 0; i < exoplanet.length; i++) {
      if (
        exoplanet[i].semiMajorAxis >= radiiInner[i] &&
        exoplanet[i].semiMajorAxis <= radiiOuter[i]
      ) {
        exoplanet[i].habitability = true;
        exoplanet[i].save();
      }
    }
  });
});
