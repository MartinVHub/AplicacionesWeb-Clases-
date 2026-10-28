import productos from './productos.js' // No nombrada
import {productosMascotas} from './productos.js' // Nombrada
import {renderizarCatalogo,filtrarPorTalle} from './funciones.js'


// Referenciamos un elemento DOM
const contenedorProducto = document.getElementById("contenedor-productos")
const eventoButton = document.getElementById('evento-boton')
const dialogo = document.getElementById('dialogo')

// Arreglo productos

const productos
// Escuchador
eventoBoton.addEventListener('click', (evento)=>{
    // console.log(evento)
    dialogo.showModal()
})



// Select
/*
</select name="talle">
    <option value=
*/    

// Filtramos el arreglo de los productos
const productosFiltrados = filtrarPorTalle(productosMascotas, 'S')

// 1)Renderizamos
renderizarCatalogo(contenedorProducto, productosFiltrados)
// 2) Aplicamos los escuchadores
const botonesCarro = contenedorProductos.querySelectorAll('.boton-agregar-carro')

botonesCarro.forEach((boton)=>{
    // Cuerpo forEach
    boton.addEventListener('click', (evento)=>{
        // Cuerpo del callback listener
        // const idProducto = boton.dataset.id
        const idProducto = parseInt
        console.log(idProducto)
        productosCarrito.push(idProducto)
        console.log(productosCarrito)
    })
})

