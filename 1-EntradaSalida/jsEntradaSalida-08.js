/* Ivo Curto Eivers
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

/* function SacarResto()
{
	//1 declaracion de variables
	let dividendo;
	let divisor;
	let resultado;

	//2 pido los datos y hago los parseInt(entrada)
	dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);

	//3 sumo los datos
	resultado = "El resto es " + dividendo % divisor;

	//4 muestro los datos (salida)
	alert(resultado);
} */

////////////////////////////////////////////////////////////////////////

function SacarResto() {
	//1 declaracion de variables
	let numUno;
	let numDos;
	let resultadoSuma;
	let resultadoPromedio;
	let resultadoModulo;
	let mensaje;
	
	//2 pido los datos y hago los parseInt(entrada)
	numUno = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	numDos = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	
	//3 se realizan todas las cuentas para guardar sus resultados en las variables
	//suma
	resultadoSuma = numUno + numDos;
	//promedio
	resultadoPromedio = resultadoSuma / 2;
	//modulo 
	resultadoModulo = numUno % numDos;

	//4 se concatena el mensaje que va a ver el usuario
	mensaje = "a) La suma de los dos números ingresados es " + resultadoSuma + "\nb) El promedio de los números ingresados es " +resultadoPromedio + "\nc) El módulo de los números ingresados es " + resultadoModulo;

	//5 se muestra el mensaje a través de un alert
	alert(mensaje);
}