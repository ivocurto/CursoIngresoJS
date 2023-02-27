/* Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */
function mostrar()
{
	let nombreIngresado;
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let tempCorporalIngresada;
	let respuesta;
	let banderaMasTemp;
	let nombrePersonaConMasTemp;
	let mayorTemp;
	let contadorMayoresDeEdadViudos;
	let contadorDeHombresSolterosOViudos;
	let contadorTerceraEdadConTempAlta;
	let contadorDeHombresSolteros;
	let promedioEdadHombresSolteros;
	let edadHombresSolteros;

	respuesta = "si"
	banderaMasTemp = true;
	contadorMayoresDeEdadViudos = 0;
	contadorDeHombresSolterosOViudos = 0;
	contadorTerceraEdadConTempAlta = 0;
	contadorDeHombresSolteros = 0;
	edadHombresSolteros = 0;

	while (respuesta == "si") {
		nombreIngresado = prompt('Ingrese su nombre');
		while (!isNaN(nombreIngresado)) {
			nombreIngresado = prompt('Error. Ingrese un nombre válido.');
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

		//a) El nombre de la persona con mas temperatura.
		if (banderaMasTemp == true) {
			nombrePersonaConMasTemp = nombreIngresado;
			mayorTemp = tempCorporalIngresada;
			banderaMasTemp = false;
		} else if (mayorTemp < tempCorporalIngresada) {
			nombrePersonaConMasTemp = nombreIngresado;
			mayorTemp = tempCorporalIngresada;
		}

		//b) Cuantos mayores de edad estan viudos
		if (edadIngresada > 17 && estadoCivilIngresado == "viudo") {
			contadorMayoresDeEdadViudos = contadorMayoresDeEdadViudos + 1;
		}

		//c) La cantidad de hombres que hay solteros o viudos
		if (sexoIngresado == "m" && (estadoCivilIngresado == "viudo" || estadoCivilIngresado == "soltero")) {
			contadorDeHombresSolterosOViudos = contadorDeHombresSolterosOViudos + 1;
		}

		//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		if (edadIngresada > 60 && tempCorporalIngresada > 38) {
			contadorTerceraEdadConTempAlta = contadorTerceraEdadConTempAlta + 1;
		}

		//e) El promedio de edad entre los hombres solteros.
		if (estadoCivilIngresado == "soltero" && sexoIngresado == "m") {
			edadHombresSolteros = edadHombresSolteros + edadIngresada;
			contadorDeHombresSolteros = contadorDeHombresSolteros + 1;
		}

		respuesta = prompt("¿Desea seguir ingresando datos? 'si/no'");
	}

	promedioEdadHombresSolteros = edadHombresSolteros / contadorDeHombresSolteros;

	document.write("La persona con mayor temperatura es " + nombrePersonaConMasTemp +"<br>");
	document.write("Hay " + contadorMayoresDeEdadViudos + " personas mayores de edad que estan viudas<br>");
	document.write("Hay " + contadorDeHombresSolterosOViudos + " hombres que estan solteros o viudos<br>");
	document.write("Hay " + contadorTerceraEdadConTempAlta + " personas de tercera edad con una temperatura corporal mayor a 38°C<br>");
	document.write("El promedio de edad entre los hombres solteros es de " + promedioEdadHombresSolteros + " años<br>");
}
