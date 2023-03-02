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
/* function mostrar()
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
} */

/////////////////////parcial 1 2020 bis////////////////
/* Parcial 1 2020 bis: /"Super chino" Se pide el ingreso de mercadería de un supermercado , 
hasta que el usuario quiera,se pide :
tipo(limpieza , comestible , otros)solo estos tres tipos
nombre del producto
importe del producto (no mayor a 1000 pesos)
procedencia(importado, nacional, elaborado)
Peso (no mayor a 30 kilos)

informar SOLO SI HAY
a) el NOMBRE del mas pesado de los comestibles
b) el NOMBRE del mas caro de todos los productos
c) el NOMBRE del mas barato de los elaborados
d) el tipo de mercadería que mas aparece
e) el porcentaje de productos elaborados por sobre el total
f) el promedio de pesos por cada tipo ingresado/ */

function mostrar()
{
	let tipoIngresado;
	let productoIngresado;
	let precioIngresado;
	let procedenciaIngresada;
	let pesoIngresado;
	let respuesta;
	
	let banderaMasPesadoComestible;
	let nombreMasPesadoComestible;
	let pesoMasPesadoComestible;

	let banderaPrecioMasAlto;
	let precioMasAlto;
	let nombrePrecioMasAlto;

	let banderaMasBaratoElaborado;
	let nombreMasBaratoElaborado;
	let precioMasBaratoElaborado;

	let contadorComestible;
	let contadorLimpieza;
	let contadorOtros;
	let mercaderiaMasVendida;

	let contadorTotalProcedencia;
	let contadorElaboradosProcedencia;
	let porcentajeProductosElaborados;
	let banderaElaboradosProcedencia;


	let acumuladorPrecioLimpieza;
	let acumuladorPrecioComestible;
	let acumuladorPrecioOtros;
	let promedioPesoLimpieza;
	let promedioPesoComestible;
	let promedioPesoOtros;

	respuesta = "si"
	banderaMasPesadoComestible = true;
	pesoMasPesadoComestible = 0;
	banderaPrecioMasAlto = true;
	precioMasAlto = 0;
	banderaMasBaratoElaborado = true;
	contadorComestible = 0;
	contadorLimpieza = 0;
	contadorOtros = 0;
	porcentajeProductosElaborados = 0;
	contadorTotalProcedencia = 0;
	banderaElaboradosProcedencia = true;
	

	while (respuesta == "si") {
		tipoIngresado = prompt('Ingrese que tipo de producto desea ("limpieza", "comestible" u "otros").');
		while (tipoIngresado != "limpieza" && tipoIngresado != "comestible" && tipoIngresado != "otros") {
			tipoIngresado = prompt('Error. Ingrese que tipo de producto desea ("limpieza", "comestible" u "otros").');
		}

		productoIngresado = prompt('Ingrese que producto en específico quiere agregar.');
		while (!isNaN(productoIngresado)) {
			productoIngresado = prompt('Error. Ingrese un producto válido, no utilice números.');
		}

		precioIngresado = parseFloat(prompt('Ingrese el precio del producto. Precio máximo de $1000'));
		while (isNaN(precioIngresado || precioIngresado < 1 || precioIngresado > 1000)) {
			precioIngresado = parseFloat('Error. Ingrese un precio válido. Precio máximo de $1000');
		}

		procedenciaIngresada = prompt('Ingrese la procedencia del producto ("importado", "nacional" o "elaborado")');
		while (procedenciaIngresada != "importado" && procedenciaIngresada != "nacional" && procedenciaIngresada != "elaborado") {
			procedenciaIngresada = prompt('Error. Ingrese una procedencia válida: ("importado", "nacional" o "elaborado")');
		}

		pesoIngresado = parseFloat(prompt('Ingrese el peso del producto en kilogramos. Peso máximo de 30kg.'));
		while (isNaN(pesoIngresado) || pesoIngresado < 0 || pesoIngresado > 30) {
			pesoIngresado = parseFloat(prompt('Error. Ingrese un peso válido en kilogramos. Peso máximo de 30kg.'));
		}

		//a) el NOMBRE del mas pesado de los comestibles
		if (tipoIngresado == "comestibles") {
			if (banderaMasPesadoComestible == true) {
				nombreMasPesadoComestible = productoIngresado;
				pesoMasPesadoComestible = pesoIngresado;
				banderaMasPesadoComestible = false;
			} else if (pesoMasPesadoComestible < pesoIngresado) {
				nombreMasPesadoComestible = productoIngresado;
				pesoMasPesadoComestible = pesoIngresado;
			}
		}

		//b) el NOMBRE del mas caro de todos los productos
		if (banderaPrecioMasAlto == true) {
			precioMasAlto = precioIngresado;
			nombrePrecioMasAlto = productoIngresado;
			banderaPrecioMasAlto = false;
		} else if (precioMasAlto < precioIngresado) {
			precioMasAlto = precioIngresado;
			nombrePrecioMasAlto = productoIngresado;
		}

		//c) el NOMBRE del mas barato de los elaborados
		if (procedenciaIngresada == "elaborado") {
			if (banderaMasBaratoElaborado == true) {
				nombreMasBaratoElaborado = productoIngresado;
				precioMasBaratoElaborado = precioIngresado;
				banderaMasBaratoElaborado = false;
			} else if (precioMasBaratoElaborado < precioIngresado) {
				nombreMasBaratoElaborado = productoIngresado;
				precioMasBaratoElaborado = precioIngresado;
			}
		}

		//d)el tipo de mercadería que mas aparece
		//f) el promedio de pesos por cada tipo ingresado
		switch (tipoIngresado) {
			case "comestible":
				contadorComestible = contadorComestible + 1;
				acumuladorPrecioComestible = acumuladorPrecioComestible + pesoIngresado;
				break;
			case "limpieza":
				contadorLimpieza = contadorLimpieza + 1;
				acumuladorPrecioLimpieza = acumuladorPrecioLimpieza + pesoIngresado;
				break;
			case "otros":
				contadorOtros = contadorOtros + 1;
				acumuladorPrecioOtros = acumuladorPrecioOtros + 1;
				break;
		}

		//e) el porcentaje de productos elaborados por sobre el total
		switch (procedenciaIngresada) {
			case "importado":
			case "nacional":
				contadorTotalProcedencia = contadorTotalProcedencia + 1;
				break;
			case "elaborado":
				contadorTotalProcedencia = contadorTotalProcedencia + 1;
				contadorElaboradosProcedencia = contadorElaboradosProcedencia + 1;
				banderaElaboradosProcedencia = false;
				break;
		}

		respuesta = prompt('¿Desea seguir ingresando productos? "si/no"');
	}

			//a) se muestra el NOMBRE del mas pesado de los comestibles SOLO SI HAY
			if (banderaMasPesadoComestible == false) {
				document.write('El producto mas pesado comestible es ' + nombreMasPesadoComestible + '<br/>');
			}

			//b) se muestra el NOMBRE del mas caro de todos los productos
			document.write('El producto mas caro de todos es ' + nombrePrecioMasAlto + '<br/>');

			//c) se muestra el NOMBRE del mas barato de los elaborados SOLO SI HAY
			if (banderaMasBaratoElaborado == false) {
				document.write('El producto mas barato elaborado es ' + nombreMasBaratoElaborado + '<br/>');
			}

			//d) se  muestrael tipo de mercadería que mas aparece
			if (contadorComestible > contadorLimpieza && contadorComestible > contadorOtros) {
				mercaderiaMasVendida = "comestible";
			} else if (contadorLimpieza > contadorOtros) {
				mercaderiaMasVendida = "limpieza";
			} else {
				mercaderiaMasVendida = "otros";
			}

			document.write('El tipo que mas aparece es ' + mercaderiaMasVendida + '<br/>');

			//e) el porcentaje de productos elaborados por sobre el total
			porcentajeProductosElaborados = contadorTotalProcedencia * contadorElaboradosProcedencia /100;
			if (banderaElaboradosProcedencia == false) {
				document.write('El porcentaje de productos elaborados por sobre el total es de ' + porcentajeProductosElaborados + '%<br/>');
			}

			//f) el promedio de pesos por cada tipo ingresado
			promedioPesoLimpieza = acumuladorPrecioLimpieza / contadorLimpieza;
			promedioPesoComestible = acumuladorPrecioComestible / contadorComestible;
			promedioPesoOtros = acumuladorPrecioOtros / contadorOtros;

			document.write('El promedio de pesos de limpieza es de ' + promedioPesoLimpieza);
			document.write('El promedio de pesos de comestibles es de ' + promedioPesoComestible);
			document.write('El promedio de pesos de otros es de ' + promedioPesoOtros);
}