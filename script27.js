
window.onload = function() {
	// Numero de enlaces de la pagina

	var links = document.getElementsByTagName("a");
	console.log("Enlaces de la pagina--> "+links.length);

	// Direccion del penultimo enlace

	var enlace = links[links.length-2].href;
	console.log("El penultimo enlace apunta a --> "+enlace);
	  
	// Numero de enlaces que apuntan a http://prueba

	var contador = 0;
		for(var index=0; index<links.length; index++) {
			if(links[index].href == "http://prueba/") {
			contador++;
			}
		}
   	console.log("El Numero de enlaces que apuntan a http://prueba/ es--> "+contador);

   // Numero de enlaces del tercer párrafo

	var parrafos = document.getElementsByTagName("p");
	links = parrafos[2].getElementsByTagName("a");  
      console.log("El numero de enlaces del tercer párrafo es --> "+links.length);
    }