//Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
function mostrar()
{
	//se definen variables necesarias
	let edad;
	let estadoCivil;

	//se asigna el valor ingresado por id.value a la variable edad. Se parsea la edad.
	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;

	//se crea la condicional if
	if (edad < 18 && estadoCivil != "Soltero") {
		alert("Es muy pequeño para NO ser soltero.");
	}
}