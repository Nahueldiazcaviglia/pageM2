const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
    title: String,
    year: String,
    director: String,
    duration: String,
    genre: String,
    rate: String,
    poster: String,
    description: String,
});

const Movies = mongoose.model("Movies", moviesSchema);

module.exports = Movies;