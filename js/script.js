var formDatos = document.getElementById("formDatos");

formDatos.onsubmit = realizarPeticionCrear; // 1

var url = "http://localhost:8080/wishlists";


// Realiza una peticion para obtener datos
function cargarElementos(){
	var request = new XMLHttpRequest();
	request.onreadystatechange = procesarRespuesta;
	// Configurar peticion
	request.open("GET", url, true);
	request.send();
}

// Realizar una peticion para mandar datos
function realizarPeticionCrear(e){
	e.preventDefault();
	var datosFormulario = crearDatosEnviar();
	var request = new XMLHttpRequest();
	request.onreadystatechange = procesarRespuestaCrear;
	request.open("POST", url, true);
	request.setRequestHeader("Content-Type", "application/json"); //2
	request.send(datosFormulario);
}

// Procesa la respuesta que recibe de mandar datos
function procesarRespuestaCrear(){
	if(this.readyState == 4 && this.status == 200){
		var notificacionElement = document.createElement("h4");
		notificacionElement.innerText="Se registro con exito";
		document.body.appendChild(notificacionElement);
	}
}

// Moldeo datos para enviar
function crearDatosEnviar(){
	var txtNombre = document.getElementById("txtNombre");
	var valor = txtNombre.value;
	var object = {
		nombre: valor
	};
	return JSON.stringify(object); //3
}

// Procesa la respuesta de los datos obtenidos
function procesarRespuesta(){
	if(this.readyState == 4 && this.status == 200){
		var respuesta = this.responseText;
		console.log(respuesta);
		// Deserializar
		var listaObjetos = JSON.parse(respuesta);
		crearLista(listaObjetos);
	}
}

// Actualizar mi documento HTML a través de DOM
function crearLista(lista){
	//CRUD
	var listaElement = document.getElementById("elementos");
	for (let item of lista) {
		// Crear elemento li
		let itemElement = document.createElement("li");
		let nombreElement = document.createElement("h2");
		// Configurar elemento
		nombreElement.innerText = item.nombre;

		itemElement.appendChild(nombreElement);
		// Crearlo en el documento
		listaElement.appendChild(itemElement);
	}
}


function crearSublista(lista){
	var listaElement = document.createElement("ul");

}










