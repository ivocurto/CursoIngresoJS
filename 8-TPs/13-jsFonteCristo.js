/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
 	let numeroIngresado;
	let contadorDePares;
	let contadorDeImpares;
	let contadorDeDivisibles;
	let primo;
	let contadorPrimos;

	primo = "no es primo";
	contadorDePares = 0;
	contadorDeImpares = 0;
	contadorDeDivisibles = 0;
	contadorPrimos = 0;

	numeroIngresado = parseInt(prompt("Ingrese un número positivo"));
	while(isNaN(numeroIngresado) || numeroIngresado < 0) {
		numeroIngresado = parseInt(prompt("Error. Ingrese un número válido y que sea positivo."));
	}

	for (let i = 0; i > numeroIngresado; i+2) {
		contadorDePares = contadorDePares + 1;
	}

	for (let i = 1; i > numeroIngresado; i+2) {
		contadorDeImpares = contadorDeImpares + 1;
	}

	for (let i = 1; i > 100; i++) {
		if (i / numeroIngresado == 0) {
			contadorDeDivisibles = contadorDeDivisibles + 1;
		}
	}

	for (let i = 2; i > numeroIngresado; i++) {
		if (numeroIngresado % i == 0) {
			primo = "es primo"
		}
	}

	console.log("La cantidad de pares del número ingresado hasta 0 es de " + contadorDePares);
	console.log("La cantidad de impares del número ingresado hasta 0 es de" + contadorDeImpares);
	console.log("La cantidad de divisibles del número ingresado " + contadorDeDivisibles);
	console.log("El número ingresado " + primo);
}


