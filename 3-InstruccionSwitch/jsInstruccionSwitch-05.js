function mostrar()
{
	//1 Definición de variables
	let hora;
	let mensaje;
	
	//2 Asignación de valores a las variables
	hora = document.getElementById("txtIdHora").value;

	//3 evaluación con switch
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

	alert(mensaje)
}