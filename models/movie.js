const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    year : {
        type : String,
        required : true
    }
});


const Movie = mongoose.model('Movie',movieSchema);


module.exports = Movie;



