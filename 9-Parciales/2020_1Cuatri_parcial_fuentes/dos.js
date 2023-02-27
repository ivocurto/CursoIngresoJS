/* Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro */
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
  let banderaTipoMayorCantidad;
  let tipoMayorCantidad;
  let mayorCantidadBolsas;

  respuesta = "si"
  porcentaje = 0;
  banderaTipoMayorCantidad = true;
  cantidadDeBolsas = 0;
  precioPorBolsa = 0;
  mayorCantidadBolsas = 0;
  precioTotal = 0;
  cantidadBolsasTotales = 0;
  precioTotalConDescuento = 0;

  while (respuesta == "si") {
    productoIngresado = prompt('Ingrese el producto deseado: "arena", "cal" o "cemento"');
    while (productoIngresado != "arena" && productoIngresado != "cal" && productoIngresado != "cemento") {
      productoIngresado = prompt('Error. Ingrese el producto deseado: "arena", "cal" o "cemento"');
    }

    cantidadDeBolsas = parseInt(prompt('Ingrese la cantidad de bolsas que desea'));
    while (isNaN(cantidadDeBolsas) || cantidadDeBolsas < 1) {
      cantidadDeBolsas = parseInt(prompt('Error. Ingrese un número válido'));
    }

    precioPorBolsa = parseInt(prompt('Ingrese el precio por bolsa'));
    while (isNaN(precioPorBolsa) || precioPorBolsa < 1) {
      precioPorBolsa = parseInt(prompt('Error. Ingrese un número válido'));
    }

    if (banderaTipoMayorCantidad == true) {
      tipoMayorCantidad = productoIngresado;
      mayorCantidadBolsas = cantidadDeBolsas;
      banderaTipoMayorCantidad = false;
    } else if (mayorCantidadBolsas < cantidadDeBolsas) {
      tipoMayorCantidad = productoIngresado;
      mayorCantidadBolsas = cantidadDeBolsas;
    }

    cantidadBolsasTotales = cantidadBolsasTotales + cantidadDeBolsas;
    precioTotal = precioTotal + precioPorBolsa * cantidadDeBolsas;

    respuesta = prompt("¿Desea seguir ingresando productos? 'si/no'");
  }

  if (cantidadBolsasTotales > 10) {
    porcentaje = -15;
  } else if (cantidadBolsasTotales > 30) {
    porcentaje = -30;
  }

  precioTotalConDescuento = precioTotal + (precioTotal * porcentaje / 100);

  document.write("El importe total a pagar, bruto sin descuento es de " + precioTotal + "<br>");
  document.write("El importe total a pagar con descuento es de " + precioTotalConDescuento + "<br>");
  document.write("El tipo con mas cantidad de bolsas es " + tipoMayorCantidad + "<br>");
}
