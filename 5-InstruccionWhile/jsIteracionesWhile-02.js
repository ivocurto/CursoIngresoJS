/* 
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
/* function mostrar()
{
	//1 declaración de variables
	let i;

	//2 asignación de valores a las variables
	i = 10;

	//3 verificación con while
	while (i > 0){
		alert(i);
		i = i - 1;
	} 
}*///FIN DE LA FUNCIÓN

/////////////////////////////2 bis///////////////////////////////////
//while 2 bis: Ingresar 5 números, y determinar la cantidad de números que son mayores que 10 y menores 20 (inclusive en ambos casos)

/* function mostrar()
{
	let numeroIngresado;
	let contadorEntreRango;
	let mensaje;

	contadorEntreRango = 0;

	for (let i = 0; i < 5; i ++) {
		numeroIngresado = parseInt(prompt("Ingrese un número"));
		while(isNaN(numeroIngresado)) {
			numeroIngresado = parseInt(prompt("Error. Ingrese un número válido."));
		}
		
		if (numeroIngresado > 9 && numeroIngresado < 21) {
			contadorEntreRango = contadorEntreRango + 1;
		}
	}

	mensaje = "La cantidad de números que estan entre el rango de 10 y 20 es de " + contadorEntreRango + " números";
	alert(mensaje);
} */

/////////////////////////////2 bis bis///////////////////////////////////
/* While 2 bis bis: Ingresar numeros hasta que el usuario quiera. 
Determinar la cantidad de números que son mayores que 10 y menores 20 (inclusive en ambos casos). 
También el promedio de los números que cumplen la condición anterior. */

function mostrar()
{
	let numeroIngresado;
	let contadorEntreRango;
	let acumuladorEntreRango;
	let promedio;
	let mensaje;

	contadorEntreRango = 0;
	acumuladorEntreRango = 0;

	for (let i = 0; i < 5; i ++) {
		numeroIngresado = parseInt(prompt("Ingrese un número"));
		while(isNaN(numeroIngresado)) {
			numeroIngresado = parseInt(prompt("Error. Ingrese un número válido."));
		}
		
		if (numeroIngresado > 9 && numeroIngresado < 21) {
			contadorEntreRango = contadorEntreRango + 1;
			acumuladorEntreRango = acumuladorEntreRango + numeroIngresado;
		}
	}

	promedio = acumuladorEntreRango / contadorEntreRango;

	if (contadorEntreRango == 0) {
		promedio = 0;
	}

	mensaje = "La cantidad de números que estan entre el rango de 10 y 20 es de " + contadorEntreRango + " números.\nEl promedio entre todos los números en el rango de 10 y 20 es " + promedio;
	alert(mensaje);
}