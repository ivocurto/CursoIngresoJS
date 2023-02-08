function mostrar()
{
	//se definen las variables
	let notaRandom;
	let mensaje;

	//se crea la nota aleatoria 
	notaRandom = Math.round((Math.random() * 10));

	//se crea la condicion if
	if (notaRandom >= 9) {
		mensaje = "EXCELENTE";
	}else if (notaRandom >= 4) {
		mensaje = "APROBÓ";
	}else {
		mensaje = "Vamos, la próxima se puede";
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN