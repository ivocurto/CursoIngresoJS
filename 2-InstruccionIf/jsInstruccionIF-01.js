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

	//se asigna el valor ingresado por prompt a la variable distancia
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