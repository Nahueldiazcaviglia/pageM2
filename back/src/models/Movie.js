const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
    title: String,
    year: Number,
    director: String,
    duration: String,
    genere: Array,
    rate: Number,
    poster: String,
    description: String,
    


});

const Movies = mongoose.model("Movies", moviesSchema);

module.exports = Movies;