function mostrar()
{
	//1 Definición de variables
	let mesDelAnio;
	let mensaje;
	
	//2 Asignación de valores a las variables
	mesDelAnio = document.getElementById("txtIdMes").value;

	//3 evaluación con switch
		switch(mesDelAnio){
			case "Enero":
			case "Febrero":
			case "Marzo":
			case "Abril":
			case "Mayo":
			case "Junio":
				mensaje = "Falta para el invierno.";
				break;
			case "Julio":
			case "Agosto":
				mensaje = "Abrigate que hace frio.";
				break;
			default: 
				mensaje = "Ya pasamos el frio, ahora calor!!!.";
	}

	//4 respuesta
	alert(mensaje);

}