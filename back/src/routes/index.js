const{Router} = require("express");
const moviesController = require("../controllers/getMoviesController");


const routes = Router();

routes.get("/movies", moviesController.getMovies);

routes.post("/movies", moviesController.addMovies);


module.exports = routes;