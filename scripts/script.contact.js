(function(){

const formulario = document.getElementsByName ("formulario") [0];
const elementos = formulario.elements;
const boton = document.getElementById ("btn");

const validarNombre = function (e) {
    return formulario.nombre.value !== ""
};

const validarPrimerApellido = function (e) {
    return formulario.primer_apellido.value !== ""
};

const validarSegundoApellido = function (e) {
    return formulario.segundo_apellido.value !== ""
};

const validarTelefono = function (e) {
    return formulario.telefono.value !== ""
};

const validarEmail = function (e) {
    return formulario.email.value !== ""
};

const validarComentario = function (e) {
    return formulario.comentario.value !== ""
};

const validar = function () {
    const resultadoNombre = validarNombre ();
    const resultadoPrimer = validarPrimerApellido ();
    const resultadoSegundo = validarSegundoApellido ();
    const resultadoTelefono = validarTelefono ();
    const resultadoEmail = validarEmail ();
    const resultadoComentario = validarComentario ();

    const camposFaltantes = document.createElement("div");

    if (resultadoNombre === false) {
        const campoMensaje = document.createElement("p");
        campoMensaje.setAttribute("class", "container-mensaje");
        campoMensaje.append("Complete el campo nombre");
        campoMensaje.classList.add("container-mensaje");
        camposFaltantes.appendChild(campoMensaje);
    } 
    
    if (resultadoPrimer === false) {
        const campoMensaje = document.createElement("p");
        campoMensaje.append("Complete el campo Primer Apellido");
        campoMensaje.classList.add("container-mensaje");
        camposFaltantes.appendChild(campoMensaje);
    }
    
    if (resultadoSegundo === false) {
        const campoMensaje = document.createElement("p");
        campoMensaje.append("Complete el campo Segundo Apellido");
        campoMensaje.classList.add("container-mensaje");
        camposFaltantes.appendChild(campoMensaje);
    }
    
    if (resultadoTelefono === false) {
        const campoMensaje = document.createElement("p");
        campoMensaje.append("Complete el campo Telefono");
        campoMensaje.classList.add("container-mensaje");
        camposFaltantes.appendChild(campoMensaje);
    }
        
    if (resultadoEmail === false) {
        const campoMensaje = document.createElement("p");
        campoMensaje.append("Complete el campo email");
        campoMensaje.classList.add("container-mensaje");
        camposFaltantes.appendChild(campoMensaje);
    }

    if (resultadoComentario === false) {
        const campoMensaje = document.createElement("p");
        campoMensaje.append("Complete el campo comentario");
        campoMensaje.classList.add("container-mensaje");
        camposFaltantes.appendChild(campoMensaje);
    }

    const mainSection = document.querySelector(".container-form");
    mainSection.appendChild(camposFaltantes);
    
};

formulario.addEventListener ("submit",function(e) {
    e.preventDefault();
    validar();
});
}());
