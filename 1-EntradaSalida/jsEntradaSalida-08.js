/*
Raices,Milagros DIV Z
ejercicio E/S.08
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividir;
	var divisor;
	var resultadoResto;

	dividir = txtIdNumeroDividendo.value;
	dividir = parseInt(dividir);

	divisor = txtIdNumeroDivisor.value;
	divisor = parseInt(divisor);

	resultadoResto = dividir % divisor 

	alert("su resultado es " + resultadoResto);

}



