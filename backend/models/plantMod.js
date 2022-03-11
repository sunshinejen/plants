const mongoose = require("mongoose");

const plantsSchema = {
    title: String,
    content: String
}

const Plant = mongoose.model("Plant", plantsSchema);

// mongoose.connection.close()

module.exports = Plant;