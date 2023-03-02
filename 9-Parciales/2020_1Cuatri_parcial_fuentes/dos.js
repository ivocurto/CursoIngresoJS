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
} */

/////////////////////////////////////////Parcial 2020 2bis
/* Parcial 2020 2 bis: /"La veterinaria" pedir el ingreso de 10 mascotas  (for)
validar
tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo (prompt 4op
raza: si es perro (pastor, toy, callejero) y  
si gato (siamés, turco, Peterbald , generico) 
y si es de tipo "otros" o pájaro , pedir solo un texto
Edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre (no se permite solo numero)
mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza/ */
function mostrar() 
{
    let tipoIngresado;
    let razaIngresada;
    let edadIngresada;
    let nombreIngresado;
    let edadMasViejoPerro = 0;
    let edadMasViejoGato = 0;
    let edadMasViejoPajaro = 0;
    let edadMasViejoOtros = 0;
    let contadorSiames = 0;
    let contadorTurco = 0;
    let contadorPeterbald = 0;
    let contadorGenerico = 0;
    let banderaPerros = true;
    let banderaGatos = true;
    let banderaPajaros = true;
    let banderaOtros = true;
    let nombreMasViejoPerro;
    let nombreMasViejoGato;
    let nombreMasViejoPajaro;
    let nombreMasViejoOtros;
    let razaDeGatosConMasAnimales;
    let promedioEdadGatosMasAnimales;
    let acumuladorEdadSiames = 0;
    let acumuladorEdadTurco = 0;
    let acumuladorEdadPeterbald = 0;
    let acumuladorEdadGenerico = 0;

    for (i = 0; i < 2; i++) {
        tipoIngresado = prompt('Ingresar opciones ("gato", "perro", "pájaro" u "otros")');
        while (tipoIngresado != "gato" && tipoIngresado != "perro" && tipoIngresado != "pájaro" && tipoIngresado != "otros") {
            tipoIngresado = prompt('Error. Ingresar opciones válidas ("gato", "perro", "pájaro" u "otros")');
        }

        switch (tipoIngresado) {
            case "perro":
                razaIngresada = prompt('Ingresar opciones ("pastor", "toy" o "callejero")');
                while (razaIngresada != "pastor" && razaIngresada != "toy" && razaIngresada != "callejero") {
                    razaIngresada = prompt('Error. Ingresar opciones válidas ("pastor", "toy" o "callejero")');
                }
                edadIngresada = parseInt(prompt('Ingresar edad'));
                while (isNaN(edadIngresada) || edadIngresada < 1 || edadIngresada > 20) {
                    edadIngresada = parseInt(prompt('Ingrese una edad válida: (entre 1 y 20)'));
                }
                break;
            case "gato":
                razaIngresada = prompt('Ingresar opciones ("siamés", "turco", "Peterbald" o "generico")');
                while (razaIngresada != "siamés" && razaIngresada != "turco" && razaIngresada != "Peterbald" && razaIngresada != "generico") {
                    razaIngresada = prompt('Error. Ingresar opciones válidas ("siamés", "turco", "Peterbald" o "generico")');
                }
                edadIngresada = parseInt(prompt('Ingresar edad'));
                while (isNaN(edadIngresada) || edadIngresada < 1 || edadIngresada > 20) {
                    edadIngresada = parseInt(prompt('Ingrese una edad válida: (entre 1 y 20)'));
                }
                switch (razaIngresada) {
                    case "siamés":
                        contadorSiames = contadorSiames + 1;
                        acumuladorEdadSiames = acumuladorEdadSiames + edadIngresada;
                    case "turco":
                        contadorTurco = contadorTurco + 1;
                        acumuladorEdadTurco = acumuladorEdadTurco + edadIngresada;
                    case "Peterbald":
                        contadorPeterbald = contadorPeterbald + 1;
                        acumuladorEdadPeterbald = acumuladorEdadPeterbald + edadIngresada;
                    case "generico":
                        contadorGenerico = contadorGenerico + 1;
                        acumuladorEdadGenerico = acumuladorEdadGenerico + edadIngresada;
                }
                break;
            case "pájaro":
                razaIngresada = prompt('Ingresar raza');
                while (!isNaN(razaIngresada)) {
                    razaIngresada = prompt('Error. Ingresar raza válida');
                }
                edadIngresada = parseInt(prompt('Ingresar edad'));
                while (isNaN(edadIngresada) || edadIngresada < 1 || edadIngresada > 50) {
                    edadIngresada = parseInt(prompt('Ingrese una edad válida: (entre 1 y 50)'));
                }
                break;
            case "otros":
                razaIngresada = prompt('Ingresar raza');
                while (!isNaN(razaIngresada)) {
                    razaIngresada = prompt('Error. Ingresar raza válida');
                }
                edadIngresada = parseInt(prompt('Ingresar edad'));
                while (isNaN(edadIngresada) || edadIngresada < 1 || edadIngresada > 100) {
                    edadIngresada = parseInt(prompt('Ingrese una edad válida: (entre 1 y 100)'));
                }
                break;
        }

        nombreIngresado = prompt('Ingresar nombre');
        while (!isNaN(nombreIngresado)) {
            nombreIngresado = prompt('Error. Ingresar nombre válido');
        }

        if (tipoIngresado == "perro" && (banderaPerros == true || edadMasViejoPerro < edadIngresada)) {
            edadMasViejoPerro = edadIngresada;
            nombreMasViejoPerro = nombreIngresado;
            banderaPerros = false;
        }
        if (tipoIngresado == "gato" && (banderaGatos == true || edadMasViejoGato < edadIngresada)) {
            edadMasViejoGato = edadIngresada;
            nombreMasViejoGato = nombreIngresado;
            banderaGatos = false;
        }
        if (tipoIngresado == "pájaro" && (banderaPajaros == true || edadMasViejoPajaro < edadIngresada)) {
            edadMasViejoPajaro = edadIngresada;
            nombreMasViejoPajaro = nombreIngresado;
            banderaPajaros = false;
        }
        if (tipoIngresado == "otros" && (banderaOtros == true || edadMasViejoOtros < edadIngresada)) {
            edadMasViejoOtros = edadIngresada;
            nombreMasViejoOtros = nombreIngresado;
            banderaOtros = false;
        }
    }

    if (contadorSiames > contadorPeterbald && contadorSiames > contadorTurco && contadorSiames > contadorGenerico) {
        razaDeGatosConMasAnimales = "siamés";
        promedioEdadGatosMasAnimales = acumuladorEdadSiames / contadorSiames;
    } else if (contadorPeterbald > contadorTurco && contadorPeterbald > contadorGenerico) {
        razaDeGatosConMasAnimales = "Peterbald";
        promedioEdadGatosMasAnimales = acumuladorEdadPeterbald / contadorPeterbald;
    } else if (contadorTurco > contadorGenerico) {
        razaDeGatosConMasAnimales = "turco";
        promedioEdadGatosMasAnimales = acumuladorEdadTurco / contadorTurco;
    } else {
        razaDeGatosConMasAnimales = "generico";
        promedioEdadGatosMasAnimales = acumuladorEdadGenerico / contadorGenerico;
    }

/*  mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza */
    if (banderaPerros == false) {
        console.log("El nombre del perro mas viejo es " + nombreMasViejoPerro);
    } else {
        console.log("No se ingresaron perros");
    }

    if (banderaGatos == false) {
        console.log("El nombre del gato mas viejo es " + nombreMasViejoGato);
        console.log("La raza de gatos que tiene mas animales es " + razaDeGatosConMasAnimales + " y el promedio de edad de esta raza es " + promedioEdadGatosMasAnimales);
    } else {
        console.log("No se ingresaron gatos");
    }

    if (banderaPajaros == false) {
        console.log("El nombre del pájaro mas viejo es " + nombreMasViejoPajaro);
    } else {
        console.log("No se ingresaron pájaros");
    }

    if (banderaOtros == false) {
        console.log('El nombre del tipo "otros" mas viejo es ' + nombreMasViejoOtros);
    } else {
        console.log('No se ingresaron del tipo "otros"');
    }

}
