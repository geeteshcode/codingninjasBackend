const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/movieDB');


const db = mongoose.connection

db.on('error', console.error.bind(console,'error in database')); // For Errors


db.once('open', function(){
    console.log("Successfully connected to database");
})


