/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {
    //1 declaración de variables
    let tempIngresada;
    let centigrados;
    let mensaje;

    //2 se guarda la temperatura ingresada en la variable tempIngresada y se convierte el texto en número entero
    tempIngresada = parseInt(document.getElementById("txtIdTemperatura").value);

    //3 se hace la cuenta para pasar la temperatura ingresada de fahrenheit a centigrados
    centigrados = (tempIngresada - 32) / 1.8;

    //4 se concatena el mensaje que va a ver el usuario
    mensaje = tempIngresada + " Fahrenheit son " + centigrados + " grados centígrados.";

    //5 se muestra el mensaje a través de un alert
    alert(mensaje);
}

function CentigradosFahrenheit() {
    //1 declaración de variables
    let tempIngresada;
    let fahrenheit;
    let mensaje;

    //2 se guarda la temperatura ingresada en la variable tempIngresada y se convierte el texto en número entero
    tempIngresada = parseInt(document.getElementById("txtIdTemperatura").value);

    //3 se hace la cuenta para pasar la temperatura ingresada de fahrenheit a centigrados
    fahrenheit = (tempIngresada * 1.8) + 32;

    //4 se concatena el mensaje que va a ver el usuario
    mensaje = tempIngresada + " grados centígrados son " + fahrenheit + " Fahrenheit.";

    //5 se muestra el mensaje a través de un alert
    alert(mensaje);
}
