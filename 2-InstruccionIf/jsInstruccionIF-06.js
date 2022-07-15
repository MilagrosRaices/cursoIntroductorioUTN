// Raices, Milagros
// Ejercicio 6
// Enunciado:
// Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o 
// adolescente (entre 13 y 17 años) o niño (menor a 13 años).

function mostrar()
{
	var edad;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad > 17)
	{
		alert("Usted es adulto");
	}
	else
	{
		if(edad > 12)
		{
			alert("Sos un adolecente");
		}
		else
		{
			alert("Eres un niño/a")
		}
	}	

}//FIN DE LA FUNCIÓN