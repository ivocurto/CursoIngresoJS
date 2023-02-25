/* Enunciado:
al presionar el botón mostrar 10 repeticiones con números ASCENDENTE, desde el 1 al 10. */
function mostrar()
{
	let numero;

	numero = 0;

	for (let i = 0; i < 10; i++) {
		numero = numero + 1;
		document.write(numero + "<br>");
	}
}