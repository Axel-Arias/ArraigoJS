const productos = []
let carrito = []

class producto {
    constructor(id, nombre, precio, img, desc = ''){
    this.id = id
    this.nombre = nombre
    this.precio = precio
    this.img = img
    this.desc = desc
    }
    desplegarProductos(){
        const card = `
            <div class="card" style="width: 18rem;">
                <img src="${this.img}" class="card-img-top" id="ImagenProducto" alt="imagen de producto">
                     <div class="card-body">
                         <h5>${this.nombre}</h5>
                         <p class="card-text">${this.desc}</p>
                     </div>
                     <div>
                         <h5>$${this.precio}</h5>
                     </div>
                     <div class="btn-container">
                          <button id=${this.id} class='btnAgregar'>Agregar al carrito</button>
                     </div>
            </div>
        `
        const container = document.getElementById('container')
        container.innerHTML += card
    }
    agregarEvento(){
        const btnAgregar = document.getElementById(this.id)
        const productoEncontrado = productos.find(product => product.id == this.id)
        btnAgregar.addEventListener('click',() => agregarAlCarrito(productoEncontrado))
    }
}

let prod1 = new producto('001','Echeveria Peacockii', 200,'../Multimedia/Images/imagen de producto.jpg', 'Destaca por ser una especie atractiva y fácil de cuidar ya que crece fácilmente al aire libre o en interiores. Ideal para principiantes.')
let prod2 = new producto('002','Gymnocalycium Sp.', 350,'../Multimedia/Images/imagen_de_producto1.png', 'Es una especie de tamaño pequeño (entre 5 o 15 cm), aunque algunos pueden alcanzar los 30 cm de diámetro. En verano suelen ser muy atractivas por su floración.')
let prod3 = new producto('003','Cereus Peruvianus', 180,'../Multimedia/Images/imagen_de_producto2.png', 'Tambien llamados "Torrecillas de hadas", apreciadas por su forma columnar y sus particulares flores procedentes de un tallo alargado.')
let prod4 = new producto('004','Haworthiopsis Fasciata', 220,'../Multimedia/Images/imagen_de_producto3.jpg', 'Especie procedente de Sudáfrica conocida popularmente como Haworthia Cebra ya que posee rayas horizontales que nos recuerdan a las rayas de este animal.')
let prod5 = new producto('005','Haworthia Cymbiformis', 380,'../Multimedia/Images/imagen_de_producto4.jpg', 'La especie de Haworthia mas comun. Muy llamativa debido a sus hojas carnosas donde almacena grandes cantidades de agua.')
let prod6 = new producto('006','Haworthia Cooperi', 400,'../Multimedia/Images/imagen_de_producto5.jpg', 'La especie de Haworthia mas buscada, esto debido a sus hojas casi transparentes que refractan la luz generando muy bellos colores.')
let prod7 = new producto('007','Haworthiopsis Attenuata', 100,'../Multimedia/Images/imagen_de_producto6.jpg', 'No confundir con su hermana (Haworthiopsis fasciata). Se diferencian con hojas mas anchas y lineas blancas mas largas.')
let prod8 = new producto('008','Echeveria Topsi Turvy', 200,'../Multimedia/Images/imagen_de_producto7.jpg', 'Son de colores verde grisaceos y se caracterizan por sus hojas con forma alargada y curvada con los extremos arqueados.')
let prod9 = new producto('009','Echeveria Setosa', 240,'../Multimedia/Images/imagen_de_producto8.jpg', 'Bella suculenta de hojas carnosas, surgen en rosetas, son de colores verde claro y estan cubiertas de finos pelitos blanquecinos.')


productos.push(prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9)

productos.forEach(e =>{
e.desplegarProductos()
})
productos.forEach(e =>{
    e.agregarEvento()
    })

function agregarAlCarrito(producto){

    const enCarrito = carrito.find(prod => prod.id == producto.id)
    
 
    if (!enCarrito){
        carrito.push({...producto, cantidad: 1})
    }else{
        let carritoFiltrado = carrito.filter(prod => prod.id != producto.id)
        carrito = [
            ...carritoFiltrado,
            {...enCarrito, cantidad: enCarrito.cantidad + 1}
        ]
    }
    contador.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Planta agregada al carrito',
        showConfirmButton: false,
        timer: 1500
      })
}

const contador = document.getElementById('cartCounter')
contador.innerHTML = carrito.reduce((acc, prod) => acc + prod.cantidad, 0)



let botonPlantaSugerida = document.getElementById("botonPlantaSugerida");
botonPlantaSugerida.onclick = (e) => {

    let seccionRecomendacion = document.createElement("div");

        fetch("../plantas.json")
            .then(respuesta => respuesta.json())
            .then(result => {
                let datos = result;
                let planta = datos[Math.floor(Math.random() * ((datos.length+1) - 1) + 1)].planta;
                console.log(planta)

                seccionRecomendacion.innerHTML = `<div class="sectionContainer">
                                <div class="sectionRecomendacion">
                                    <p>${planta} </p>
                                    <a href="productos.html"> Volver </a>
                                </div>
                            
                            </div>;`

            })
            .catch(error => console.log(error))


    document.body.appendChild(seccionRecomendacion);
}

