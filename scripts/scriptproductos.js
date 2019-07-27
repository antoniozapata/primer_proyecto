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
}];

products.forEach((prod) => {
    const listItem = document.createElement("li");
    const containerImgSistema = document.createElement("div");
    const fichaProducto = document.createElement("div");
    const linkTo = document.createElement("a");
    const imgProd = document.createElement("img");
    const imgFlag = document.createElement("img")
    const productCode = document.createElement("p");
    const moreInfo = document.createElement("p");
    const productName = document.createElement("h3");

    /*linkTo.href = prod.url este se utiliza para cambiar el valor del atributo*/
    linkTo.setAttribute("href", prod.url);
    linkTo.setAttribute("class", "container-ficha-sistema");

    imgProd.setAttribute("src", prod.img);
    imgProd.setAttribute("alt", "");

    imgFlag.setAttribute("src", prod.imgFlag);
    imgFlag.setAttribute("alt", "");
    
    const ul = document.querySelector(".galac_listadeprogramas ul");
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
    

    
})