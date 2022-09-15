let opcion,opcionCompras = -1;
let carrito = [];
let misCompras = "";

function mostrarCompras(){
    misCompras = "";
    for (let index = 0; index < carrito.length; index++) {
        misCompras += `- ${carrito[index]}\n`;
        
    }
    console.log(misCompras)
    alert(`Lista de compras:\n${misCompras}`);
}

do {
    opcion = prompt("Bienvenido a Arraigo Suculentas!\n\n1 - Comprar una suculenta.\n2 - Mis compras\n0 - Salir");
    switch (opcion) {
        case "1":
            do {
                opcionCompras = prompt("1- Echeveria Peacockii\n2 - Gymnocalycium Sp.\n3 - Cereus Peruvianus\n4 - Haworthiopsis Fasciata\n5 - Haworthia Cymbiformis\n6 - Haworthia Cooperi\n7 - Haworthiopsis Attenuata\n8 - Echeveria Topsi Turvy\n9 - Echeveria Setosa\n0 - Salir")
                switch (opcionCompras) {
                    case "1":
                        carrito.push("Echeveria Peacockii");
                        break;

                    case "2":
                        carrito.push("Gymnocalycium Sp.");
                        break;

                    case "3":
                        carrito.push("Cereus Peruvianus");
                        break;
                    
                    case "4":
                        carrito.push("Haworthiopsis Fasciata");
                        break;

                    case "5":
                        carrito.push("Haworthia Cymbiformis");
                        break;

                    case "6":
                        carrito.push("Haworthia Cooperi");
                        break;

                    case "7":
                        carrito.push("Haworthiopsis Attenuata");
                        break;

                    case "8":
                        carrito.push("Echeveria Topsi Turvy");
                        break;

                    case "9":
                        carrito.push("Echeveria Setosa");
                        break;

                    case "0":
                        break;
                
                
                    default:
                        alert("Opcion no valida! intentalo de nuevo!");
                        opcionCompras = -1
                        break;
                }
            } while (opcionCompras != 0);
            break;

        case "2":
            mostrarCompras();
            break;

        case "0":
            alert(`Vuelva pronto!`);
            break;
    
        default:
            alert("Opcion no valida! intentalo de nuevo!");
            opcion = -1;
            break;
    }
} while (opcion != 0);