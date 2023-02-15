/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let numeroIngresado
	let contador;
	let acumulador;
	let respuesta;
	let promedio;
	
	contador = 0;
	acumulador = 0;
	respuesta = 'si';

	while (respuesta == "si") {
		numeroIngresado = parseInt(prompt("Ingrese un número"));

		while (isNaN(numeroIngresado)){
			numeroIngresado = parseInt(prompt("Error. Debe ingresar un número valido"));
		}

		contador = contador + 1;
		acumulador = acumulador + numeroIngresado;

		respuesta = prompt("Desea ingresar otro número? si/no");
	}

	promedio = acumulador / contador;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;

}//FIN DE LA FUNCIÓN