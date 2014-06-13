window.addEventListener('load',inicializarEventos,false);

function inicializarEventos(e)
{
	var botonNuevo=document.getElementById('botonnuevo');
	botonNuevo.addEventListener('click',cargarNuevo,false);
	var botonEntrada=document.getElementById('botonentrada');
	botonEntrada.addEventListener('click',cargarEntrada,false);
	var botonEnviados=document.getElementById('botonenviados');
	botonEnviados.addEventListener('click',cargarEnviados,false);
	mostrarFechaHora();

}

function enviarMail()
{
  var nom=document.getElementById('nombre').value;
  var destin=document.getElementById('email').value;
  var asun=document.getElementById('asunto').value;
  var mens=document.getElementById('mensaje').value;
  alert('Nombre:' + nom + ', destino:' + destin + ', asunto:' + asun + ', mensaje:' + mens);
}

function mostrarFechaHora()
  {
    var fecha
    fecha=new Date();
    var labelamostrar=document.getElementById('fechayhora').value;
    var stringmostrar='Hoy es ' + fecha.getDate()+'/'+(fecha.getMonth()+1)+'/' +fecha.getFullYear();
    <!--labelamostrar.write(stringmostrar);-->

  }

function cargarNuevo()
{
	while (contenedorprincipal.hasChildNodes()) {
		contenedorprincipal.removeChild(contenedorprincipal.lastChild);
	}

	var contenedor=document.getElementById('contenedorprincipal');

	var parrafo=document.createElement('p'); 
  	var texto=document.createTextNode('Enviar');
  	parrafo.appendChild(texto);
  	contenedor.appendChild(parrafo);
  	contenedor.appendChild(document.createElement('br'));

  	var formulario=document.createElement('form');

  	var labelNombre=document.createElement('label'); 
  	var textoLabelNombre=document.createTextNode('Ingrese su nombre:');
  	labelNombre.appendChild(textoLabelNombre);
  	formulario.appendChild(labelNombre);
  	var inputNombre = document.createElement('input');
  	inputNombre.type = 'text';
  	inputNombre.id = 'nombre';
  	inputNombre.size = '34';
  	formulario.appendChild(inputNombre);
  	formulario.appendChild(document.createElement('br'));

  	var labelEmailDestino=document.createElement('label'); 
  	var textoLabelEmailDestino=document.createTextNode('Ingrese email destino:');
  	labelEmailDestino.appendChild(textoLabelEmailDestino);
  	formulario.appendChild(labelEmailDestino);
  	var inputEmail = document.createElement('input');
  	inputEmail.type = 'text';
  	inputEmail.id = 'email';
  	inputEmail.size = '34';
  	formulario.appendChild(inputEmail);
  	formulario.appendChild(document.createElement('br'));

  	var labelAsunto=document.createElement('label'); 
  	var textoLabelAsunto=document.createTextNode('Ingrese asunto:');
  	labelAsunto.appendChild(textoLabelAsunto);
  	formulario.appendChild(labelAsunto);
  	var inputAsunto = document.createElement('input');
  	inputAsunto.type = 'text';
  	inputAsunto.id = 'asunto';
  	inputAsunto.size = '34';
  	formulario.appendChild(inputAsunto);
  	formulario.appendChild(document.createElement('br'));

  	var textAreaMensaje = document.createElement('textarea');
  	textAreaMensaje.id = 'mensaje';
  	textAreaMensaje.rows = '10';
  	textAreaMensaje.cols = '50';
  	formulario.appendChild(textAreaMensaje);
  	formulario.appendChild(document.createElement('br'));

  	var botonEnviar = document.createElement('input');
  	botonEnviar.type = 'button';
  	botonEnviar.value = 'Enviar';
  	botonEnviar.addEventListener('click',enviarMail,false);
  	formulario.appendChild(botonEnviar);
  	var botonBorrar = document.createElement('input');
  	botonBorrar.type = 'reset';
  	botonBorrar.value = 'Borrar';
  	formulario.appendChild(botonBorrar);

  	contenedor.appendChild(formulario);
}

