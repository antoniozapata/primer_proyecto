const productsHome = [{
    img:"../resources/productos/admin.png",
    productName: "Administrativo"
}, {
    img:"../resources/productos/axi.png",
    productName: "Ajuste por Inflacion"
}, {
    img:"../resources/productos/cont1.png",
    productName: "Contabilidad General"
}, {
    img:"../resources/productos/der.png",
    productName: "Declaraciones"
}, {
    img:"../resources/productos/iva.png",
    productName:"Iva y Renta"
}, {
    img:"../resources/productos/nom.png",
    productName:"Nomina Profesional"
}];

productsHome.forEach((prod) => {
    const listProd = document.createElement("li");

    const imgProdHome = document.createElement("img");
    imgProdHome.setAttribute("src", prod.img);
    imgProdHome.setAttribute("alt", "");
    imgProdHome.setAttribute("class", "galac-iconoproducto");

    const productName = document.createElement("p");
    productName.setAttribute("class", "boton");

    const ul = document.querySelector(".container_productos");
    ul.appendChild(listProd);

    listProd.appendChild(imgProdHome);
    listProd.appendChild(productName);

    productName.innerHTML = prod.productName;
});

const aliadoNegocio = [{
    imgAli:"../resources/main/aliado_ccs.png",
    nameAli: "Caracas"
}, {
    imgAli:"../resources/main/aliado_cdbolivar.jpg",
    nameAli:"Ciudad Bolivar"
}. {
    imgAli:"../resources/main/aliado_miranda.png",
    nameAli:"Miranda"
}, {
    imgAli:"../resources/main/aliado_lara.jpg",
    nameAli: "Lara"
}];

aliadoNegocio.forEach((aliado) => {
    const listAliado = document.createElement("li");

    const imgAliado = document.createElement("img");
    imgAliado.setAttribute("src", aliado.imgAli);
    imgAliado.setAttribute("alt", "");

    const ulAli = document.querySelector(".aliados_negocio");
    ulAli.appendChild(listAliado);

    listAliado.appendChild(imgAliado);

});