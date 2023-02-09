function mostrar()
{
	//1 definición de variables
	let estacionIngresada;
	let destino;
	let precio;
	let precioFinal;
	let porcentaje;
	let mensaje;

	//2 asignación de valores a las variables
	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
	precio = 15000;
	porcentaje = 0;

	//3 se evalua con switch
	switch (estacionIngresada) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					porcentaje = 20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = -10;
					break;
				case "Mar del plata":
					porcentaje = -20;
					break;
			}
			break;
		case "Verano":
			switch (destino) {
				case "Bariloche":
					porcentaje = -20;
					break;
				case "Cataratas":
				case "Cordoba":
					porcentaje = 10;
					break;
				case "Mar del plata":
					porcentaje = 20;
					break;
			}
			break;
		case "Otoño":
		case "Primavera":
			switch (destino) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					porcentaje = 10;
					break;
				case "Cordoba":
					porcentaje = 0;
					break;
			}
			break;
	}

	//4 se calcula el descuento o aumento y se da como resultado el precio final
	precioFinal = precio + (precio * porcentaje / 100);

	//5 respuesta
	mensaje = "El precio en " + estacionIngresada + " en " + destino + " es de $" + precioFinal; 
	alert(mensaje);
}