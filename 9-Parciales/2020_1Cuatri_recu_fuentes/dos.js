/* Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas(0-300),
Precio por bolsa (más de cero y menor a 10000 ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 15 bolsas en total tenes 10% de descuento sobre el total a pagar.
Si compro más de 45 bolsas en total tenes 30% de descuento sobre el total a pagar.
a)
El importe total a pagar , bruto sin descuento y...
b)
el importe total a pagar con descuento(solo si corresponde)
d)
Informar la bolsa mas cara de Cal y la mas barata de Cemento.
e)
Cuantas bolsas de arena se compraron en total, y el promedio por compra. 
 */
/* function mostrar()
{
    let productoIngresado;
    let cantidadDeBolsas;
    let precioPorBolsa;
    let respuesta;
    let cantidadBolsasTotales;
    let porcentaje;
    let precioTotal;
    let precioTotalConDescuento;
    let bolsaMasCaraDeCal;
    let banderaBolsaMasCaraDeCal;
    let bolsaMasCaraDeCemento;
    let banderaBolsaMasCaraDeCemento;
    let contadorBolsasArena;
    let precioTotalBolsasArena;
    let promedioCompraArena;

    respuesta = "si"
    porcentaje = 0;
    cantidadDeBolsas = 0;
    precioPorBolsa = 0;
    precioTotal = 0;
    cantidadBolsasTotales = 0;
    precioTotalConDescuento = 0;
    banderaBolsaMasCaraDeCal = true;
    banderaBolsaMasCaraDeCemento = true;
    bolsaMasCaraDeCal = 0;
    bolsaMasCaraDeCemento = 0;
    contadorBolsasArena = 0;

    while (respuesta == "si") {
        productoIngresado = prompt('Ingrese el producto deseado: "arena", "cal" o "cemento"');
        while (productoIngresado != "arena" && productoIngresado != "cal" && productoIngresado != "cemento") {
        productoIngresado = prompt('Error. Ingrese el producto deseado: "arena", "cal" o "cemento"');
        }

        cantidadDeBolsas = parseInt(prompt('Ingrese la cantidad de bolsas que desea (máximo 300).'));
        while (isNaN(cantidadDeBolsas) || cantidadDeBolsas < 1 || cantidadDeBolsas > 300) {
        cantidadDeBolsas = parseInt(prompt('Error. Ingrese un número válido (máximo 300).'));
        }

        precioPorBolsa = parseInt(prompt('Ingrese el precio por bolsa'));
        while (isNaN(precioPorBolsa) || precioPorBolsa < 1 || precioPorBolsa > 10000) {
        precioPorBolsa = parseInt(prompt('Error. Ingrese un número válido'));
        }

        //d) Informar la bolsa mas cara de Cal y la mas barata de Cemento.
        if (productoIngresado == "cal") {
        if (banderaBolsaMasCaraDeCal == true) {
            bolsaMasCaraDeCal = precioPorBolsa;
            banderaBolsaMasCaraDeCal = false;
        } else if (bolsaMasCaraDeCal < precioPorBolsa) {
            bolsaMasCaraDeCal = precioPorBolsa
        }
        }

        if (productoIngresado == "cemento") {
        if (banderaBolsaMasCaraDeCemento == true) {
            bolsaMasCaraDeCemento = precioPorBolsa;
            banderaBolsaMasCaraDeCemento = false;
        } else if (bolsaMasCaraDeCemento < precioPorBolsa) {
            bolsaMasCaraDeCemento = precioPorBolsa
        }
        }

        //e)Cuantas bolsas de arena se compraron en total, y el promedio por compra.
        if (productoIngresado == "arena") {
        contadorBolsasArena = contadorBolsasArena + cantidadDeBolsas;
        precioTotalBolsasArena = precioTotalBolsasArena + precioPorBolsa * cantidadDeBolsas
        }

        cantidadBolsasTotales = cantidadBolsasTotales + cantidadDeBolsas;
        precioTotal = precioTotal + precioPorBolsa * cantidadDeBolsas;

        respuesta = prompt("¿Desea seguir ingresando productos? 'si/no'");
    }

    if (cantidadBolsasTotales > 15) {
        porcentaje = -10;
    } else if (cantidadBolsasTotales > 45) {
        porcentaje = -30;
    }

    precioTotalConDescuento = precioTotal + (precioTotal * porcentaje / 100);
    promedioCompraArena = precioTotalBolsasArena / contadorBolsasArena;

    document.write("El importe total a pagar, bruto sin descuento es de " + precioTotal + "<br>");
    document.write("El importe total a pagar con descuento es de " + precioTotalConDescuento + "<br>");
    document.write("La bolsa mas cara de cal cuesta $" + bolsaMasCaraDeCal + "<br>");
    document.write("La bolsa mas cara de cemento cuesta $" + bolsaMasCaraDeCemento + "<br>");
} */

