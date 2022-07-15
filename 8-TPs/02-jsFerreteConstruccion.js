/* Raices, Milagros 
Ejecicio 2
2. Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var ancho;
    var largo;
    var perimetro;
    var alambreRequerido;

    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    largo = parseFloat(document.getElementById("txtIdLargo").value);

    perimetro = largo * 2 + ancho * 2
    // perimetro = largo + largo + ancho + ancho
    // 2* (largo + ancho); 

    alambreRequerido = perimetro * 3

    mensaje = "La cantidad de almabre requiedo es: ", alambreRequerido.toFixed(2);

    alert(mensaje);
    
    // Entrada
    // largo 
    // ancho
    // Proceso;
    // calcular perimetro de un rectangulo 
    // multipliacr el alambre x 3
    // Salida;
    // mensaje del la cantidad de almabre requierdo 
}
function Circulo () 
{
    var radioIngresado
    var perimetro
    var alambreRequerido
    var mensaje

    radioIngresado = parseFloat(document.getElementById("txtIdRadio").value);
    perimetro = radioIngresado * 2 * 3,14;
    alambreRequerido = perimetro * 3;
    
    mensaje = "La cantidad requerida de alambre es " + alambreRequerido.toFixed(2);
    alert(mensaje);


	// Entrada;
    // radio 
    // Proceso;
    // calcular perimetro 2* pi * radio 
    // resultado = perimetro *3
    // Salida;
    // mensaje 

}
function Materiales () 
{
    var ancho;
    var largo;
    var area;
    var bolsaCemento;
    var bolsaCal;
    var mensaje;

    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    largo = parseFloat(document.getElementById("txtIdLargo").value);

    area = largo * ancho;
    bolsaCemento = area * 2; 
    bolsaCal = area * 3;

    mensaje = "se necesitan " + bolsaCemento + " bolsas de cementos y " + bolsaCal + " bolsas de cal";
    alert(mensaje);

	// Entrada;
    // largo
    // ancho
    // Proceso;
    // cualcular el area
    // multiplicar area x polsa de cemenoto y cal
    // Salida;
    // alert mostrnado resulados de la cantidad e bolsas
}