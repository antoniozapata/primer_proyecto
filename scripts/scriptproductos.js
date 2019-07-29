const products = [{
    img: "../resources/productos/admin.png",
    imgFlag: "../resources/productos/bandera_ven.png",
    code: "NSAWL",
    productName: "Administrativo",
    url: "./products-admin.html",
}, {
    img: "../resources/productos/axi.png",
    imgFlag: "../resources/productos/bandera_ven.png",
    code: "NAXIP",
    productName: "Ajuste por Inflación",
    url: "./products-axi.html",
}, {
    img: "../resources/productos/cont1.png",
    imgFlag: "../resources/productos/bandera_ven.png",
    code: "NCONL",
    productName: "Contabilidad General",
    url: "./products-contabil.html",
}, {
    img: "../resources/productos/der.png",
    imgFlag: "../resources/productos/bandera_ven.png",
    code: "NDERL",
    productName: "Declaraciones",
    url: "./products-der.html",
}, {
    img: "../resources/productos/iva.png",
    imgFlag: "../resources/productos/bandera_ven.png",
    code: "NIVAL",
    productName: "Impuesto al Valor Agregado",
    url: "./products-iva.html",
}, {
    img: "../resources/productos/nom.png",
    imgFlag: "../resources/productos/bandera_ven.png",
    code: "NNOMP",
    productName: "Nomina Profesional",
    url: "./products-nom.html",
}, {
    img: "../resources/productos/ret.png",
    imgFlag: "../resources/productos/bandera_ven.png",
    code: "NRET",
    productName: "Retenciones",
    url: "./products-ret.html",
}];

products.forEach((prod) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("class", "container-ficha-sistema");

    const containerImgSistema = document.createElement("div");
    containerImgSistema.setAttribute("class", "container-img-sistema");

    const fichaProducto = document.createElement("div");

    const linkTo = document.createElement("a");
    linkTo.setAttribute("href", prod.url);
    linkTo.setAttribute("class", "");

    const imgProd = document.createElement("img");
    imgProd.setAttribute("src", prod.img);
    imgProd.setAttribute("alt", "");
    imgProd.setAttribute("class", "galac-iconoproducto")

    const imgFlag = document.createElement("img");
    imgFlag.setAttribute("src", prod.imgFlag);
    imgFlag.setAttribute("alt", "");
    imgFlag.setAttribute("class", "galac_bandera-ven")

    const productCode = document.createElement("p");

    const moreInfo = document.createElement("p");
    moreInfo.setAttribute("class", "boton-masinfo")
    
    const productName = document.createElement("h3");

    /*linkTo.href = prod.url este se utiliza para cambiar el valor del atributo*/
    const ul = document.querySelector(".products-section ul");
    ul.appendChild(listItem);

    listItem.appendChild(linkTo);
    linkTo.appendChild(containerImgSistema);
    containerImgSistema.appendChild(imgProd);
    linkTo.appendChild(fichaProducto);
    fichaProducto.appendChild(imgFlag);
    fichaProducto.appendChild(productCode);
    fichaProducto.appendChild(productName);
    fichaProducto.appendChild(moreInfo);

    productCode.innerHTML = prod.code;
    productName.innerHTML = prod.productName;
    moreInfo.innerHTML = "Más Información";
});