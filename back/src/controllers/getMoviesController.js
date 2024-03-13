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
        // res.status(200).send("Peticion correcta, proximamente se estaran disponibles las peliculas")
    },
};




// getAllUser: async (req, res)=>{
//     try {
//         const users = await userService.getUsers();
//         res.status(200).json(users)
//     } catch (error) {
//         res.status(500).json({
//             error: "Error interno del servidor",
//         });

//     }

// },