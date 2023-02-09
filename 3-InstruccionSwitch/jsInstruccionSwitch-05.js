function mostrar()
{
	//1 Definición de variables
	let hora;
	let mensaje;
	
	//2 Asignación de valores a las variables
	hora = document.getElementById("txtIdHora").value;

	//3 evaluación con if y switch
	if (hora >= 0 && hora <= 24){
		switch(hora){
			case "7":
			case "8":
			case "9":
			case "10":
			case "11":
				mensaje = "Es de mañana";
				break;
			default: 
				mensaje = "No es de mañana";
	}
	} else {
		mensaje = "La hora no existe";
		}

	//4 respuesta
	alert(mensaje);
}