/* Ivo Curto Eivers
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

/* function mostrar()
{	
	//1 declaro variables
	let nombre;
	let edad;
	let mensaje

	//2 pido los datos (entrada)
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

	//3 Armo el mensaje
	mensaje = "Usted se llama "+nombre+" y tiene "+edad+" años"

	//4 muestro los datos (salida)
	alert(mensaje);
} */

////////////////////////////////////////////////////////////////////////

function mostrar() {
	//1 declaración de variables
	let nombre;
	let apellido;
	let edad;
	let mensaje;

	//2 se guarda el nombre y la edad ingresada en dos variables
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value;

	//3 se pide el apellido mediante prompt
	apellido = prompt("Escribe tu apellido por favor");

	//4 se concatena el mensaje
	mensaje = apellido + ", usted se llama " + nombre + " y tiene " + edad + " años."

	//5  se muestra el mensaje a través de un alert
	alert(mensaje);
}