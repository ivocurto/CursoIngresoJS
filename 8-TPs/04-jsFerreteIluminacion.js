/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos e informar del impuesto con el siguiente mensaje:
”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
/* function CalcularPrecio () 
{
 	//1 se definen las variables
    let cantLamparas;
    let porcentaje;
    let descuento;
    let precioUnidad = 35;
    let precioTotal
    let precioConDto;
    let marca;
    let porcentajeIIBB = 10;
    let precioConImpto;
    let mensaje;
    let impuesto;

    //2 se asigna el valor por id a las variables y se parsea lo que sea necesario
    cantLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca");

    //3 se crean las condiciones por if
    if (cantLamparas >= 6) {
        porcentaje = 50;
    }
    
    else if (cantLamparas == 5) {
        if (marca == "ArgentinaLuz"){
            porcentaje = 40;
            
        } else {
            porcentaje = 30
        }
    }
    
    else if (cantLamparas  == 4) {
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
            porcentaje = 25;
        } else {
            porcentaje = 20;
        }
    }
    
    else if (cantLamparas == 3) {
        if (marca == "ArgentinaLuz") {
            porcentaje = 15;
        } else if (marca == "FelipeLamparas") {
            porcentaje = 10;
        } else {
            porcentaje = 5;
        }
    }

    //4 se multiplica la cantidad de lamparas por el precio original por unidad y lo guardo en la variable precioOriginalTotal
    precioTotal = cantLamparas * precioUnidad;
    
    //5 se consigue la cantidad que se le tiene que descontar al precio y lo guardo en la variable descuento
    descuento = precioTotal * porcentaje / 100;
    
    //6 se descuenta esa cantidad al precio total orginal
    precioConDto = precioTotal - descuento;
    
    //7 se asigna al valor de la caja del precio con descuento el resultado (salida)
    document.getElementById("txtIdprecioDescuento").value = "$" + precioConDto.toFixed(2);
    
    //8 Calcular precio con descuento
    precioTotal = cantLamparas * precioUnidad;
    descuento = precioTotal * porcentaje / 100;
    precioConDto = precioTotal - descuento;

    //9 Calcular precio con impuesto
    precioConImpto = precioConDto * (1 + 0.01 * porcentajeIIBB);
    impuesto = precioConImpto - precioConDto;
    impuesto = impuesto.toFixed(2);
    
    //10 Asignar el mensaje que va a salir en la caja de precio con descuento
    document.getElementById("txtIdprecioDescuento").value = "$" + precioConDto.toFixed(2);   

    //11 se crea la condicional if para revisar si el precio es mayor a 120 y en el caso de que lo sea, le agrego el impuesto y lo muestro por alert
    if (precioConDto > 120) {
        mensaje = "Usted pagó $" + impuesto + " de IIBB.";
        alert(mensaje);
    }
} */

//Alumno: Ivo Curto Eivers
////////////////////solo SWITCH (las marcas), IF(cantidad)////////////////////
/* function CalcularPrecio () 
{
    //1 Definición de variables
    let cantidadLamparas;
    let marca;
    let precio;
    let porcentajeIIBB;
    let porcentaje;
    let impuesto;
    let precioTotal;
    let precioFinal;
    
    //2 Asignación de valores a variables
    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    precio = 35;
    porcentajeIIBB = 10;

    //3 Evaluación con switch (las marcas), if (cantidad)
    if (cantidadLamparas >= 6) {
        porcentaje = -50;
    } else {
        switch (marca) {
            case "ArgentinaLuz":
                if (cantidadLamparas == 5) {
                    porcentaje = -40;
                } else if (cantidadLamparas == 4) {
                    porcentaje = -25;
                } else if (cantidadLamparas == 3) {
                    porcentaje = -15;
                } else {
                    porcentaje = 0;
                }
                break;
            case "FelipeLamparas":
                if (cantidadLamparas == 5) {
                    porcentaje = -30;
                } else if (cantidadLamparas == 4) {
                    porcentaje = -25;
                } else if (cantidadLamparas == 3) {
                    porcentaje = -10;
                } else {
                    porcentaje = 0;
                }
                break;
            case "JeLuz":
            case "HazIluminacion":
            case "Osram":
                if (cantidadLamparas == 5) {
                    porcentaje = -30;
                } else if (cantidadLamparas == 4) {
                    porcentaje = -20;
                } else if (cantidadLamparas == 3) {
                    porcentaje = -5;
                } else {
                    porcentaje = 0;
                }
        }
    }

    //4 Calculo descuento
    precioTotal = precio * cantidadLamparas;
    precioFinal = precioTotal + (precioTotal * porcentaje / 100);

    //5 Calculo impuesto
    impuesto = precioFinal + (precioFinal * porcentajeIIBB / 100);
    impuesto = impuesto - precioFinal;


    //6 Evaluación con if para ver si el precio supera los $120
    if (precioFinal > 120) {
        alert("IIBB Usted pagó $" + impuesto);
    }

    //7 Muestra el precioFinal en la caja de texto
    document.getElementById("txtIdprecioDescuento").value = "$" + precioFinal.toFixed(2);
} */

