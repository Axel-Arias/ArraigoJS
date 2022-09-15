const botonesGet = document.getElementsByClassName('buttonFav'); //Obtengo los HTMLelements
const botones = Array.prototype.slice.call(botonesGet); //Los paso a un array.

botones.forEach( element => {
    element.onclick = () => {
        alert("¡Has agregado esta planta a favoritos!")
    }
})