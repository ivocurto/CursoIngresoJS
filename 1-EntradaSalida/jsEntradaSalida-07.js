/* Ivo Curto Eivers
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

/* //1 declarar variables
let numeroUno;
let numeroDos;
let resultado;

//2 pido los datos, creando una función que haga parseint para utilizarla en todas las funciones(entrada)
function parsear()
{
numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value),
numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value)
}

//3 agrego la función para cada caso
function sumar()
{	
	parsear();
	resultado = numeroUno + numeroDos;
	alert(resultado);	
}

function restar()
{
	parsear();
	resultado = numeroUno - numeroDos;
	alert(resultado);	
}

function multiplicar()
{ 
	parsear();
	resultado = numeroUno * numeroDos;
	alert(resultado);	
}

function dividir()
{
	parsear();
	resultado = numeroUno / numeroDos;
	alert(resultado);	
}
 */





function sumar() {
	//1 declarar variables
	let numeroUno;
	let numeroDos;
	let resultado;

	//2 pido los datos, creando una función que haga parseint para utilizarla en todas las funciones(entrada)

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	//3 hago la cuenta y escribo el resultado
	resultado = numeroUno + numeroDos;
	mensaje = "El resultado de la multiplicación es " + resultado;

	//4 muestro el resultado
	alert(resultado);
}

function restar() {
	//1 declarar variables
	let numeroUno;
	let numeroDos;
	let resultado;

	//2 pido los datos, creando una función que haga parseint para utilizarla en todas las funciones(entrada)
	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	//3 hago la cuenta y escribo el resultado
	resultado = numeroUno - numeroDos;
	mensaje = "El resultado de la resta es " + resultado;

	//4 muestro el resultado
	alert(resultado);
}

function multiplicar() {
	//1 declarar variables
	let numeroUno;
	let numeroDos;
	let resultado;

	//2 pido los datos, creando una función que haga parseint para utilizarla en todas las funciones(entrada)

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	//3 hago la cuenta y escribo el resultado
	resultado = numeroUno * numeroDos;
	mensaje = "El resultado de la multiplicación es " + resultado;

	//4 muestro el resultado
	alert(resultado);
}

function dividir() {
	//1 declarar variables
	let numeroUno;
	let numeroDos;
	let resultado;

	//2 pido los datos, creando una función que haga parseint para utilizarla en todas las funciones(entrada)

	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

	//3 hago la cuenta y escribo el resultado
	resultado = numeroUno / numeroDos;
	mensaje = "El resultado de la multiplicación es " + resultado;


	//4 muestro el resultado
	alert(resultado);
}