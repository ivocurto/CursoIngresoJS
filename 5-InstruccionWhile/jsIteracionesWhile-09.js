/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
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
}//FIN DE LA FUNCIÓN