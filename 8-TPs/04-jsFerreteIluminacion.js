/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos e informar del impuesto con el siguiente mensaje:
”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
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

    //4 multiplico la cantidad de lamparas por el precio original por unidad y lo guardo en la variable precioOriginalTotal
    precioTotal = cantLamparas * precioUnidad;
    
    //5 consigo la cantidad que se le tiene que descontar al precio y lo guardo en la variable descuento
    descuento = precioTotal * porcentaje / 100;
    
    //6 le descuento esa cantidad al precio total orginal
    precioConDto = precioTotal - descuento;
    
    //7 le asigno al valor de la caja del precio con descuento el resultado (salida)
    document.getElementById("txtIdprecioDescuento").value = "$" + precioConDto.toFixed(2);
    
    //8 Calculo el precioConDto
    precioTotal = cantLamparas * precioUnidad;
    descuento = precioTotal * porcentaje / 100;
    precioConDto = precioTotal - descuento;
    
    //9 Asigno el mensaje que va a salir en la caja de precio con descuento
    document.getElementById("txtIdprecioDescuento").value = "$" + precioConDto.toFixed(2);   

    //10 creo la condicional if para revisar si el precio es mayor a 120 y en el caso de que lo sea, le agrego el impuesto y lo muestro por alert
    if (precioConDto > 120) {
        precioConImpto = precioConDto * (1 + 0.01 * porcentajeIIBB);
        impuesto = precioConImpto - precioConDto;
        impuesto = impuesto.toFixed(2);
        
        mensaje = "Usted pagó $" + impuesto + " de IIBB.";
        alert(mensaje);
    }

}