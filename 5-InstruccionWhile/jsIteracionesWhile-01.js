/* al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1. */
function mostrar() {
	//1 declaración de variables
	let i;

	//2 asignación de valores a las variables
	i = 0;

	//3 verificación con while
	while (i < 10) {
		i = i + 1;
		alert(i);
	}
}//FIN DE LA FUNCIÓN

/* al presionar el botón mostrar 100 repeticiones 
con números ASCENDENTE, desde el 1 al 100.
a) contar los numeros impares
b) contar los numeros pares
c) el total de la suma de los numeros impares
d) el total de la suma de los numeros pares
e) el mayor de los numeros impares */

/* function mostrar() {
	//1 declaración de variables
	let i;
	let contadorNumerosPares;
	let contadorNumerosImpares;
	let acumuladorNumerosImpares;
	let acumuladorNumerosPares;
	let mayorNumeroImpar;
	let mayorNumeroPar;

	//2 asignación de valores a las variables
	i = 0;
	contadorNumerosPares = 0;
	contadorNumerosImpares = 0;
	acumuladorNumerosImpares = 0;
	acumuladorNumerosPares = 0;
	mayorNumeroImpar = 0;
	mayorNumeroPar = 0;

	//3 verificación con while
	while (i < 100) {
		if (i % 2 != 0) {
			//a) contar los numeros impares
			contadorNumerosImpares = contadorNumerosImpares +1;
			//c) el total de la suma de los numeros impares
			acumuladorNumerosImpares = acumuladorNumerosImpares +i;
			if (i > mayorNumeroImpar) {
				mayorNumeroImpar = i;
			}
		} else {
			//b) contar los numeros pares
			contadorNumerosPares = contadorNumerosPares + 1;
			//d) el total de la suma de los numeros pares
			acumuladorNumerosPares = acumuladorNumerosPares +i;
			if (i > mayorNumeroPar) {
				mayorNumeroPar = i;
			}
		}
		i = i + 1;
		console.log("i");
	}
	
		console.log("Cantidad de números impares: " + contadorNumerosImpares);
		console.log("Cantidad de números pares: " + contadorNumerosPares);
		console.log("Total de la suma de números impares: " + acumuladorNumerosImpares);
		console.log("Total de la suma de números pares: " + acumuladorNumerosPares);
		console.log("Mayor numero impar: " +mayorNumeroImpar);
		console.log("Mayor numero par: " +mayorNumeroPar);

} *///FIN DE LA FUNCIÓN

/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
/* function mostrar() {
	//1 definición de variables
	let edad;

	//2 asignación de valores a las variables
	edad = parseInt(prompt("Ingresa una edad válida (0 - 103)"));

	//3 validación con while
	while (isNaN(edad) || edad < 0 || edad > 103) {
		edad = parseInt(prompt("Error: ingresa una edad válida entre 0 y 103"));
	}//fin del while

	//4 respuesta
	alert("Felicitaciones pusiste bien la edad");
}//FIN DE LA FUNCIÓN
 */