// Raices, Milagros;
// Ejercicio 08
// Enunciado:
// Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
// pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'

function mostrar()
{
	var edad;
	var estadoCivilActual;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	estadoCivilActual = document.getElementById("estadoCivil").value;
	
	if(estadoCivilActual == "Soltero" && edad > 17)
	{
		alert("Es soltero y no es menor.")
	}

}//FIN DE LA FUNCIÓN

//