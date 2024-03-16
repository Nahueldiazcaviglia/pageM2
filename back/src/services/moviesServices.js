const Movies = require("../models/Movie")

module.exports = {
    getMovies: async()=>{
        const movies = await Movies.find();
        return movies;
    },
    addMovies: async(title, year, director, duration, genre, rate, poster, description) => {
        try {
            const newMovie = await Movies.create({ title, year, director, duration, genre, rate, poster, description });
            return newMovie;
        } catch (error) {
            console.error("Error al agregar la película:", error.message);
            throw error;
        }
    }



}


