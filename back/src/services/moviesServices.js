const Movies = require("../models/Movie")

module.exports = {
    getMovies: async()=>{
        const movies = await Movies.find();
        return movies;
    }
}




// const User = require("../models/User");

// module.exports = {
//     getUsers: async()=>{
//         const users = await User.find();
//         return users;
//     },

//     createUser: async(name, email)=>{
//         users.push({name, email});
//         return { name, email};
//     },
// };