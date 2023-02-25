/* Enunciado:
al presionar el botón pedir un número. 
Informar si el numero es PRIMO o no. */
function mostrar()
{
	let numeroIngresado;
	let primo;

	primo = "es primo"

	numeroIngresado = parseInt(prompt("Ingrese un número"));
	while(isNaN(numeroIngresado)) {
		numeroIngresado = parseInt(prompt("Error. Ingrese un número válido."));
	}
	for (let i = 2; i < numeroIngresado; i++) {
		if (numeroIngresado%i == 0) {
			primo = "no es primo";
			break;
		}
	}

	document.write(numeroIngresado + " " + primo);
}//FIN DE LA FUNCIÓN