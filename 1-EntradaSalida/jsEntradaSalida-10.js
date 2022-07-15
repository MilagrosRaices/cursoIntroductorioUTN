/*
Raices,Milagros DIV Z
ejercicio E/S.10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

function mostrarAumento()
{
	var tuImporte;
	var descuento;
	var resultado;

	tuImporte = txtIdImporte.value;
	tuImporte = parseInt(tuImporte);

	descuento = tuImporte * 25 / 100;

	resultado = tuImporte - descuento;

	document.getElementById("txtIdImporte").value = resultado; 



}
