/* Enunciado:
al presionar el botón mostrar 10 repeticiones con números , desde el 10 al 1.
 */
function mostrar()
{
	let numero;

	numero = 11;

	for (let i = 0; i < 10; i++) {
		numero = numero - 1;
		document.write(numero + "<br>");
	}
}