//Alumno: Ivo Curto Eivers
////////////////////con SWITCH (cantidad), IF(marcas)////////////////////
/* function CalcularPrecio () 
{
    //1 Definición de variables
    let cantidadLamparas;
    let marca;
    let precio;
    let porcentajeIIBB;
    let porcentaje;
    let impuesto;
    let precioTotal;
    let precioFinal;
    
    //2 Asignación de valores a variables
    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    precio = 35;
    porcentajeIIBB = 10;

    //3 Evaluación con switch (las marcas), if (cantidad)
    switch (cantidadLamparas) {
        case 1:
        case 2:
            porcentaje = 0;
            break;
        case 3:
            if (marca == "ArgentinaLuz") {
                porcentaje = -15;
            } else if (marca == "FelipeLamparas") {
                porcentaje = -10;
            } else {
                porcentaje = -5;
            }
            break;
        case 4:
            if (marca == "ArgentinaLuz" || "FelipeLamparas") {
                porcentaje = -25;
            } else {
                porcentaje = -20;
            }
            break;
        case 5:
        if (marca == "ArgentinaLuz") {
            porcentaje = -40;
        } else {
            porcentaje = -30;
        }
        break;
        default:
            porcentaje = -50;
    }

    //4 Calculo descuento
    precioTotal = precio * cantidadLamparas;
    precioFinal = precioTotal + (precioTotal * porcentaje / 100);

    //5 Calculo impuesto
    impuesto = precioFinal + (precioFinal * porcentajeIIBB / 100);
    impuesto = impuesto - precioFinal;


    //6 Evaluación con if para ver si el precio supera los $120
    if (precioFinal > 120) {
        alert("IIBB Usted pagó $" + impuesto);
    }

    //7 Muestra el precioFinal en la caja de texto
    document.getElementById("txtIdprecioDescuento").value = "$" + precioFinal.toFixed(2);
} */

//Alumno: Ivo Curto Eivers
////////////////////con SWITCH (cantidad), IF(marcas)////////////////////
function CalcularPrecio () 
{
    //1 Definición de variables
    let cantidadLamparas;
    let marca;
    let precio;
    let porcentajeIIBB;
    let porcentaje;
    let impuesto;
    let precioTotal;
    let precioFinal;
    
    //2 Asignación de valores a variables
    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;
    precio = 35;
    porcentajeIIBB = 10;

    //3 Evaluación con switch (las marcas), if (cantidad)
    switch (cantidadLamparas) {
        case 1:
        case 2:
            porcentaje = 0;
            break;
        case 3:
            switch (marca) {
                case "ArgentinaLuz":
                    porcentaje = -15;
                    break;
                case "FelipeLuz":
                    porcentaje = -10;
                    break;
                default:
                    porcentaje = -5;
            }
            break;
        case 4:
            switch (marca) {
                case "ArgentinaLuz":
                case "FelipeLuz":
                    porcentaje = -25;
                    break;
                default:
                    porcentaje = -20;
            }
            break;
        case 5:
            switch (marca) {
                case "ArgentinaLuz":
                    porcentaje = -40;
                    break;
                default:
                    porcentaje = -30;
            }
            break;
        default:
            porcentaje = -50;
    }

    //4 Calculo descuento
    precioTotal = precio * cantidadLamparas;
    precioFinal = precioTotal + (precioTotal * porcentaje / 100);

    //5 Calculo impuesto
    impuesto = precioFinal + (precioFinal * porcentajeIIBB / 100);
    impuesto = impuesto - precioFinal;


    //6 Evaluación con if para ver si el precio supera los $120
    if (precioFinal > 120) {
        alert("IIBB Usted pagó $" + impuesto);
    }

    //7 Muestra el precioFinal en la caja de texto
    document.getElementById("txtIdprecioDescuento").value = "$" + precioFinal.toFixed(2);
}

