/* Ivo Curto Eivers
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//1 definición de variables
	let importeIngresado;
	let resultado;

	//2 se recupera el id.value, se convierte de cadena de texto a número y lo guardamos en la variable importeIngresado
	importeIngresado = parseInt(document.getElementById("txtIdImporte").value);

	//3 se hace el descuento y se guarda en la variable resultado
	resultado = importeIngresado * 0.75;

	//4 se muestra el número guardado en la variable resultado en el valor del cuadro de texto "txtIdResultado"
	document.getElementById("txtIdResultado").value = resultado;
}
