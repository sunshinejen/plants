const express = require("express");
const router = express.Router();
const Plant = require("../models/plantMod");

//
router.route("/addplant").post((req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const newPlant = new Plant({
        title,
        content
    });
    newPlant.save();
    var msg = "title: " + title + " content:" + content;
    res.send(msg);
})



module.exports = router;