function cargarEntrada()
{
	while (contenedorprincipal.hasChildNodes()) {
		contenedorprincipal.removeChild(contenedorprincipal.lastChild);
	}

	var contenedor=document.getElementById('contenedorprincipal');
	var parrafo=document.createElement('p'); 
  	var texto=document.createTextNode('Bandeja Entrada');
  	parrafo.appendChild(texto);
  	contenedor.appendChild(parrafo);
  	contenedor.appendChild(document.createElement('br'));

  	var tablaEntrada = document.createElement('table');
  	tablaEntrada.border = '3';
  	tablaEntrada.id = 'tablabandejaentrada';

  	var filacabecera = document.createElement('tr');
  	var celdacabeceraemail = document.createElement('th');
  	var textoceldacabeceraemail=document.createTextNode('email origen');
  	celdacabeceraemail.appendChild(textoceldacabeceraemail);
  	filacabecera.appendChild(celdacabeceraemail);
  	var celdacabeceraasunto = document.createElement('th');
  	var textoceldacabeceraasunto=document.createTextNode('asunto');
  	celdacabeceraasunto.appendChild(textoceldacabeceraasunto);
  	filacabecera.appendChild(celdacabeceraasunto);

  	tablaEntrada.appendChild(filacabecera);

  	var filaprimera = document.createElement('tr');
  	var celdaemail = document.createElement('td');
  	var textoceldaemail=document.createTextNode('gucho@dmail.com');
  	celdaemail.appendChild(textoceldaemail);
  	filaprimera.appendChild(celdaemail);
  	var celdaasunto = document.createElement('td');
  	var textoceldaasunto=document.createTextNode('informacion importante');
  	celdaasunto.appendChild(textoceldaasunto);
  	filaprimera.appendChild(celdaasunto);

  	tablaEntrada.appendChild(filaprimera);

  	contenedor.appendChild(tablaEntrada);

}

function cargarEnviados()
{
	while (contenedorprincipal.hasChildNodes()) {
		contenedorprincipal.removeChild(contenedorprincipal.lastChild);
	}

	var contenedor=document.getElementById('contenedorprincipal');
	var parrafo=document.createElement('p'); 
  	var texto=document.createTextNode('Enviados');
  	parrafo.appendChild(texto);
  	contenedor.appendChild(parrafo);
  	contenedor.appendChild(document.createElement('br'));

  	var tablaEnviados = document.createElement('table');
  	tablaEnviados.border = '3';
  	tablaEnviados.id = 'tablamailsenviados';

  	var filacabecera = document.createElement('tr');
  	var celdacabeceraemail = document.createElement('th');
  	var textoceldacabeceraemail=document.createTextNode('email destino');
  	celdacabeceraemail.appendChild(textoceldacabeceraemail);
  	filacabecera.appendChild(celdacabeceraemail);
  	var celdacabeceraasunto = document.createElement('th');
  	var textoceldacabeceraasunto=document.createTextNode('asunto');
  	celdacabeceraasunto.appendChild(textoceldacabeceraasunto);
  	filacabecera.appendChild(celdacabeceraasunto);
  	
  	tablaEnviados.appendChild(filacabecera);

  	var filaprimera = document.createElement('tr');
  	var celdaemail = document.createElement('td');
  	var textoceldaemail=document.createTextNode('pepe@dmail.com');
  	celdaemail.appendChild(textoceldaemail);
  	filaprimera.appendChild(celdaemail);
  	var celdaasunto = document.createElement('td');
  	var textoceldaasunto=document.createTextNode('informacion importante');
  	celdaasunto.appendChild(textoceldaasunto);
  	filaprimera.appendChild(celdaasunto);

  	tablaEnviados.appendChild(filaprimera);

  	var filavacia = document.createElement('tr');
  	var celdaemail = document.createElement('td');
  	filavacia.appendChild(celdaemail);
  	var celdaasunto = document.createElement('td');
  	filavacia.appendChild(celdaasunto);

  	tablaEnviados.appendChild(filavacia);

  	contenedor.appendChild(tablaEnviados);

}