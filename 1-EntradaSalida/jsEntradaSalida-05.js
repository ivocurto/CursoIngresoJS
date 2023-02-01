/* Ivo Curto Eivers
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//1 declaro variables
	let nombre;
	let edad;
	let mensaje

	//2 pido los datos (entrada)
	nombre = document.getElementById("txtIdNombre").value;
	edad = document.getElementById("txtIdEdad").value ;

	//3 Armo el mensaje
	mensaje = "Usted se llama "+nombre+" y tiene "+edad+" años"

	//4 muestro los datos (salida)
	alert(mensaje);
}