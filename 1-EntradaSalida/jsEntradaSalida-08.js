/* Ivo Curto Eivers
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
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
}
