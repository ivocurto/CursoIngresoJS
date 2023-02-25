/* Enunciado:
al presionar el botón repetir hasta que utilizamos 'BREAK'.
 */
function mostrar()
{
	let repetir;

	for (i = 0; i < 1000; i++) {
		repetir = prompt("Para cortar ingrese 'break'");
		if (repetir == "break") {
			break;
		}
	}
}//FIN DE LA FUNCIÓN