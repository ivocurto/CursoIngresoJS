/* Enunciado:
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
 */
function mostrar()
{
	let repeticiones;
	
	repeticiones = parseInt(prompt('Ingrese la cantidad de veces que quiere repetir el mensaje "Hola UTN FRA"'));
	
	for (let i = 0; i < repeticiones; i++) {
		alert("Hola UTN FRA");
	}
}//FIN DE LA FUNCIÓN