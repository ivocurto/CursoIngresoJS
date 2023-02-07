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
	else {
		mensaje = "Es menor de edad";
	}
	alert(mensaje);

}//FIN DE LA FUNCIÓN