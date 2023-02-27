/* Enunciado:
al presionar el botón repetir el pedido de número hasta que ingresemos el 9. */
/* function mostrar()
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
} *///FIN DE LA FUNCIÓN


/////////////////for 5 bis///////////////////
/* For 5 bis, Realizar el programa que permita el ingreso de las notas (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m” o "b") de 7 alumnos, informar por console.log: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
d) La cantidad de alumnos desaprobados (nota < 4) */
function mostrar()
{
	let notaIngresada;
	let sexoIngresado;
	let cantidadAlumnos;
	let acumuladorNotas;
	let promedio;
	let banderaNotaMasBaja;
	let notaMasBaja;
	let sexoNotaMasBaja;
	let contadorVAprobados;
	let contadorADesaprobados;

	cantidadAlumnos = 7;
	acumuladorNotas = 0;
	contadorVAprobados = 0;
	contadorADesaprobados = 0;
	banderaNotaMasBaja = true;

	for (let i = 0; i < cantidadAlumnos; i++) {
		notaIngresada = parseInt(prompt("Ingrese la nota"));
		while (isNaN(notaIngresada) || notaIngresada < 0 || notaIngresada > 10) {
			notaIngresada = parseInt(prompt("Ingrese una nota válida"));
		}
		sexoIngresado = prompt('Indique si es femenino con la letra "f", masculino con "m" o no binario con "b"');
		while (sexoIngresado != "f" && sexoIngresado != "F" && sexoIngresado != "m" && sexoIngresado != "M" && sexoIngresado != "b" && sexoIngresado != "B") {
			sexoIngresado = prompt('Error. Indique si es femenino con la letra "f", masculino con "m" o no binario con "b"');
		}

		switch (sexoIngresado) {
			case "f":
			case "F":
				sexoIngresado = "femenino";
				break;
			case "m":
			case "M":
				sexoIngresado = "masculino";
				break;
			case "b":
			case "B":
				sexoIngresado = "no binario";
				break;
		}
	
		acumuladorNotas = acumuladorNotas + notaIngresada;

		if (banderaNotaMasBaja == true) {
			notaMasBaja = notaIngresada;
			sexoNotaMasBaja = sexoIngresado;
			banderaNotaMasBaja = false;
		} else if (notaMasBaja > notaIngresada) {
			notaMasBaja = notaIngresada;
			sexoNotaMasBaja = sexoIngresado;
		}

		if (notaIngresada > 5 && sexoIngresado == "masculino") {
			contadorVAprobados = contadorVAprobados + 1;
		}

		if (notaIngresada < 4) {
			contadorADesaprobados = contadorADesaprobados + 1;
		}
	}

	promedio = acumuladorNotas / cantidadAlumnos;

	console.log("El promedio total de las notas es " + promedio.toFixed(2));
	console.log("La nota mas baja es " + notaMasBaja);
	console.log("El sexo de la persona con la nota mas baja es " + sexoNotaMasBaja);
	console.log("La cantidad de varones con nota mayor o igual a 6 es de " + contadorVAprobados);
	console.log("La cantidad de alumnos desaprobados es de " + contadorADesaprobados);
}