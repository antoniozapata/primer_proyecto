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

    /*if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(campo.value)) {
      valido.innerText = "válido";
    } else {
      valido.innerText = "incorrecto";
    }*/
};

const validarComentario = function (e) {
    return formulario.comentario.value !== ""
};

const validar = function () {
    const resultadoNombre = validarNombre ();
    const resultadoPrimer = validarPrimerApellido ();
    const resultadoSegundo = validarSegundoApeliido ();
    const resultadoTelefono = validarTelefono ();
    const resultadoEmail = validarEmail ();
    const resultadoComentario = validarComentario ();
};

formulario.addEventListener ("submit",function(e) {
    e.preventDefault();
    validar();
});

}())
