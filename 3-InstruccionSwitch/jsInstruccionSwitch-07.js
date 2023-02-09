function mostrar()
{
	//1 definición de variables
	let destino;
	let ptoCardinal;

	//4 asignacion del valor a las variables
	destino = document.getElementById("txtIdDestino").value;

	//3 busqueda con switch
	switch (destino) {
		case "Bariloche":
			ptoCardinal = "Oeste";
			break;
		case "Cataratas":
		case "Mar del plata":
			ptoCardinal = "Este";
			break;
		case "Ushuaia":
			ptoCardinal = "Sur";
			break;
	}

	//4 respuesta
	alert(ptoCardinal);
}