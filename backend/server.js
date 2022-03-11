const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });
const dbo = require("./db/conn");
const port = process.env.PORT;


app.use(cors());
app.use(express.json());

//connect to mongoose

//add note route
app.use("/", require("./routes/plantRoute"));
//app.use("/", require("./routes/noteRoute"));

app.get('/health', (req, res) => {
  res.send('healthy')
})

app.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
      if (err) console.error(err);
   
    });
    console.log(`Server is running: ${port}`);
  });

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/health', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })