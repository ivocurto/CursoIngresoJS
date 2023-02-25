/* Enunciado:
al presionar el botón pedir un número. 
mostrar los numeros divisores desde el 1 al número ingresado,
 y mostrar la cantidad de numeros divisores encontrados. */
function mostrar()
{
	let numeroIngresado;
	let divisores;
	let cantidadDeDivisores;

	divisores = 0;
	cantidadDeDivisores = 0;

	numeroIngresado = parseInt(prompt("Ingrese un número"));
	while(isNaN(numeroIngresado)) {
		numeroIngresado = parseInt(prompt("Error. Ingrese un número válido."));
	}
	for (let i = 1; i <= numeroIngresado; i++) {
		if (numeroIngresado%i == 0) {
			divisores = i;
			cantidadDeDivisores = cantidadDeDivisores + 1;
			document.write("Divisor: " + divisores + "<br>");
		}
	}

	document.write("Cantidad de divisores: " + cantidadDeDivisores + "<br>");


}//FIN DE LA FUNCIÓN