const express = require("express");
const router = express.Router();
const exoplanetController = require("../controllers/exoplanet");

router.get("/", exoplanetController.index);
router.get("/:id", exoplanetController.show);
router.get("/:search/:name", exoplanetController.show2);
router.get("/:habitable/zone/true", exoplanetController.show3);
router.get("/:habitable/zone/false", exoplanetController.show4);
router.post("/", exoplanetController.create);
router.put("/:id", exoplanetController.update);
router.delete("/:id", exoplanetController.destroy);

module.exports = router;
