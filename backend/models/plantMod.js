const mongoose = require("mongoose");

const plantsSchema = {
    title: String,
    content: String,
    toxicK9: String,
    toxicFel: String
    
}

const Plant = mongoose.model("Plant", plantsSchema);

// mongoose.connection.close()

module.exports = Plant;