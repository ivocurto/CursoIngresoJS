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
function mostrar()
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
}
