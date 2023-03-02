/* Enunciado:
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros ------
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas. */

/* function mostrar()
{
	let nombreIngresado;
	let nacionalidadIngresada;
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let tempCorporalIngresada;
	let respuesta;
	let banderaMasTemp;
	let nacionalidadPersonaConMasTemp;
	let mayorTemp;
	let contadorMayoresDeEdadSolteros;
	let contadorDeMujeresSolterasOViudas;
	let contadorTerceraEdadConTempAlta;
	let contadorDeHombresSolteros;
	let promedioEdadMujeresCasadas;
	let edadMujeresCasadas;

	respuesta = "si"
	banderaMasTemp = true;
	contadorMayoresDeEdadSolteros = 0;
	contadorDeMujeresSolterasOViudas = 0;
	contadorTerceraEdadConTempAlta = 0;
	contadorDeHombresSolteros = 0;
	edadMujeresCasadas = 0;

	while (respuesta == "si") {
		nombreIngresado = prompt('Ingrese su nombre');
		while (!isNaN(nombreIngresado)) {
			nombreIngresado = prompt('Error. Ingrese un nombre válido.');
		}

		nacionalidadIngresada = prompt('Ingrese su nacionalidad');
		while (!isNaN(nacionalidadIngresada)) {
			nacionalidadIngresada = prompt('Error. Ingrese una nacionalidad válida.');
		}

		edadIngresada = parseInt(prompt('Ingrese su edad'));
		while (isNaN(edadIngresada || edadIngresada < 0 || edadIngresada > 125)) {
			edadIngresada = prompt('Error. Ingrese una edad válida.');
		}

		sexoIngresado = prompt('Ingrese su sexo: "f" para femenino o "m" para masculino');
		while (sexoIngresado != "m" && sexoIngresado != "f") {
			sexoIngresado = prompt('Error. Ingrese un sexo válido: "f" para femenino o "m" para masculino');
		}

		estadoCivilIngresado = prompt('Ingrese su estado civil: "soltero", "casado" o "viudo"');
		while (estadoCivilIngresado != "soltero" && estadoCivilIngresado != "casado" && estadoCivilIngresado != "viudo") {
			estadoCivilIngresado = prompt('Error. Ingrese un estado civil válido: "soltero", "casado" o "viudo"');
		}

		tempCorporalIngresada = parseFloat(prompt('Ingrese su temperatura corporal'));
		while (isNaN(tempCorporalIngresada) || tempCorporalIngresada < 30 || tempCorporalIngresada > 40 ) {
			tempCorporalIngresada = parseFloat(prompt('Error. Ingrese una temperatura corporal válida.'));
		}

		//a) la Nacionalidad de la persona con mas temperatura.
		if (banderaMasTemp == true) {
			nacionalidadPersonaConMasTemp = nacionalidadIngresada;
			mayorTemp = tempCorporalIngresada;
			banderaMasTemp = false;
		} else if (mayorTemp < tempCorporalIngresada) {
			nacionalidadPersonaConMasTemp = nacionalidadIngresada;
			mayorTemp = tempCorporalIngresada;
		}

		//b) Cuantos mayores de edad( más de 17) estan solteros
		if (edadIngresada > 17 && estadoCivilIngresado == "solteros") {
			contadorMayoresDeEdadSolteros = contadorMayoresDeEdadSolteros + 1;
		}

		//c) La cantidad de Mujeres que hay solteras o viudas.
		if (sexoIngresado == "f" && (estadoCivilIngresado == "viudo" || estadoCivilIngresado == "soltero")) {
			contadorDeMujeresSolterasOViudas = contadorDeMujeresSolterasOViudas + 1;
		}

		//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		if (edadIngresada > 60 && tempCorporalIngresada > 38) {
			contadorTerceraEdadConTempAlta = contadorTerceraEdadConTempAlta + 1;
		}

		//e) El promedio de edad entre las mujeres casadas.
		if (estadoCivilIngresado == "casado" && sexoIngresado == "f") {
			edadMujeresCasadas = edadMujeresCasadas + edadIngresada;
			contadorDeHombresSolteros = contadorDeHombresSolteros + 1;
		}

		respuesta = prompt("¿Desea seguir ingresando datos? 'si/no'");
	}

	promedioEdadMujeresCasadas = edadMujeresCasadas / contadorDeHombresSolteros;

	document.write("La persona con mayor temperatura tiene nacionalidad " + nacionalidadPersonaConMasTemp +"<br>");
	document.write("Hay " + contadorMayoresDeEdadSolteros + " personas mayores de edad que estan solteras<br>");
	document.write("Hay " + contadorDeMujeresSolterasOViudas + " mujeres que estan solteras o viudas<br>");
	document.write("Hay " + contadorTerceraEdadConTempAlta + " personas de tercera edad con una temperatura corporal mayor a 38°C<br>");
	document.write("El promedio de edad entre las mujeres casadas es de " + promedioEdadMujeresCasadas + " años<br>");
} */

