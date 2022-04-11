const express = require("express");
const router = express.Router();
const plantController = require('../controllers/plantController')

router.route("/greenhouse").get(plantController.plant_display)
router.route("/addplant").post(plantController.plant_create);

module.exports = router;