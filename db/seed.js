const Exoplanet = require("./models/Exoplanet");
const Star = require("./models/Star");
const jsonData = require("./spaceData.json");

let exoplanetData = jsonData.map(list => {
  let x = {
    name: list.pl_name,
    habitability: false,
    semiMajorAxis: list.pl_orbsmax,
    orbitalPeriod: list.pl_orbper,
    mass: list.pl_bmassj,
    radius: list.pl_radj,
    density: list.pl_dens
  };
  return x;
});

Exoplanet.remove({}).then(exoplanet => {
  Exoplanet.collection.insert(exoplanetData).then(exoplanet => {
    console.log(exoplanet);
  });
});

let starData = jsonData.map(list => {
  let x = {
    name: list.pl_hostname,
    mass: list.st_mass,
    effTemp: list.st_teff,
    radius: list.st_rad
  };
  return x;
});

Star.remove({}).then(star => {
  Star.collection.insert(starData).then(star => {
    console.log(star);
  });
});
