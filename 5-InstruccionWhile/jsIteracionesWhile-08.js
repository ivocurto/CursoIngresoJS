/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while (respuesta == "si") {
		numeroIngresado = parseInt(prompt("Ingrese un número"));

		while (isNaN(numeroIngresado)){
			numeroIngresado = parseInt(prompt("Error. Debe ingresar un número valido"));
		}
		if (numeroIngresado >= 0){
			sumaPositivos = sumaPositivos + numeroIngresado;
		} else {
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}

		contador = contador + 1;
		respuesta = prompt("Desea ingresar otro número? si/no");
	}

	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;
}//FIN DE LA FUNCIÓN