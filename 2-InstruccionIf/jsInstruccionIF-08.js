//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA, pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
function mostrar()
{
	//se definen las variables
	let edad;
	let estadoCivil;
	let mensaje;

	//se asignan los valores ingresados por id.value a las variables. Se parsea edad.
	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;
	
	//se crea el condicional if
	if (edad >= 18 && estadoCivil == "Soltero") {
		mensaje = "Es soltero y no es menor."
		alert(mensaje);
	}
}