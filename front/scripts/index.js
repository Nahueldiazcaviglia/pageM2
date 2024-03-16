const axios = require("axios");
const renderCards = require("./renderCards");
const guardarPelicula = require("./agregarPeliculas");
// const showSidebar = require("./sideBar");
// const closeSidebar = require("./sideBar");


axios.get("http://localhost:3000/movies")
    .then((response) => {
        const data = response.data;
        renderCards(data);
    })
    .catch((error) => {
        console.log("Hubo un ERROR", error);
    });

const botonGuardar = document.getElementById("botonGuardar");
botonGuardar?.addEventListener("click", guardarPelicula);
