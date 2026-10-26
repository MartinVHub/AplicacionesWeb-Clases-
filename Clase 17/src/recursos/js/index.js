// import productos from './productos.js' // No nombrada
import {productosMascotas} from './productos.js' // Nombrada
import {renderizarCatalogo,filtrarPorTalle} from './funciones.js'


// Referenciamos un elemento DOM
const contenedorProducto = document.getElementById("contenedor-productos")

// Select
/*
</select name="talle">
    <option value=
*/    

// Filtramos el arreglo de los productos
const productosFiltrados = filtrarPorTalle(productosMascotas, 'S')

// Renderizamos
renderizarCatalogo(contenedorProducto, productosMascotas)