//////////////Recu 2020 2 bis

/* Recu 2020 2 bis: /* "El cine"
De un cine se deben ingresar una cantidad indeterminada 
de venta de entradas diaria, validando los
siguientes datos:
nombre de película, precio, cantidad de entradas, tipo(3D o 4D)
a)El nombre de la película más cara de tipo 4D.
b)Informar el precio total de la venta del día.
c)El nombre de la película con menos cantidad de entradas.
d)El tipo de pelicula más vista y la cantidad de entradas. 
e)El nombre de la pelicula más barata en 3D.  */

function mostrar()
{
    let respuesta = 'si';
    let nombreIngresado;
    let precioIngresado;
    let entradasIngresadas;
    let tipoingresado;
    let peliculaMasCaraCuatroD;
    let nombrePeliculaMasCaraCuatroD;
    let banderaCuatroD = true;
    let peliculaMasBarataTresD;
    let nombrePeliculaMasBarataTresD;
    let banderaTresD = true;
    let precioTotal = 0;
    let banderaMenosEntradas = true;
    let peliculaConmenosEntradas;
    let nombrePeliculaConMenosEntradas;
    let banderaMasEntradas = true;
    let tipoPeliculaConMasEntradas;
    let peliculaConMasEntradas;

    while (respuesta == 'si') {
        nombreIngresado = prompt('Ingresar nombre de la película');

        precioIngresado = parseFloat(prompt('Ingresar precio'));
        while (isNaN(precioIngresado) || precioIngresado < 1) {
            precioIngresado = parseFloat(prompt('Ingrese una precio válido'));
        }

        entradasIngresadas = parseInt(prompt('Ingresar cantidad de entradas'));
        while (isNaN(entradasIngresadas) || entradasIngresadas < 1 || entradasIngresadas > 1000) {
            entradasIngresadas = parseInt(prompt('Ingrese una cantidad válida: (entre 1 y 1000)'));
        }

        tipoingresado = prompt('Ingresar tipo ("3D" o "4D")');
        while (tipoingresado != "3D" && tipoingresado != "4D") {
            tipoingresado = prompt('Error. Ingresar un tipo válido ("3D" o "4D")');
        }

        switch (tipoingresado) {
            case "4D":
                if (banderaCuatroD == true || peliculaMasCaraCuatroD < precioIngresado) {
                    peliculaMasCaraCuatroD = precioIngresado;
                    nombrePeliculaMasCaraCuatroD = nombreIngresado;
                    banderaCuatroD = false;
                }
                break;
            case "3D":
                if (banderaTresD == true || peliculaMasBarataTresD > precioIngresado) {
                    peliculaMasBarataTresD = precioIngresado;
                    nombrePeliculaMasBarataTresD = nombreIngresado;
                    banderaTresD = false;
                }
                break;
        }//termina switch

        precioTotal = precioTotal + precioIngresado;

        if (banderaMenosEntradas == true || peliculaConMenosEntradas > entradasIngresadas) {
            peliculaConmenosEntradas = entradasIngresadas;
            nombrePeliculaConMenosEntradas = nombreIngresado;
            banderaMenosEntradas = false;
        }

        if (banderaMasEntradas == true || peliculaConMasEntradas < entradasIngresadas) {
            peliculaConMasEntradas = entradasIngresadas;
            tipoPeliculaConMasEntradas = tipoingresado;
            banderaMenosEntradas = false;
        }

        respuesta = prompt('¿Desea seguir ingresando datos? si/no');
    }//termina ciclo while

// a)El nombre de la película más cara de tipo 4D.
    if (banderaCuatroD == false) {
        console.log('El nombre de la película más cara de tipo 4D es ' + nombrePeliculaMasCaraCuatroD);
    } else {
        console.log('No se ha ingresado una película del tipo 4D');
    }
    
// b)Informar el precio total de la venta del día.
    console.log('El precio total de la venta del día es $' + precioTotal);
// c)El nombre de la película con menos cantidad de entradas.
    console.log('El nombre de la película con menos cantidad de entradas es ' + nombrePeliculaConMenosEntradas);
// d)El tipo de pelicula más vista y la cantidad de entradas. 
    console.log('El tipo de pelicula más vista es ' + tipoPeliculaConMasEntradas + ' con una cantidad de entradas vendidas de ' + peliculaConMasEntradas);
// e)El nombre de la pelicula más barata en 3D.
    if (banderaTresD == false) {
        console.log('El nombre de la pelicula más barata en 3D es ' + nombrePeliculaMasBarataTresD);
    } else {
        console.log('No se ha ingresado una película del tipo 3D');
    }
}//termina la funcion