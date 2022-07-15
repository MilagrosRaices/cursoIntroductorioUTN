/*
Raices,Milagros DIV Z
ejercicio E/S.07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;

	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt(numeroUno);

	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt(numeroDos);

	suma = numeroUno + numeroDos;

	alert(`su resultado es : ${suma}`);
}

function restar()
{
	var numero1;
	var numero2;
	var resta;

	numero1 = txtIdNumeroUno.value;
	numero1 = parseInt(numero1);

	numero2 = txtIdNumeroDos.value;
	numero2 = parseInt(numero2);

	resta = numero1 - numero2;

	alert(`su resultado es : ${resta}`);
}

function multiplicar()
{ 
	var NumeroUno;
	var NumeroDos;
	var multiplicacion;

	NumeroUno = txtIdNumeroUno.value;
	NumeroUno = parseInt(NumeroUno);

	NumeroDos =  txtIdNumeroDos.value;
	NumeroDos = parseInt(NumeroDos)

	multiplicacion = NumeroUno * NumeroDos;

	alert(`su resultado es : ${multiplicacion}`);
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var divison;

	primerNumero = txtIdNumeroUno.value;
	primerNumero = parseInt(primerNumero);

	segundoNumero =  txtIdNumeroDos.value;
	segundoNumero = parseInt(segundoNumero);

	divison = primerNumero/segundoNumero;
	
	alert(`su resultado es : ${divison}`);
	
	
}

