const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.PORT|| 3001;
const plantRoutes = require('./routes/plantRoute')

app.use(cors());
app.use(express.json());


app.use("/", plantRoutes);


require("dotenv").config({ path: "./config.env" });
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Connect to DB. Yay.")
});
      
app.listen(port, function(err){
  if (err) console.log("Error in server setup")
  console.log(`Server is running: ${port}`);
})
