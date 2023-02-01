/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//1 declaracion de variables
	let numeroUno;
	let numeroDos;
	let resultado;

	//2 pido los datos y hago los parseInt(entrada)
	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	//3 sumo los datos
	resultado = numeroUno + numeroDos;
	
	//4 muestro los datos (salida)
	alert(resultado);
}