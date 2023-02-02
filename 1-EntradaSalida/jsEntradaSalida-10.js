/* Ivo Curto Eivers
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

/* function mostrarAumento()
{
	//1 definición de variables
	let importeIngresado;
	let resultado;
	let porcentaje;

	//2 asigno el porcentaje que quiero utilizar
	porcentaje = -25

	//3 se recupera el id.value, se convierte de cadena de texto a número y lo guardamos en la variable importeIngresado
	importeIngresado = parseInt(document.getElementById("txtIdImporte").value);

	//4 se hace el descuento y se guarda en la variable resultado
	resultado = importeIngresado * porcentaje / 100;
	resultado = importeIngresado + resultado;

	//5 se muestra el número guardado en la variable resultado en el valor del cuadro de texto "txtIdResultado"
	document.getElementById("txtIdResultado").value = resultado;
} */

////////////////////////////////////////////////////////////////////////

function mostrarAumento() {
	//1 delcaración de variables
	let importeIngresado;
	let descuento;
	let resultado;


	//2 se guarda el dato ingresado por el usuario en la variable importeIngresado y se parsea
	importeIngresado = parseInt(document.getElementById("txtIdImporte").value);
	
	//3 se le pide el descuento al usuario mediante un prompt y se guarda en la variable descuento y se lo convierte de texto a número entero
	descuento = parseInt(prompt("Ingrese el descuento deseado"));

	//4 se realiza el descuento en el importe ingresado por el ususario
	descuento = importeIngresado * descuento / 100;
	resultado = importeIngresado - descuento;

	//5 se muestra el resultado en el cuadro de texto "RESULTADO"
	document.getElementById("txtIdResultado").value = resultado;
}
