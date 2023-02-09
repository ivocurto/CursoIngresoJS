function mostrar()
{
	//1 Definición de variables
	let mesDelAnio;
	let mensaje;
	
	//2 Asignación de valores a las variables
	mesDelAnio = document.getElementById("txtIdMes").value;

	//3 evaluación con switch
		switch(mesDelAnio){
			case "Febrero":
				mensaje = "Este mes tiene 28 días.";
				break;
			case "Abril":
			case "Junio":
			case "Septiembre":
			case "Noviembre":
				mensaje = "Este mes tiene 30 días.";
				break;
			default: 
				mensaje = "Este mes tiene 31 días.";
	}

	//4 respuesta
	alert(mensaje);
}