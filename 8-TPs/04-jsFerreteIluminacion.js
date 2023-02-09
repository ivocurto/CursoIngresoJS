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
 	//se definen las variables
    let cantidadLamparas;
    let porcentaje;
    let descuento;
    let precioOriginalUnidad = 35;
    let precioOriginalTotal
    let precioTotalConDescuento;
    let marca;
    let porcentajeIIBB = 10;
    let precioTotalConImpuesto;
    let mensaje;
    let impuesto;

    //se asigna el valor por id a las variables y se parsea lo que sea necesario
    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca");


    //se crean las condiciones por if
    //A.
    if (cantidadLamparas >= 6) {
        //1 asigno el porcentaje de descuento
        porcentaje = 50;

        //2 multiplico la cantidad de lamparas por el precio original por unidad y lo guardo en la variable precioOriginalTotal
        precioOriginalTotal = cantidadLamparas * precioOriginalUnidad;

        //3 consigo la cantidad que se le tiene que descontar al precio y lo guardo en la variable descuento
        descuento = precioOriginalTotal * porcentaje / 100;

        //4 le descuento esa cantidad al precio total orginal
        precioTotalConDescuento = precioOriginalTotal - descuento;

        //5 le asigno al valor de la caja del precio con descuento el resultado (salida)
        document.getElementById("txtIdprecioDescuento").value = "$" + precioTotalConDescuento.toFixed(2);
    } 
    //B
    else if (cantidadLamparas == 5 && marca == "ArgentinaLuz") {
        porcentaje = 40;

        precioOriginalTotal = cantidadLamparas * precioOriginalUnidad;
        descuento = precioOriginalTotal * porcentaje / 100;
        precioTotalConDescuento = precioOriginalTotal - descuento;

        document.getElementById("txtIdprecioDescuento").value = "$" + precioTotalConDescuento.toFixed(2);    
    }

    else if (cantidadLamparas == 5 && marca != "ArgentinaLuz") {
        porcentaje = 30;

        precioOriginalTotal = cantidadLamparas * precioOriginalUnidad;
        descuento = precioOriginalTotal * porcentaje / 100;
        precioTotalConDescuento = precioOriginalTotal - descuento;

        document.getElementById("txtIdprecioDescuento").value = "$" + precioTotalConDescuento.toFixed(2);         
    }
    
    else if (cantidadLamparas == 4 && (marca == "ArgentinaLuz" || "FelipeLamparas")) {
        porcentaje = 25;

        precioOriginalTotal = cantidadLamparas * precioOriginalUnidad;
        descuento = precioOriginalTotal * porcentaje / 100;
        precioTotalConDescuento = precioOriginalTotal - descuento;

        document.getElementById("txtIdprecioDescuento").value = "$" + precioTotalConDescuento.toFixed(2);   
    }

    else if (cantidadLamparas == 4 && (marca != "ArgentinaLuz" || "FelipeLamparas")) {
        porcentaje = 20;

        precioOriginalTotal = cantidadLamparas * precioOriginalUnidad;
        descuento = precioOriginalTotal * porcentaje / 100;
        precioTotalConDescuento = precioOriginalTotal - descuento;

        document.getElementById("txtIdprecioDescuento").value = "$" + precioTotalConDescuento.toFixed(2);   
    }

    else if (cantidadLamparas == 3 && marca == "ArgentinaLuz") {
        porcentaje = 15;

        precioOriginalTotal = cantidadLamparas * precioOriginalUnidad;
        descuento = precioOriginalTotal * porcentaje / 100;
        precioTotalConDescuento = precioOriginalTotal - descuento;

        document.getElementById("txtIdprecioDescuento").value = "$" + precioTotalConDescuento.toFixed(2);   
    }

    else if (cantidadLamparas == 3 && marca == "FelipeLamparas") {
        porcentaje = 10;

        precioOriginalTotal = cantidadLamparas * precioOriginalUnidad;
        descuento = precioOriginalTotal * porcentaje / 100;
        precioTotalConDescuento = precioOriginalTotal - descuento;

        document.getElementById("txtIdprecioDescuento").value = "$" + precioTotalConDescuento.toFixed(2);   
    }

    else if (cantidadLamparas == 3 && (marca != "ArgentinaLuz" || "FelipeLamparas")) {
        porcentaje = 5;

        precioOriginalTotal = cantidadLamparas * precioOriginalUnidad;
        descuento = precioOriginalTotal * porcentaje / 100;
        precioTotalConDescuento = precioOriginalTotal - descuento;

        document.getElementById("txtIdprecioDescuento").value = "$" + precioTotalConDescuento.toFixed(2);   
    }

    if (precioTotalConDescuento >= 120) {
        precioTotalConImpuesto = precioTotalConDescuento * (1 + 0.01 * porcentajeIIBB);
        impuesto = precioTotalConImpuesto - precioTotalConDescuento;
        impuesto = impuesto.toFixed(2);
        
        mensaje = "Usted pagó $" + impuesto + " de IIBB.";
        alert(mensaje);
    }
}