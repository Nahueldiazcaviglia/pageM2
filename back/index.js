const app = require("./src/server");
const dbCon = require("./src/config/dbCon")
//metodo de escucha del servidor
//escucha el servidor y cuando conecta nos retorna la ejecucion

dbCon().then( res =>{
        app.listen(3000, ()=> {
        console.log("Servidor escuchando en el puerto 3000");
    

})
    }
).catch(err =>{
    console.log("Error al conectar a MongoDB")
})

