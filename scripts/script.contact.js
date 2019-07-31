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

    if (resultadoNombre === false) {
        const camposFaltantes = document.createElement("div");
        const campoMensaje = document.createElement("p");
        campoMensaje.setAttribute("class", "container-mensaje");

        const mainSection = document.querySelector(".container-form");
        mainSection.appendChild(camposFaltantes);

        camposFaltantes.appendChild(campoMensaje);
        campoMensaje.innerHTML = "Complete el campo Nombre";        
    }
};

formulario.addEventListener ("submit",function(e) {
    e.preventDefault();
    validar();
});
}());
