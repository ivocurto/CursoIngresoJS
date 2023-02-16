/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;
 	let sexoIngresado;
 	let estadoCivilIngresado;
	let sueldoBrutoIngresado;
	let numeroLegajo;
	let nacionalidadIngresada;

	//A.	Edad, entre 18 y 90 años inclusive.
	edadIngresada = parseInt(prompt("Ingrese una edad entre 18 y 90 años inclusive"));

	while (isNaN(edadIngresada) || edadIngresada < 18 || edadIngresada > 90) {
		edadIngresada = parseInt(prompt("Error. Ingrese número entre 18 y 90 inclusive"));
		}
	
	//B.	Sexo, “M” para masculino y “F” para femenino
	sexoIngresado = prompt("Ingrese 'f' para femenino, 'm' para masculino.");

	while (sexoIngresado != "f" && sexoIngresado != "F" && sexoIngresado != "m" && sexoIngresado != "M") {
		sexoIngresado = prompt("Error. Ingrese 'f' para femenino, 'm' para masculino.");
	}

	if (sexoIngresado == "f" || sexoIngresado == "F") {
		sexoIngresado = "Femenino";
	} else if (sexoIngresado == "m" || sexoIngresado == "M") {
		sexoIngresado = "Masculino";
	}
	
	//C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
	estadoCivilIngresado = parseInt(prompt("Ingrese su estado civil.\n1- Para soltero\n2- Para casado\n3- Para divorciado\n4- Para viudo"));

	while (isNaN(estadoCivilIngresado) || estadoCivilIngresado < 1 || estadoCivilIngresado > 4) {
		estadoCivilIngresado = parseInt(prompt("Error. Ingrese su estado civil.\n1- Para soltero\n2- Para casado\n3- Para divorciado\n4- Para viudo"));
		}
	
	switch (estadoCivilIngresado) {
		case 1:
			estadoCivilIngresado = "Soltero";
			break;
		case 2:
			estadoCivilIngresado = "Casado";
			break;
		case 3:
			estadoCivilIngresado = "Divorciado";
			break;
		case 4:
			estadoCivilIngresado = "Viudo";
			break;
	}

	//D.	Sueldo bruto, no menor a 8000.
	sueldoBrutoIngresado = parseInt(prompt("Ingrese su sueldo bruto. Mínimo: 8000"));

	while (isNaN(sueldoBrutoIngresado) || sueldoBrutoIngresado < 8000) {
		sueldoBrutoIngresado = parseInt(prompt("Error. Ingrese número mayor a 8000"));
		}

	//E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
	numeroLegajo = parseInt(prompt("Ingrese su número de legajo (4 cifras, sin ceros a la izquierda)"));
	while (isNaN(numeroLegajo) || numeroLegajo.toString().length != 4) {
		numeroLegajo = parseInt(prompt("Error. Ingrese su número de legajo (4 cifras, sin ceros a la izquierda"));
		}

	//F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
	nacionalidadIngresada = prompt('Ingrese su nacionalidad. Utilice:\n"A" si es Argentino\n"E" si es extranjero\n"N" si es nacionalizado');
	while (nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N" && nacionalidadIngresada != "a" && nacionalidadIngresada != "e" && nacionalidadIngresada != "n") {
		nacionalidadIngresada = parseInt(prompt('Error. Ingrese su nacionalidad. Utilice:\n"A" si es Argentino\n"E" si es extranjero\n"N" si es nacionalizado'));
		}
	
	switch (nacionalidadIngresada) {
		case "A":
		case "a":
			nacionalidadIngresada = "Argentina";
			break;
		case "E":
		case "e":
			nacionalidadIngresada = "Extranjero";
			break;
		case "N":
		case "n":
			nacionalidadIngresada = "Nacionalizado";
			break;
	}


	document.getElementById("txtIdEdad").value = edadIngresada;
	document.getElementById("txtIdSexo").value = sexoIngresado;
	document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;
	document.getElementById("txtIdSueldo").value = sueldoBrutoIngresado;
	document.getElementById("txtIdLegajo").value = numeroLegajo;
	document.getElementById("txtIdNacionalidad").value = nacionalidadIngresada;
}