/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	let mensaje;

	sexoIngresado = prompt("Ingrese 'f' para femenino, 'm' para masculino.");

	while (sexoIngresado != "f" && sexoIngresado != "F" && sexoIngresado != "m" && sexoIngresado != "M") {
		sexoIngresado = prompt("Error. Ingrese 'f' para femenino, 'm' para masculino.");
	}

	if (sexoIngresado == "f" || sexoIngresado == "F") {
		sexoIngresado = "femenino";
	} else if (sexoIngresado == "m" || sexoIngresado == "M") {
		sexoIngresado = "masculino";
	}

	mensaje = "Su sexo es " + sexoIngresado;
	document.getElementById("txtIdSexo").value = mensaje;
}//FIN DE LA FUNCIÓN
