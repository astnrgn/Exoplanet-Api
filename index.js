const express = require("express");
const parser = require("body-parser");
const app = express();

app.use(parser.json());

app.use("/exoplanet", require("./routes/exoplanet"));
app.use("/star", require("./routes/star"));

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
