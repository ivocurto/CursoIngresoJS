function mostrar()
{
	//se definen variables necesarias
	let numRandom;
	let mensaje;

	//se genera el número RANDOM entre 1 y 10 
	numRandom = Math.floor((Math.random() * 10));

	//se concatena el mensaje
	mensaje = "Numero random: " + numRandom;

	alert(mensaje);	

}//FIN DE LA FUNCIÓN