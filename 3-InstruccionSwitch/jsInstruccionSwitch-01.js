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
			mensaje = "Que comiences bien el año!!!"
			break;
		case "Marzo":
			mensaje = "A clases!!!"
			break;
		case "Julio":
			mensaje = "se vienen las vacaciones!!!"
			break;
		case "Diciembre":
			mensaje = "Felices fiestas!!!"
			break;
		default: 
			mensaje = "Sos aburrido";
	}

	//4 respuesta
	alert(mensaje);

}