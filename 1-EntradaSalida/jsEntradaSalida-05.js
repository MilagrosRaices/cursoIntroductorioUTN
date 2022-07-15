/*
Raices,Milagros DIV Z
ejercicio E/S.05
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreDeUsuario;
	var edadDelUsuario;
	var mensaje

	nombreDeUsuario=txtIdNombre.value;
	edadDelUsuario=txtIdEdad.value;

	mensaje = "Su nombre es " + nombreDeUsuario + " y tiene " + edadDelUsuario + " años";
	
	alert(mensaje);
}

