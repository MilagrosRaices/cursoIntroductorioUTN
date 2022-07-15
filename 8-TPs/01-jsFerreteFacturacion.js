/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;
    var mensaje;

    precioUno = txtIdPrecioUno.value;
    precioDos = txtIdPrecioDos.value;
    precioTres = txtIdPrecioTres.value;

    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    suma = precioUno + precioDos + precioTres;

    mensaje = ("el total es ", suma);

    alert(mensaje);

	// entradas; 
    // 3 variables precios 
    // procesos;
    // sumar
    // salidas;
    // mostrar resultados
}
function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var resultado
    var promedio;
    var mensaje;

    precioUno = parseFloat(document.getElementById("txtPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtPrecioTres").value);
    
    resultado = (precioUno + precioDos + precioTres);

    promedio = resultado / 3;

    mensaje = ("el promedio es " + promedio.toFixed(2));

    alert(mensaje);
}
function PrecioFinal () 
{
   var precioUno;
   var precioDos;
   var precioTres;
   var suma;
   var IVA ;
   var precioFinal
   var mensaje;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = precioUno + precioDos + precioTres;
    IVA = suma * 0.21;
    precioFinal = suma + IVA; 

    mensaje = "su precio final es: " + precioFinal.toFixed(2);

    alert(mensaje);
   
    // Entradas;
    // var tres precios 
    // tomas los valores ID de los precios
    // parsear con Float los precios 
	// Procesos;
    // suma de los tres precioDos
    // multiplicar resultados por 0,21
    // sumar al total de los tres precioDos
    // Salidas;
    // mesanje con alert
}