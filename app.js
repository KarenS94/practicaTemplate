const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const btnBotones = document.querySelectorAll(".btn ");
const fragment = document.createDocumentFragment();

const carritoProducto = {}


const agregarAlCarrito = (e) => {
    console.log(e.target.dataset.fruta)

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    }
    if(carritoProducto.hasOwnProperty(producto.titulo)){
        producto.cantidad= carritoProducto[producto.titulo].cantidad + 1
    }
       
    
       carritoProducto[producto.titulo] = producto

     pintarCarrito()
    }

const pintarCarrito = () => {
    carrito.textContent = ""

   Object.values(carritoProducto).forEach((item) => {
        const clone = template.content.firstElementChild.cloneNode(true)
        clone.querySelector(".lead").textContent = item.titulo
        clone.querySelector(".badge").textContent = item.cantidad
        
        fragment.appendChild(clone)
    })

    carrito.appendChild(fragment)
}

btnBotones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito))
