/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos;
	let sumaPositivos;
	let contadorPositivos;
	let contadorNegativos;
	let contadorCeros;
	let contadorPares;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;

	sumaPositivos = 0;
	sumaNegativos = 0;
	contadorCeros = 0;
	contadorNegativos = 0;
	contadorPositivos = 0;
	promedioPositivos = 0;
	promedioNegativos = 0;
	contadorPares = 0;
	respuesta = "si";

	while(respuesta == "si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un número"));

		while(isNaN(numeroIngresado)) {
			numeroIngresado = parseInt(prompt("Error. Ingrese un número válido."));
		}
		
		if (numeroIngresado < 0) {
			//1-Suma de los negativos. 4-Cantidad de negativos.
			sumaNegativos = sumaNegativos + numeroIngresado;
			contadorNegativos = contadorNegativos + 1;
		} else if (numeroIngresado > 0) {
			//2-Suma de los positivos. 3-Cantidad de negativos.
			sumaPositivos = sumaPositivos + numeroIngresado;
			contadorPositivos = contadorPositivos + 1;
		} else {
			contadorCeros = contadorCeros + 1;
		}

		if (numeroIngresado%2 == 0) {
			contadorPares = contadorPares + 1;
		}

		respuesta = prompt("desea continuar? si/no");
	}//fin del while

	promedioPositivos = sumaPositivos / contadorPositivos;
	promedioNegativos = sumaNegativos / contadorNegativos;
	diferencia = sumaPositivos - sumaNegativos;

	//creo estas condicionales en el caso de que el ususario no ingrese positivos o negativos.
	if (contadorPositivos == 0) {
		promedioPositivos = 0;
	}

	if (contadorNegativos == 0) {
		promedioNegativos = 0;
	}

	document.write("La suma de negativos es: "+sumaNegativos+ "<br>");
	document.write("La suma de positivos es: "+sumaPositivos+ "<br>");
	document.write("La cantidad de positivos es: "+contadorPositivos+ "<br>");
	document.write("La cantidad de negativos es: "+contadorNegativos+ "<br>");
	document.write("La cantidad de ceros es: "+contadorCeros+ "<br>");
	document.write("La cantidad de pares es: "+contadorPares+ "<br>");
	document.write("El promedio de negativos es: "+promedioNegativos+ "<br>");
	document.write("El promedio de positivos es: "+promedioPositivos+ "<br>");
	document.write("La diferencia entre positivos y negativos es de: "+diferencia+ "<br>");
}//FIN DE LA FUNCIÓN