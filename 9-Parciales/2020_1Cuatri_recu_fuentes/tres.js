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

//////////////Recu Parcial 2020 3 bis
//Alumno: Ivo Curto Eivers

/* Recu 2020 3 bis: Vacaciones en Familia" 
Nos ingresan una cantidad indeterminada de estadías de vacaciones, 
validando los datos ingresados:
nombre del pasajero titular, 
destino( “Brasil”, “Caribe” o “Europa”), 
temporada(“alta”,”baja”,“media”),
cantidad de pasajeros que viajan.
Informar:
a)El destino más elegido.
b)El nombre del pasajero titular que lleva menos pasajeros.
c)El promedio de personas, que viajan en temporada alta.
d)El total de personas que viajaron a Europa.
 */

function mostrar() 
{
	let respuesta = 'si';
	let nombreIngresado;
	let destinoIngresado;
	let temporadaIngresada;
	let pasajerosIngresados;
	let contadorBrasil = 0;
	let contadorCaribe = 0;
	let contadorEuropa = 0;
	let destinoMasElegido;
	let menorCantidadDePasajeros;
	let banderaMenorCantidadDePasajeros = true;
	let nombreMenorCantidadDePasajeros;
	let acumuladorPasajerosTempAlta = 0;
	let acumuladorPasajerosTotal = 0
	let promedioPasajerosTempAlta;

	while (respuesta == 'si') {
		nombreIngresado = prompt('Ingresar nombre');
		while (!isNaN(nombreIngresado)) {
			nombreIngresado = prompt('Error. Ingresar nombre válido');
		}

		destinoIngresado = prompt('Ingresar opciones ("Brasil", "Caribe" o "Europa")');
		while (destinoIngresado != "Brasil" && destinoIngresado != "Caribe" && destinoIngresado != "Europa") {
			destinoIngresado = prompt('Error. Ingresar opciones válidas ("Brasil", "Caribe" o "Europa")');
		}

		temporadaIngresada = prompt('Ingresar opciones ("alta", "baja" o "media")');
		while (temporadaIngresada != "alta" && temporadaIngresada != "baja" && temporadaIngresada != "media") {
			temporadaIngresada = prompt('Error. Ingresar opciones válidas ("alta", "baja" o "media")');
		}

		pasajerosIngresados = parseInt(prompt('Ingresar cantidad de pasajeros que viajan'));
		while (isNaN(pasajerosIngresados) || pasajerosIngresados < 0 || pasajerosIngresados > 20) {
			pasajerosIngresados = parseInt(prompt('Ingrese una cantidad válida: (entre 1 y 20)'));
		}

		switch (destinoIngresado) {
			case "Brasil":
				contadorBrasil = contadorBrasil + 1;
				break;
			case "Caribe":
				contadorCaribe = contadorCaribe + 1;
				break;
			case "Europa":
				contadorEuropa = contadorEuropa + 1;
				break;
		}

		if (banderaMenorCantidadDePasajeros == true || menorCantidadDePasajeros > pasajerosIngresados) {
			menorCantidadDePasajeros = pasajerosIngresados;
			nombreMenorCantidadDePasajeros = nombreIngresado;
			banderaMenorCantidadDePasajeros = false;
		}

		
		if (temporadaIngresada == "alta") {
			acumuladorPasajerosTempAlta = acumuladorPasajerosTempAlta + pasajerosIngresados;
		}

		acumuladorPasajerosTotal = acumuladorPasajerosTotal + pasajerosIngresados;
		


		respuesta = prompt('¿Desea seguir ingresando datos? si/no');
	}//fin del ciclo while

	if (contadorBrasil > contadorCaribe && contadorBrasil > contadorEuropa) {
		destinoMasElegido = "Brasil";
	} else if (contadorCaribe > contadorEuropa) {
		destinoMasElegido = "Caribe";
	} else {
		destinoMasElegido = "Europa";
	}

// c)El promedio de personas, que viajan en temporada alta.
	if (acumuladorPasajerosTempAlta != 0) {
		promedioPasajerosTempAlta = acumuladorPasajerosTotal / acumuladorPasajerosTempAlta;
		console.log('El promedio de personas que viajan en temporada alta es ' + promedioPasajerosTempAlta);
	} else {
		console.log('Ningún pasajero viaja en temporada alta');
	}

// a)El destino más elegido.
	console.log('El destino más elegido es ' + destinoMasElegido);
// b)El nombre del pasajero titular que lleva menos pasajeros.
	console.log('El nombre del pasajero titular que lleva menos pasajeros es ' + nombreMenorCantidadDePasajeros);
// d)El total de personas que viajaron a Europa.
	console.log('El total de personas que viajaron a Europa es ' + contadorEuropa);

}//fin de la funcion
