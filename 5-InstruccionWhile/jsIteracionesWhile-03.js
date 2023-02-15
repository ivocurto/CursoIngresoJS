/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;

	claveIngresada = prompt("Ingrese el número clave.");
	
	while (claveIngresada != "utn750") {
		claveIngresada = prompt("Error. Ingrese el número clave correcto.");
	}
	alert("Clave ingresada correctamente.");
}//FIN DE LA FUNCIÓN
