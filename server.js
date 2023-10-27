const express = require("express");

const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const airplaneModeController = require('./AirplaneModeController'); 
const connectionandsharing = require('./ConnectionAndSharingController');
const soundAndVibrationRoutes = require('./soundAndVibrationRoutes'); 
const displayBrightnessRoutes = require('./displayBrightnessRoutes');
const locationModeRoutes = require('./locationModeRoutes');

const dotenv = require("dotenv");

dotenv.config(); 


mongoose.connect(process.env.URI ,)
.then(()=>{
    console.log(("connected succesfully"));

    app.listen(process.env.PORT ||8000 , (err)=>{
        if(err) console.log(err);
        console.log("succesfully running at ", process.env.PORT)

    })
    
})
.catch((error)=>{
    console.log("error", error);
});

app.get("/", (req,res)=>{
res.send("api running hello arjun on your  server how are you");
})



app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));


app.use('/', airplaneModeController);

app.use('/', connectionandsharing);
app.use('/', soundAndVibrationRoutes);
app.use('/', displayBrightnessRoutes);
app.use('/', locationModeRoutes );

