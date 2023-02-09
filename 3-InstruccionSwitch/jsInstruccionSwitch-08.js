function mostrar()
{
	//1 definición de variables
	let destino;
	let clima;

	//4 asignacion del valor a las variables
	destino = document.getElementById("txtIdDestino").value;

	//3 busqueda con switch
	switch (destino) {
		case "Cataratas":
		case "Mar del plata":
			clima = "Calor";
			break;
		case "Bariloche":
		case "Ushuaia":
			clima = "Frío";
			break;
	}

	//4 respuesta
	alert(clima);
}