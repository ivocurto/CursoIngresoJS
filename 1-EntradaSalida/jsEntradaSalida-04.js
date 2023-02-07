/* Ivo Curto Eivers
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//1 declaro mis variables
	let datoIngresado;
	//2 pido el dato (entrada)
	datoIngresado = prompt("Ingresar dato");
	//3 busco como acceder al dato y a su contenido y le asigno el datoIngresado (sailda)
	document.getElementById("txtIdNombre").value = datoIngresado;
}