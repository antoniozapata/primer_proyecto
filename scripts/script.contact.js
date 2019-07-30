(function(){

const formulario = document.getElementsByName ("formulario") [0];
const elementos = formulario.elements;
const boton = document.getElementById ("btn");

const validarNombre = function (e) {
    if (formulario.nombre.value == 0) {
        alert ("Completa el campo nombre");
        e.preventDefault();
    }
};

const validarTelefono = function (e) {
    if (/^([9,7,6]{1})+([0-9]{8})$/ == true) {
        validp.innerText = "válido"
    } else {
        valido.innerText = "incorrecto";
        alert ("Completa el campo Telefono");
        e.preventDefault();
    }
};

const validarEmail = function (e) {
    if (/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;.test(campo.value)) {
      valido.innerText = "válido";
    } else {
      valido.innerText = "incorrecto";
      e.preventDefault();
    }
};

const validarComentario = function (e) {
    if (formulario.nombre.value == 0) {
        alert ("Debes realizar un comentario");
        e.preventDefault();
    }
};

const validar = function (e) {
    validarNombre (e);
    validarTelefono (e);
    validarEmail (e);
    validarComentario (e);
};

formulario.addEventListener ("submit",validar);

}());
