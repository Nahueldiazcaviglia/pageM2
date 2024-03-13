require("dotenv").config();

const mongoose = require("mongoose")
const dbCon = async ()=>{
    await mongoose.connect(
        "mongodb+srv://nahuefiaz90:JJEZeM9FOb27MtuJ@proyectoprueba.x6bfvwq.mongodb.net/movies?retryWrites=true&w=majority&appName=ProyectoPrueba"
    );

};
module.exports = dbCon;