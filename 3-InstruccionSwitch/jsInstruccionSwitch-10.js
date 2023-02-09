function mostrar()
{
	//1 definición de variables
	let estacionIngresada;
	let destinoIngresado;
	let mensaje;

	//2 asginación de valores a las variables
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	//3 evaluación con switch
	switch (estacionIngresada) {
		case "Invierno":
			switch (destinoIngresado) {
				case "Bariloche":
					mensaje = "Se viaja";
					break;
				default:
					mensaje = "No se viaja";
			}
			break;
		case "Verano":
			switch (destinoIngresado) {
				case "Mar del plata":
				case "Cataratas":
					mensaje = "Se viaja";
					break;
				default:
					mensaje = "No se viaja";
			}
			break;
		case "Otoño":
			switch (destinoIngresado) {
				default:
					mensaje = "Se viaja";
			}
			break;
		case "Primavera":
			switch (destinoIngresado) {
				case "Bariloche":
					mensaje = "No se viaja";
					break;
				default:
					mensaje = "Se viaja";
			}
			break;
	}

	//4 respuesta
	alert(mensaje);
}