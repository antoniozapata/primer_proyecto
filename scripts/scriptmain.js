const productsHome = [{
    img:"../resources/productos/admin.png",
    productName: "Administrativo",
}, {
    img:"../resources/productos/axi.png",
    productName: "Ajuste por Inflacion",
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