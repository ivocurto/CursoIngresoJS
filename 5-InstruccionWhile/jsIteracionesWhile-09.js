/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
/* function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables
	banderaDelPrimero = true;
	respuesta ='si';

	while(respuesta == "si") {
		numeroIngresado = parseInt(prompt("Ingrese un número"));

		while(isNaN(numeroIngresado)) {
			numeroIngresado = parseInt(prompt("Error. Ingrese un número válido."));
		}
		if (banderaDelPrimero == true) {
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false;
		} else if (numeroIngresado > numeroMaximo) {
			numeroMaximo = numeroIngresado;
		} else if (numeroIngresado < numeroMinimo) {
			numeroMinimo = numeroIngresado;
		}
		respuesta = prompt("¿Desea continuar? si/no");
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;
} *///FIN DE LA FUNCIÓN

/////////////////////9 bis//////////////////////
/* While 9 bis: Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
El menor de los pares y el mayor de los negativos ...(solo si hay)
 */

function mostrar()
{	// declarar variables
	let banderaDelPrimero;
	let banderaDelPar;
	let banderaNegativo;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let parMaximo;
	let mayorNegativo;
	let respuesta;
	let mensaje;
	//iniciar variables
	banderaDelPrimero = true;
	banderaDelPar = true;
	banderaNegativo = true;
	respuesta ='si';
	mayorNegativo = 0;
	mayorPar = 0;

	while(respuesta == "si") {
		numeroIngresado = parseInt(prompt("Ingrese un número"));
		while(isNaN(numeroIngresado)) {
			numeroIngresado = parseInt(prompt("Error. Ingrese un número válido."));
		}

		if (banderaDelPrimero == true) {
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false;
		} else if (numeroIngresado > numeroMaximo) {
			numeroMaximo = numeroIngresado;
		} else if (numeroIngresado < numeroMinimo) {
			numeroMinimo = numeroIngresado;
		}

		if (numeroIngresado%2 == 0) {
			if (banderaDelPar == true || parMaximo < numeroIngresado) {
				parMaximo = numeroIngresado;
				banderaDelPar = false;
			}
		}

		if (numeroIngresado < 0) {
			if (banderaNegativo == true || mayorNegativo < numeroIngresado) {
				mayorNegativo = numeroIngresado;
				banderaNegativo = false;
			}
		}
		respuesta = prompt("¿Desea continuar? si/no");
	}//fin del while

	alert("El mayor número negativo es " + mayorNegativo);
	alert("El mayor número par es " + mayorPar);
	
	document.getElementById("txtIdMaximo").value = "El número máximo es " + numeroMaximo;
	document.getElementById("txtIdMinimo").value = "El número mínimo es " + numeroMinimo;
}