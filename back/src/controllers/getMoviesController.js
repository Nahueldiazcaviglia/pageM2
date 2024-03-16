const moviesServices = require("../services/moviesServices")
module.exports = {
    getMovies: async (req, res)=>{
        try {
            const movies = await moviesServices.getMovies();
            res.status(200).json(movies)
        } catch (error) {
            res.status(500).json({
                error: "Error al procesar las peliculas"
            })
        }
  
    },
    addMovies: async(req, res) => {
        const { title, year, director, duration, genre, rate, poster, description } = req.body;
        const newMovie = await moviesServices.addMovies(title, year, director, duration, genre, rate, poster, description);
        res.status(201).json(newMovie);
    }



};

