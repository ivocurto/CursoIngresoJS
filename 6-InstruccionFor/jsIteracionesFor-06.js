/* Enunciado:
al presionar el botón pedir un número.
mostrar los numeros pares desde el 1 al número ingresado,
 y mostrar la cantidad de numeros pares encontrados. */
function mostrar()
{
	let numeroIngresado;
	let numerosPares;
	let cantidadNumerosPares;

	numeroIngresado = 0;
	numerosPares = 0;
	cantidadNumerosPares = 0;

	numeroIngresado = parseInt(prompt("Ingrese un número"));
	while(isNaN(numeroIngresado)) {
		numeroIngresado = parseInt(prompt("Error. Ingrese un número válido."));
	}
	for (let i = 1; i <= numeroIngresado; i++) {
		if (i%2 == 0) {
			numerosPares = i;
			cantidadNumerosPares = cantidadNumerosPares + 1;
			document.write("Número par: " + numerosPares + "<br>");
		}
	}

	document.write("Cantidad de números pares: " + cantidadNumerosPares + "<br>");
}//FIN DE LA FUNCIÓN