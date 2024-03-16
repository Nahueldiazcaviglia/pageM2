const axios = require("axios");
class Pelicula {
    constructor(title, year, director, duration, genre, rate, poster, description) {
      this.title = title;
      this.year = year;
      this.director = director;
      this.duration = duration;
      this.genre = genre;
      this.rate = rate;
      this.poster = poster;
      this.description = description;
    } 
    static crearPelicula(){
      const title = document.getElementById("title").value;
      const year = document.getElementById("year").value;
      const director = document.getElementById("director").value;
      const duration = document.getElementById("duration").value;
      const genre = document.getElementById("genre").value;
      const rate = document.getElementById("rate").value;
      const poster = document.getElementById("poster").value;
      const description = document.getElementById("description").value;

      return new Pelicula(title, year, director, duration, genre, rate, poster, description)
    }

  }

function guardarPelicula() {
    const pelicula = Pelicula.crearPelicula();
    if (!pelicula.title || !pelicula.year || !pelicula.director || !pelicula.genre) {
      console.log("Faltan datos obligatorios. La película no se guardará.");
      return; 
  }

    axios.post("http://localhost:3000/movies", pelicula).then(response=>{
      console.log("Datos enviados", response.data);
}).catch(console.log("No se enviaron los datos"));
}

function limpiarFormulario() {
    document.getElementById("formularioPelicula").reset();
}


const botonLimpiar = document.getElementById("botonLimpiar"); 
botonLimpiar?.addEventListener("click", limpiarFormulario);

module.exports = guardarPelicula;

