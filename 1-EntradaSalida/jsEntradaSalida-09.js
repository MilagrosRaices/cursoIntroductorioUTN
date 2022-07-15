/*
Raices,Milagros DIV Z
ejercicio E/S.09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

function mostrarAumento()
{
	var pago
	var aumento
	var resultadoDeAumento

	pago = txtIdSueldo.value;
	pago = parseInt(pago);

	aumento = txtIdResultado.value;
	aumento = parseInt(aumento);

	aumento = pago * 10 / 100;
	resultadoDeAumento = pago + aumento;

	
	document.getElementById("txtIdResultado").value = aumento; 
}
