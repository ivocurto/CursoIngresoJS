/* Enunciado:
al presionar el botón repetir el pedido de número hasta que ingresemos el 9. */
function mostrar()
{
	let repetir;

	for (i = 0; i < 1000; i++) {
		repetir = prompt("Ingrese un número. Para cortar ingrese '9'");
		while(isNaN(repetir)) {
			repetir = prompt("Error. Ingrese un número válido.");
		}
		if (repetir == "9") {
			break;
		}
	}
}//FIN DE LA FUNCIÓN