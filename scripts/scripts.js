(function(){
    const botonMenu = document.querySelector('.boton-menu span');
    botonMenu.addEventListener("click", function(){
        if (botonMenu("class") == "icon icon-menu"); {
            botonMenu.className = "icon icon-cancel"
        }

    });
}());