// Ejecicio 03
//Raices, Milagros
// Enunciado:
// Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.

function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad >= 18 ){
		alert("Usted cumple la mayoria de edad");
	}
	else{
		alert("Usted no cumple con la mayoria de edad");
	}

}