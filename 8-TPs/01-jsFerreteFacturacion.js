/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //1 definición de variables
    let precioUno;
    let precioDos;
    let precioTres;
    let resultado;
    let mensaje;

    //2 se guardan los precios ingresados en las variables y se convierten de cadena de texto a número
    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);
	
    //3 se suman los precios y se guardan en la variable resultado.
    resultado = precioUno + precioDos + precioTres;
    //4 se concatena el mensaje que se va a mostrar al ususario.
    mensaje = "La suma de todos los precios es: " + resultado;

    //5 se muestra el mensaje a través de un alert 
    alert(mensaje);
}

function Promedio () 
{
	//1 definición de variables
    let precioUno;
    let precioDos;
    let precioTres;
    let resultado;
    let mensaje;

    //2 se guardan los precios ingresados en las variables y se convierten de cadena de texto a número
    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    //3 se suman los precios y se guardan en la variable resultado.
    resultado = precioUno + precioDos + precioTres;
    //4 se busca el promedio y se pisa el valor de resultado
    resultado = resultado / 3;

    //5 se concatena el mensaje que se va a mostrar al ususario.
    mensaje = "El promedio de todos los precios es: " + resultado;

    //6 se muestra el mensaje a través de un alert 
    alert(mensaje);
}

function PrecioFinal () 
{
		//1 definición de variables
        let precioUno;
        let precioDos;
        let precioTres;
        let resultado;
        let mensaje;

    //2 se guardan los precios ingresados en las variables y se convierten de cadena de texto a número
    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    //3 se suman los precios y se guardan en la variable resultado.
    resultado = precioUno + precioDos + precioTres;
    //4 se le agrega el IVA al resultado
    resultado = resultado * 1.21;
    
    //5 se concatena el mensaje que se va a mostrar al ususario.
    mensaje = "El precio total final con IVA (21%) es: " + resultado;

    //6 se muestra el mensaje a través de un alert
    alert(mensaje);
}