const mongoose = require("mongoose");

const plantsSchema = {
    title: String,
    title: String
}

const Plant = mongoose.model("Plant", plantsSchema);

module.exports = Plant;