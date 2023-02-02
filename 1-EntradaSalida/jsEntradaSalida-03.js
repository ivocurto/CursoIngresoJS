/* Ivo Curto Eivers
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/

/* function mostrar() {
	let nombreIngresado;
	let mensaje;
	nombreIngresado = document.getElementById("txtIdNombre").value;
	mensaje = "Tu nombre es " + nombreIngresado;
	alert(mensaje);
} */

////////////////////////////////////////////////////////////////////////

/* Ejercicio 3.bis: Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto 
junto al precio aumentado en un 30%.  */

function mostrar() {
	//1 declaración de variables
	let descripcion;
	let precio;
	let precioAumentado;
	let mensaje;
	let aumento;

	//2 se define el porcentaje de aumento
	aumento = 30;

	//3 se pide la descripción por un prompt y se guarda en una variable
	descripcion = prompt("Escriba la descripción del producto");

	//4 se guarda el precio ingresado en la variable precio y se lo convierte de texto a número entero
	precio = parseInt(document.getElementById("txtIdNombre").value);

	//5 se aumenta el precio en un segun el % de aumento y se lo guarda en la variable precioAumentado
	precioAumentado = precio * aumento / 100;
	precioAumentado = precio + precioAumentado;

	//6 Se concatena el mensaje para el usuario
	mensaje = "Descripción del producto: \n" + descripcion + "\nPrecio del producto: \n$" + precioAumentado;

	//7 Se muestra el mensaje a través de un alert
	alert(mensaje);
}