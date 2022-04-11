const Plant = require("../models/plantMod");


const plant_display = (req, res) => { 
    Plant.find()
        .then(foundPlants => res.json(foundPlants))
}

const plant_create = (req, res) => {
    const plant = new Plant(req.body);
    console.log(plant);
    plant.save()
        .then(plant => {
            res.json("Plant added successfully")
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
    
}

module.exports = {
    plant_create,
    plant_display
}