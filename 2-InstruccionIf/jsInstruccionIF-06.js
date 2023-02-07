function mostrar()
{
	//se definen variables necesarias
	let edad;
	let mensaje;

	//se asigna el valor ingresado por id.value a la variable edad
	edad = parseInt(document.getElementById("txtIdEdad").value);

	//se crea el condicional if
	if (edad >= 18){
		mensaje = "Es mayor de edad";
	}
	else if (edad >= 13 && edad <= 17){
		mensaje = "Es adolescente";
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN