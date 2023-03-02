/* Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total */
/* function mostrar()
{
	let productoIngresado;
	let precioIngresado;
	let cantidadIngresada;
	let marcaIngresada;
	let fabricanteIngresado;
	let banderaJabon;
	let fabricanteJabon;
	let cantidadJabon;
	let precioJabonMasBarato;
	let banderaMayorCantidad;
	let promedioMayorCantidad;
	let mayorCantidad;
	let acumuladorPrecioMayorCantidad;
	let contadorMarcasMayorCantidad;
	let cantidadDeBarbijos;

	banderaJabon = true;
	banderaMayorCantidad = true;
	acumuladorPrecioMayorCantidad = 0;
	contadorMarcasMayorCantidad = 0;
	cantidadDeBarbijos = 0;

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

		//a) Del más caro de los jabones, la cantidad de unidades y el fabricante
		if (productoIngresado == "jabón"){
			if (banderaJabon == true) {
				cantidadJabon = cantidadIngresada;
				fabricanteJabon = fabricanteIngresado;
				precioJabonMasBarato = precioIngresado;
				banderaJabon = false;
			} else if (precioIngresado < precioJabonMasBarato) {
				cantidadJabon = cantidadIngresada;
				fabricanteJabon = fabricanteIngresado;
				precioJabonMasBarato = precioIngresado;
			}
		}

		//b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
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

		//c) Cuántas unidades de Barbijos se compraron en total
		if (productoIngresado == "barbijo") {
			cantidadDeBarbijos = cantidadDeBarbijos + cantidadIngresada;
		}
	}

	promedioMayorCantidad = acumuladorPrecioMayorCantidad / contadorMarcasMayorCantidad;

	document.write("El jabón mas barato es el del fabricante " + fabricanteJabon + " y la cantidad del mismo es de " + cantidadJabon + "<br>");
	document.write("El promedio por compra del tipo con más unidades es de $" + promedioMayorCantidad + "<br>");
	document.write("En total hay " + cantidadDeBarbijos + " barbijos<br>");
} */

/* Recu 2020 1 bis: "Jugando al Doctor" 
De 7 personas que ingresan al hospital se deben tomar y validar los siguientes datos:
nombre, altura, peso y sexo.
a)Informar la cantidad de personas de sexo femenino. 
b)La altura promedio en total de pacientes.
c)El nombre del hombre con menos peso(si lo hay).
d)De la persona no binaria, el más flaco. 
Pedir datos por prompt y mostrar por document.write o console.log
 */ 

function mostrar () {
	let i;
	let nombreIngresado;
	let alturaIngresada;
	let pesoIngresado;
	let sexoIngresado;
	let contadorMujeres = 0;
	let banderaHombres = true;
	let pesoHombreMasLiviano;
	let nombreHombreMasLiviano;
	let banderaNoBinario = true;
	let pesoNoBinarioMasFlaco;
	let nombreNoBinarioMasFlaco;
	let alturaPromedio;
	let acumuladorAltura = 0;

	for (i = 0; i < 7; i++) {
		nombreIngresado = prompt('Ingresar nombre');
		while (!isNaN(nombreIngresado)) {
			nombreIngresado = prompt('Error. Ingresar nombre válido');
		}

		alturaIngresada = parseInt(prompt('Ingresar altura en cm'));
		while (isNaN(alturaIngresada) || alturaIngresada < 15 || alturaIngresada > 250) {
			alturaIngresada = parseInt(prompt('Ingrese una altura válida en cm: (15 o más, no use comas)'));
		}

		pesoIngresado = parseInt(prompt('Ingresar peso en kg'));
		while (isNaN(pesoIngresado) || pesoIngresado < 3 || pesoIngresado > 650) {
			pesoIngresado = parseInt(prompt('Ingrese un peso válido: (3kg o más)'));
		}

		sexoIngresado = prompt('Ingresar sexo: femenino / masculino / nobinario)');
		while (sexoIngresado != "femenino" && sexoIngresado != "masculino" && sexoIngresado != "nobinario") {
			sexoIngresado = prompt('Error. Ingresar un sexo válido: femenino / masculino / nobinario)');
		}

		switch (sexoIngresado) {
			case "femenino":
				contadorMujeres = contadorMujeres + 1;
				break;
			case "masculino":
				if (banderaHombres == true || pesoHombreMasLiviano < pesoIngresado) {
					pesoHombreMasLiviano = pesoIngresado;
					nombreHombreMasLiviano = nombreIngresado;
					banderaHombres = false;
				}
				break;
			case "nobinario":
				if (banderaNoBinario == true || pesoNoBinarioMasFlaco < pesoIngresado) {
					pesoNoBinarioMasFlaco = pesoIngresado;
					nombreNoBinarioMasFlaco = nombreIngresado;
					banderabanderaNoBinarioHombres = false;
				}
				break;
		}

		acumuladorAltura = acumuladorAltura + alturaIngresada;
	
	}//termina el ciclo for

	alturaPromedio = acumuladorAltura / i;

	console.log("La cantidad de personas de sexo femenino es " + contadorMujeres);
	console.log("La altura promedio en total de pacientes es " + alturaPromedio);

	if (banderaHombres == false) {
		console.log("El nombre del hombre con menos peso es " + nombreHombreMasLiviano);
	} else {
		console.log("No se ingresaron pacientes masculinos");
	}

	if (banderaNoBinario == false) {
		console.log("La persona no binaria más flaca es " + nombreNoBinarioMasFlaco);
	} else {
		console.log("No se ingresaron pacientes no binarios");
	}
}//termina funcion mostrar