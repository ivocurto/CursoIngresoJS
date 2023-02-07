function mostrar()
{
	//se definen variables necesarias
	let edad;

	//se asigna el valor ingresado por id.value a la variable edad
	edad = parseInt(document.getElementById("txtIdEdad").value);

	//se crea el condicional if
	if (edad < 13 || edad > 17){
		alert ("No es adolescente");
	}

}//FIN DE LA FUNCIÓN