/* 	Enunciado:
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
 */
function mostrar()
{
	let productoIngresado;
	let precioIngresado;
	let cantidadIngresada;
	let marcaIngresada;
	let fabricanteIngresado;
	let banderaAlochol;
	let fabricanteAlcohol;
	let cantidadAlcohol;
	let precioAcoholMasBarato;
	let banderaMayorCantidad;
	let promedioMayorCantidad;
	let mayorCantidad;
	let acumuladorPrecioMayorCantidad;
	let contadorMarcasMayorCantidad;
	let cantidadDeJabones;

	banderaAlochol = true;
	banderaMayorCantidad = true;
	acumuladorPrecioMayorCantidad = 0;
	contadorMarcasMayorCantidad = 0;
	cantidadDeJabones = 0;

	for (let i = 0; i < 5 ; i++) {
		productoIngresado = prompt('Ingrese un producto: "barbijo" , "jabón" o "alcohol"');
		while (productoIngresado != "barbijo" && productoIngresado != "jabón" && productoIngresado != "alcohol") {
			productoIngresado = prompt('Error. Ingrese un producto: "barbijo" , "jabón" o "alcohol"');
		}

		precioIngresado = parseInt(prompt('Ingrese el precio del producto (entre $100 y $300).'));
		while (isNaN(precioIngresado) || precioIngresado < 100 || precioIngresado > 300) {
			precioIngresado = prompt('Error. Ingrese el precio del producto (entre $100 y $300).');
		}

		cantidadIngresada = parseInt(prompt('Ingrese la cantidad de unidades'));
		while (isNaN(cantidadIngresada) || cantidadIngresada < 1 || cantidadIngresada > 1000) {
			cantidadIngresada = prompt('Error. Ingrese la cantidad de unidades (mínimo 1, máximo 1000.');
		}

		marcaIngresada = prompt('Ingrese la marca del producto.');
		while (!isNaN(marcaIngresada)) {
			marcaIngresada = prompt('Error. Ingrese la marca del producto.');
		}
		
		fabricanteIngresado = prompt('Ingrese el fabricante del producto.');
		while (!isNaN(fabricanteIngresado)) {
			fabricanteIngresado = prompt('Error. Ingrese el fabricante del producto.');
		}

		if (productoIngresado == "alcohol"){
			if (banderaAlochol == true) {
				cantidadAlcohol = cantidadIngresada;
				fabricanteAlcohol = fabricanteIngresado;
				precioAcoholMasBarato = precioIngresado;
				banderaAlochol = false;
			} else if (precioIngresado < precioAcoholMasBarato) {
				cantidadAlcohol = cantidadIngresada;
				fabricanteAlcohol = fabricanteIngresado;
				precioAcoholMasBarato = precioIngresado;
			}
		}

		if (banderaMayorCantidad == true) {
			mayorCantidad = cantidadIngresada;
			acumuladorPrecioMayorCantidad = acumuladorPrecioMayorCantidad + precioIngresado;
			contadorMarcasMayorCantidad = contadorMarcasMayorCantidad + 1;
			banderaMayorCantidad = false;
		} else if (mayorCantidad < cantidadIngresada) {
			mayorCantidad = cantidadIngresada;
			acumuladorPrecioMayorCantidad = acumuladorPrecioMayorCantidad + precioIngresado;
			contadorMarcasMayorCantidad = contadorMarcasMayorCantidad + 1;
		}

		if (productoIngresado == "jabón") {
			cantidadDeJabones = cantidadDeJabones + cantidadIngresada;
		}
	}

	promedioMayorCantidad = acumuladorPrecioMayorCantidad / contadorMarcasMayorCantidad;

	document.write("El alcohol mas barato es el del fabricante " + fabricanteAlcohol + " y la cantidad del mismo es de " + cantidadAlcohol + "<br>");
	document.write("El promedio por compra del tipo con más unidades es de $" + promedioMayorCantidad + "<br>");
	document.write("En total hay " + cantidadDeJabones + " jabones<br>");
}