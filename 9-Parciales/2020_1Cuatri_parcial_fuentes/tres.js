/* Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */
/* function mostrar()
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
} */

///////////////////////////////////////Parcial 2020 3 bis
/* "Mapa Mundi"
Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre America , Asia , Europa ,Africa y Oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobreza entre (pobre, rico, millonario) en europa no hay paises pobre(validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.*/

function mostrar() 
{
	let continenteIngresado;
	let paisIngresado;
	let cantidadDeHabitantesIngresada;
	let nivelDePobrezaIngresado;
	let tempMinimaTerritorio;
	let contadorTempPares = 0;
	let contadorTempImparEuropa = 0;
	let nombrePaisConMenosHabitantes;
	let paisConMenosHabitantes;
	let banderaPaisConMenosHabitantes = true;
	let contadorPaisesCalurosos = 0;
	let contadorPaisesFrios = 0;
	let acumuladorHabitantesIngresados = 0;
	let i;
	let acumuladorHabitantesCalurosos = 0;
	let promedioHabitantesCalurosos;
	let banderaTempMasBaja = true;
	let paisConTempMasBaja;
	let acumuladorHabitantesAfrica = 0;
	let acumuladorHabitantesAmerica = 0;
	let acumuladorHabitantesAsia = 0;
	let acumuladorHabitantesEuropa = 0;
	let acumuladorHabitantesOceania = 0;
	let continenteConMasHabitantes;


	for (i = 0; i < 2; i++) {
		continenteIngresado = prompt('Ingresar continente ("America", "Asia", "Europa", "Africa" o "Oceania")');
		while (continenteIngresado != "America" && continenteIngresado != "Asia" && continenteIngresado != "Europa" && continenteIngresado != "Africa" && continenteIngresado != "Oceania") {
			continenteIngresado = prompt('Error. Ingresar continente válidas ("America", "Asia", "Europa", "Africa" o "Oceania")');
		}

		paisIngresado = prompt('Ingresar nombre del país');
        while (!isNaN(paisIngresado)) {
            paisIngresado = prompt('Error. Ingresar nombre del país válido');
        }

		cantidadDeHabitantesIngresada = parseInt(prompt('Ingresar cantidad de habitantes en millones ("entre 1 y 7000")'));
		while (isNaN(cantidadDeHabitantesIngresada) || cantidadDeHabitantesIngresada < 1 || cantidadDeHabitantesIngresada > 7000) {
			cantidadDeHabitantesIngresada = parseInt(prompt('Ingresar cantidad de habitantes en millones válida ("entre 1 y 7000")'));
		}

		nivelDePobrezaIngresado = prompt('Ingresar nivel de pobreza del país ("pobre", "rico" o "millonario")');
		while (nivelDePobrezaIngresado != "pobre" && nivelDePobrezaIngresado != "rico" && nivelDePobrezaIngresado != "millonario" && (continenteIngresado == "Europa" && nivelDePobrezaIngresado == "pobre")) {
			nivelDePobrezaIngresado = prompt('Error. Ingresar nivel de pobreza del país válido ("pobre", "rico" o "millonario". En europa no hay países pobres)');
		}

		tempMinimaTerritorio = parseInt(prompt('Ingresar la temperaruta mínima que se registra en su territorio (entre -50 y 50)'));
		while (isNaN(tempMinimaTerritorio) || tempMinimaTerritorio < -50 || tempMinimaTerritorio > 50) {
			tempMinimaTerritorio = parseInt(prompt('Ingresar la temperaruta mínima que se registra en su territorio (entre -50 y 50)'));
		}

		//a)La cantidad de temperaturas pares.
		if (tempMinimaTerritorio%2 == 0) {
			contadorTempPares = contadorTempPares + 1;
		} else {
			if (continenteIngresado == "Europa") {
				//b)la cantidad de temperaturas impares de europa
				contadorTempImparEuropa = contadorTempImparEuropa + 1;
			}
		}

		//c)El nombre del pais con menos habitantes
		if (banderaPaisConMenosHabitantes == true || paisConMenosHabitantes > cantidadDeHabitantesIngresada) {
			paisConMenosHabitantes = cantidadDeHabitantesIngresada;
			nombrePaisConMenosHabitantes = paisIngresado;
			banderaPaisConMenosHabitantes = false;
		}

		//d)la cantidad de paises que superan los 40 grados.
		if (tempMinimaTerritorio > 39) {
			contadorPaisesCalurosos = contadorPaisesCalurosos + 1;
			acumuladorHabitantesCalurosos = acumuladorHabitantesCalurosos + cantidadDeHabitantesIngresada;
		}

		//f)el promedio de habitantes entre los paises ingresados.
		acumuladorHabitantesIngresados = acumuladorHabitantesIngresados + cantidadDeHabitantesIngresada;

		//H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
		if (banderaTempMasBaja == true || temperaturaMasBaja > tempMinimaTerritorio) {
			temperaturaMasBaja = tempMinimaTerritorio;
			paisConTempMasBaja = paisIngresado;
			banderaTempMasBaja = false;
		}

		//i) que continente tiene mas habitantes
		switch (continenteIngresado) {
			case "Africa":
				acumuladorHabitantesAfrica = acumuladorHabitantesAfrica + cantidadDeHabitantesIngresada;
				break;
			case "America":
				acumuladorHabitantesAmerica = acumuladorHabitantesAmerica + cantidadDeHabitantesIngresada;
				//e)la cantidad de paises de america que tienen menos de 0 grados.
				if (tempMinimaTerritorio < 0) {
					contadorPaisesFrios = contadorPaisesFrios + 1;
				}
				break;
			case "Europa":
				acumuladorHabitantesEuropa = acumuladorHabitantesEuropa + cantidadDeHabitantesIngresada;
				break;
			case "Oceania":
				acumuladorHabitantesOceania = acumuladorHabitantesOceania + cantidadDeHabitantesIngresada;
				break;
			case "Asia":
				acumuladorHabitantesAsia = acumuladorHabitantesAsia + cantidadDeHabitantesIngresada;
				break;
		}

	}//termina el ciclo for

	promedioHabitantesEntrePaises = acumuladorHabitantesIngresados / i;

	//g)el promedio de habitantes entre los paises que superan los 40 grados
	promedioHabitantesCalurosos = acumuladorHabitantesCalurosos / contadorPaisesCalurosos;

	if (acumuladorHabitantesAfrica > acumuladorHabitantesAmerica && acumuladorHabitantesAfrica > acumuladorHabitantesAsia && acumuladorHabitantesAfrica > acumuladorHabitantesEuropa && acumuladorHabitantesAfrica > acumuladorHabitantesOceania) {
		continenteConMasHabitantes = "Africa";
	} else if (acumuladorHabitantesAmerica > acumuladorHabitantesAsia && acumuladorHabitantesAmerica > acumuladorHabitantesEuropa && acumuladorHabitantesAmerica > acumuladorHabitantesOceania) {
		continenteConMasHabitantes = "América";
	} else if (acumuladorHabitantesAsia > acumuladorHabitantesEuropa && acumuladorHabitantesAsia > acumuladorHabitantesOceania) {
		continenteConMasHabitantes = "Asia";
	} else if (acumuladorHabitantesEuropa > acumuladorHabitantesOceania) {
		continenteConMasHabitantes = "Europa";
	} else {
		continenteConMasHabitantes = "Oceania";
	}

	

	if (contadorPaisesCalurosos != 0) {
		console.log('El promedio de habitantes entre los paises que superan los 40 grados es ' + promedioHabitantesCalurosos);
	}

	console.log('La cantidad de temperaturas impares de europa es ' + contadorTempImparEuropa);
	console.log('La cantidad de paises que superan los 40 grados es ' + contadorPaisesCalurosos);
	console.log('La cantidad paises de america que tienen menos de 0 grados es ' + contadorPaisesFrios);
	console.log('La cantidad de temperaturas pares es ' + contadorTempPares);
	console.log('El nombre del pais con menos habitantes es ' + nombrePaisConMenosHabitantes);
	console.log('El promedio de habitantes entre los paises ingresados es ' + promedioHabitantesEntrePaises);
	console.log('La temperatura mínima ingresada es ' + temperaturaMasBaja + ' y el nombre del pais que registro esa temperatura es ' + paisConTempMasBaja);
	console.log('El continente tiene mas habitantes es ' + continenteConMasHabitantes);
}//termina la función