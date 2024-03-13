const{Router} = require("express");
const moviesController = require("../controllers/getMoviesController");


const routes = Router();

routes.use("/movies", moviesController.getMovies);


module.exports = routes;