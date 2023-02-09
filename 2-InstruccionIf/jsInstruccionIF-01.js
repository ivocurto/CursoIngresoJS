/* function mostrar() 
{
	//se definen variables necesarias
	let edad;

	//se asigna el valor ingresado por id.value a la variable edad
	edad = parseInt(document.getElementById("txtIdEdad").value);

	//se crea el condicional if
	if (edad == 15) {
		alert("niña bonita");
	}

}//FIN DE LA FUNCIÓN */

//////////////////////////1 bis//////////////////////////
/* Ejercicio 1bis: 
/con if
pedir a una persona que fue de vaciones , 
la distancia que viajo y el tiempo que tardo, para calcular la velocidad
e informar:
60 km/hr = muy lento 
hata 80km/h= lento 
hasta 100= buen ritmo
hasta 120= ahi de la ley 
mas = eso no se hace/ */

/* function mostrar()
{
	//se definen variables necesarias
	let distancia;
	let tiempo;
	let velocidad;
	let mensaje;

	//se asigna el valor ingresado por prompt a las variables
	distancia = parseFloat(prompt("Ingrese la distancia que viajó en kilómetros"));
	tiempo = parseFloat(prompt("Ingrese el tiempo que tardó en horas"));

	//se hace la cuenta para saber cual es la velocidad a la que fue
	velocidad = distancia / tiempo;

	//se crea el condicional if
	if (velocidad <= 60) {
		mensaje = "Muy lento";
		document.getElementById("txtIdEdad").value = mensaje;
	}
	else if (velocidad <= 80){
		mensaje = "Lento";
		document.getElementById("txtIdEdad").value = mensaje;
	}
	else if (velocidad <= 100){
		mensaje = "Buen ritmo";
		document.getElementById("txtIdEdad").value = mensaje;
	}
	else if (velocidad <= 120){
		mensaje = "Ahí de la ley";
		document.getElementById("txtIdEdad").value = mensaje;
	}
	else if (velocidad > 120){
		mensaje = "Eso no se hace";
		document.getElementById("txtIdEdad").value = mensaje;
	}
} */

//////////////////////////1 bis bis//////////////////////////
/* Ejercicio 1 bis bis:
con if
ingresar el nombre y los datos requeridos para calcular el IMC , 
e informar a la persona si es:
Bajo peso <18.5
Peso normal 18,5-24.9
Preobesidad 25-26.9
Obesidad I 27-29.9
Obesidad II 30-34.9
Obesidad III >40 */

function mostrar()
{
	//se definen variables necesarias
	let peso;
	let altura;
	let IMC;
	let mensaje;

	//se asigna el valor ingresado por prompt a las variables
	peso = parseFloat(prompt("Ingrese su peso en kilogramos"));
	altura = parseFloat(prompt("Ingrese su altura en metros"));

	//se hace la cuenta para saber cual es el IMC de la persona
	IMC = peso / (altura * altura);

	//se crea el condicional if
	if (IMC < 18.5) {
		mensaje = "Bajo peso";
		document.getElementById("txtIdEdad").value = mensaje;
	}
	else if (IMC >= 18.5 && IMC <= 24.9){
		mensaje = "Peso normal";
		document.getElementById("txtIdEdad").value = mensaje;
	}
	else if (IMC >= 25 && IMC <= 26.9){
		mensaje = "Preobesidad";
		document.getElementById("txtIdEdad").value = mensaje;
	}
	else if (IMC >= 27 && IMC <= 29.9){
		mensaje = "Obesidad I";
		document.getElementById("txtIdEdad").value = mensaje;
	}
	else if (IMC >= 30 && IMC <= 34.9){
		mensaje = "Obesidad II";
		document.getElementById("txtIdEdad").value = mensaje;
	} else {
		mensaje = "Obesidad III";
		document.getElementById("txtIdEdad").value = mensaje;
	}
}