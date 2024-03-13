const axios = require("axios");
const renderCards = require("./renderCards");
const showSidebar = require("./sideBar");
const closeSidebar = require("./sideBar")


 axios.get("http://localhost:3000/movies").then((data)=>{
    renderCards(data.data)
 }).catch(console.log("Hubo un ERROR"))




renderCards(data)


