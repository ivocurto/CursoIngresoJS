/* Ivo Curto Eivers
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//1 definición de variables
	let sueldoIngresado;
	let resultado;
	let porcentaje;

	//2 asigno el porcentaje que quiero utilizar
	porcentaje = 10

	//3 recupero el dato ingresado desde el id.value y lo parseo (entrada)
	sueldoIngresado = parseInt(document.getElementById("txtIdSueldo").value);

	//4 le asigno a la variable resultado una cuenta para aumentar el 10% al sueldoIngresado 
	resultado = sueldoIngresado * porcentaje / 100;
	resultado = sueldoIngresado + resultado;

	//5 muestro el contenido de la variable resultado en el valor del cuadro de texto "txtIdResultado" (salida)
	document.getElementById("txtIdResultado").value = resultado;
}