const express = require("express");
const router = express.Router();
const starController = require("../controllers/star");

router.get("/", starController.index);
router.get("/:id", starController.show);
router.get("/:search/:name", starController.show2);
router.post("/", starController.create);
router.put("/:id", starController.update);
router.delete("/:id", starController.destroy);

module.exports = router;
