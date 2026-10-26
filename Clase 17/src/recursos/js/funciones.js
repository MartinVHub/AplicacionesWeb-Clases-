
function renderizarCatalogo(contenedor /*es la referencia del DOM*/, productos /* es el arreglo*/) {

    let productosHTML = ''

    productosMascotas.forEach((producto) => {
        productosHTML += `
<article class="producto">
    <h3>${producto.nombre}</h3>
    <picture>
        <img src="${producto.imagen}" alt="${producto.nombre}">
    </picture>
    <p>
       ${producto.descripcion}
    </p>
    <ul>
        <li>
            Talles ${producto.talles[0]}
        </li>
        <li>
            Precio $ ${producto.precio}
        </li>
    </ul>
    <button>Agregar al carro</button>
</article>
    `
    })

    contenedor.innerHTML = productosHTML

    ///
    return productosHTML

}

// Funcion de filtrado
function filtrarPorTalle(arreglo, talle){
    //. filter -> solo dejar pasar al nuevo arreglo si en el arreglo talles tiene el talle buscado
    // Arreglo con una cadena
    return arreglo.filter((producto)=>{
        const talles = producto.talles.filter((talleEncontrado)=>{
            return tallesEncontrado === talle
        })
        return talles.lenght > 0
    })
    // indexOf ->
    // includes ()
    //  Este return es de la funcion filtrarPorTalle
    const arreglo
    // Retornar un arreglo filtrado

}

export {renderizarCatalogo, filtrarPorTalle}