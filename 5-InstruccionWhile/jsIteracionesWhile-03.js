/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
/* function mostrar()
{
	let claveIngresada;

	claveIngresada = prompt("Ingrese el número clave.");
	
	while (claveIngresada != "utn750") {
		claveIngresada = prompt("Error. Ingrese el número clave correcto.");
	}
	alert("Clave ingresada correctamente.");
}//FIN DE LA FUNCIÓN */

///prueba tp 13

/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function mostrar () 
{
 	let numeroIngresado;
	let contadorDePares;
	let contadorDeImpares;
	let contadorDeDivisibles;
	let primo;
	let contadorPrimos;

	primo = "es primo";
	contadorDePares = 0;
	contadorDeImpares = 0;
	contadorDeDivisibles = 0;
	contadorPrimos = 0;

	numeroIngresado = parseInt(prompt("Ingrese un número positivo"));
	while(isNaN(numeroIngresado) || numeroIngresado < 0) {
		numeroIngresado = parseInt(prompt("Error. Ingrese un número válido y que sea positivo."));
	}

	for (let i = 0; i < numeroIngresado; i++) {
		if (i%2 === 0) {
			contadorDePares = contadorDePares + 1;
		}
	}

	for (let i = 0; i < numeroIngresado; i++) {
		if (i%2 !== 0) {
			contadorDeImpares = contadorDeImpares + 1;
		}
	}

	for (let i = 1; i < 101; i++) {
		if (numeroIngresado%i === 0) {
			contadorDeDivisibles = contadorDeDivisibles + 1;
			console.log(i);
		}
	}

	for (let i = 2; i < numeroIngresado; i++) {
		if (numeroIngresado % i === 0) {
			primo = "no es primo"
			break;
		}
	}

	console.log("La cantidad de pares del " + numeroIngresado+ " hasta 0 es de " + contadorDePares);
	console.log("La cantidad de impares del " + numeroIngresado+ " hasta 0 es de " + contadorDeImpares);
	console.log("La cantidad de divisibles del número ingresado es " + contadorDeDivisibles);
	console.log("El número ingresado " + primo);
}
