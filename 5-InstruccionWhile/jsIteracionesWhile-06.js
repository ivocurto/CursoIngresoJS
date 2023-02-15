/* function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;

	contador = 0;
	acumulador = 0;

	numeroIngresado = parseInt(prompt("Ingrese un número"));

	while (contador < 4) {
		contador = contador + 1;
		acumulador = acumulador + numeroIngresado;
		numeroIngresado = parseInt(prompt("Ingrese otro número"));
	}

	promedio = acumulador / 5;

	mensaje = "La suma de todos tus números es " + acumulador;
	document.getElementById("txtIdSuma").value = mensaje;

	mensaje = "El promedio de todos tus números es " + promedio;
	document.getElementById("txtIdPromedio").value = mensaje;
}//FIN DE LA FUNCIÓN */

function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;

	contador = 0;
	acumulador = 0;

	for(let i=0; i<5; i++) {
		numeroIngresado = parseInt(prompt("Ingrese un número"));
		while(isNaN(numeroIngresado)) {
			prompt("Error. Ingrese un número válido.")
		}
		contador = contador + 1;
		acumulador = acumulador + numeroIngresado;
	}

	promedio = acumulador / contador;

	mensaje = "La suma de todos tus números es " + acumulador;
	document.getElementById("txtIdSuma").value = mensaje;

	mensaje = "El promedio de todos tus números es " + promedio;
	document.getElementById("txtIdPromedio").value = mensaje;
}//FIN DE LA FUNCIÓN