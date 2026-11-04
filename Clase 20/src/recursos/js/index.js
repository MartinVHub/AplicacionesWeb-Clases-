import productos from './productos.js' // No nombrada
import {productosMascotas} from './productos.js' // Nombrada
import {renderizarCatalogo,filtrarPorTalle} from './funciones.js'

// Trabajo con persistencia de datos -> local storage

const arreglo = [1,2,3,4]
const valorAguardar = JSON.stringify(arreglo) //-> "[1,2,3,4]"
// const valorAguardar = "[1,2,3,4]"
localStorage.setItem('materia',valorAguardar)

const valor = localStorage.getItem('materia') //<-- siempre va a ser una cadena

const valorConvertidoNuevamenteAArreglo = JSON.parse(valor)

console.log(typeof valorConvertidoNuevamenteAArreglo)

// obtener los datos de productos almacenados en un JSON

async function obtenerDatos(){
    
    const respuesta = await fetch('./recursos/datos/productos.json')
    const datos = await respuesta.json()

    return datos
}
const productosMascota = await obtenerDatos()
obtenerDatos().then((datos)=>{
    console.log(datos)
})
// Referenciamos un elemento DOM
const contenedorProducto = document.getElementById("contenedor-productos")
const eventoButton = document.getElementById('evento-boton')
const dialogo = document.getElementById('dialogo')
const carro = document.getElementById('carro')

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
        const idProducto = parseInt(boton.dataset.id)
        console.log(idProducto)
        productosCarrito.push(idProducto)
        console.log(productosCarrito)
        botonesCarro.textContent = productosCarrito-lenght
    })
})

