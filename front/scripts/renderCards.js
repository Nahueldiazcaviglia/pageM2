const moviesContainer = document.getElementById("section");

const renderCards = (data) => {
    data.forEach((movie, index) => { 


        // Crear la carta
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("mx-1");
        card.classList.add("col-md");

        if(card >= 3){
            const span = document.createElement("div");
            span.classList.add("w-100");
            moviesContainer.appendChild(span)
        }
        // Crear la imagen de la carta 
        const poster = document.createElement("img");
        poster.classList.add("card-img-top");
        poster.src = movie.poster;
        card.appendChild(poster);

        const cuerpoCard = document.createElement("div");
        cuerpoCard.classList.add("card-body");
        card.appendChild(cuerpoCard);

        // Crear el título de la película en la carta
        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.innerHTML = movie.title;
        cuerpoCard.appendChild(title);

        // Crear el año de la película en la carta
        const year = document.createElement("p");
        year.classList.add("card-text");
        year.innerHTML = movie.year;
        cuerpoCard.appendChild(year);
        
       // Agregar la carta al contenedor        
       moviesContainer.appendChild(card);

       //creado el index, cada tres cartas crea un separador
       if ((index + 1) % 3 === 0 && index !== data.length - 1) {
        const separator = document.createElement("div");
        separator.classList.add("w-100", "mb-5");
        moviesContainer.appendChild(separator);
    }
});
};
module.exports = renderCards;