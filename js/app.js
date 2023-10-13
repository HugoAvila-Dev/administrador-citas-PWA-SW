if("serviceWorker" in navigator) { //Verificar si soporta el navegador
    navigator.serviceWorker.register('./sw.js') //Registrar el archivo sw.js
        .then( registrado => console.log('Se instaló correctamente... ', registrado))
        .catch( error => console.log('Falló la instalación... ', error))
} else {
    console.log("Service Workers no soportados");
}