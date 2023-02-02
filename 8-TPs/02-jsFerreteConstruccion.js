/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
    //1 declaración de variables
    let largoIngresado;
    let anchoIngresado;
    let resultado;
    let mensaje;

    //2 se guardan los metros ingresados en las variables y se convierten de cadena de texto a número
    largoIngresado = parseInt(document.getElementById("txtIdLargo").value);
    anchoIngresado = parseInt(document.getElementById("txtIdAncho").value);

    //3 se realiza la cuenta para calcular cuantos metros de perimetro tiene el rectángulo
    resultado = 2 * (largoIngresado + anchoIngresado);
    //4 se realiza el cálculo para saber cuántos metros de alambre se va a utilizar. Se pisa la variable resultado
    resultado = resultado * 3;

    //5 se concatena el mensaje que se va a mostrar al usuario.
    mensaje = "La cantidad total necesaria para limitar el perímetro del terreno con tres hilos de alambre es de "+resultado+ " metros de hilo."

    //6 se muestra el mensaje a través de un alert.
    alert(mensaje);
}

function Circulo() {
    //1 declaración de variables
    let radioIngresado;
    let resultado;
    let mensaje;
    
    //2 se guarda el radio ingresado en la variable y se convierte de cadena de texto a número
    radioIngresado = parseInt(document.getElementById("txtIdRadio").value);

    //3 se realiza la cuenta para calcular cuantos metros de perímetro tiene el círculo
    resultado = 2 * Math.PI * radioIngresado;
    //4 se realiza el cálculo para saber cuántos metros de alambre se va a utilizar. Se pisa la variable resultado
    resultado = resultado * 3;

    //5 se concatena el mensaje que se va a mostrar al usuario.
    mensaje = "La cantidad total necesaria para limitar el perímetro del terreno con tres hilos de alambre es de "+resultado+ " metros de hilo."

    //6 se muestra el mensaje a través de un alert.
    alert(mensaje);
}

function Materiales() {
    //1 declaración de variables
    let largoIngresado;
    let anchoIngresado;
    let resultado;
    let cemento;
    let cal;
    let mensaje;

    //2 se guardan los metros ingresados en las variables y se convierten de cadena de texto a número
    largoIngresado = parseFloat(document.getElementById("txtIdLargo").value);
    anchoIngresado = parseFloat(document.getElementById("txtIdAncho").value);

    //3 se realiza la cuenta para saber cuál es el área del rectángulo
    resultado = largoIngresado * anchoIngresado;
    //4 se calcula cuántas bolsas de cemento y cal se van a necesitar en total para hacer el contrapiso
    cemento = resultado * 2;
    cal = resultado * 3;

    //5 se concatena el mensaje que se va a mostrar al usuario.
    mensaje = "Se van a necesitar " + cemento + " bolsas de cemento y " + cal + " bolsas de cal para hacer el contrapiso de todo el terreno."

    //6 se muestra el mensaje a través de un alert.
    alert(mensaje);
}