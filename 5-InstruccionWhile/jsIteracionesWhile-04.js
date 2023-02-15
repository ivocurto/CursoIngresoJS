/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado;
	let mensaje;
	
	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 9."));
	
	while (isNaN(numeroIngresado) || numeroIngresado < -1 || numeroIngresado > 10) {
		numeroIngresado = parseInt(prompt("Error, ingrese un número entre 0 y 9."));
	}

	mensaje = "El número ingresado es " + numeroIngresado;
	document.getElementById("txtIdNumero").value = mensaje;
}//FIN DE LA FUNCIÓN