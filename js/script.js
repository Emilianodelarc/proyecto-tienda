//var queProducto = prompt("agregar carrito").toLowerCase();
//var otroProducto = prompt("desea agregarotro producto").toLowerCase();


var items = [];
    switch (queProducto){
        case "reloj iwc schaffhausen":
            precio = 549
            items.push(precio)
        break;
        case "reloj dom time":
            precio1 = 4095
            items.push(precio1)
        break;
        case "reloj crrju":
            precio2 = 799
            items.push(precio2)
        break;
        case "reloj monaco":
            precio3 = 1175
            items.push(precio3)
        break;
        case "reloj tourbillon":
            precio4 = 999
            items.push(precio4)
        break;
        case "reloj gues":
            precio5 = 1299
            items.push(precio5)
        break;
        case "reloj tommy Hilfiger":
            precio6 = 649
            items.push(precio6)
        break; 
        default:
            console.log( "ese producto no se encuentra");
    }
    switch (otroProducto){
        case "reloj iwc schaffhausen":
            precio = 549
            items.push(precio)
        break;
        case "reloj dom time":
            precio11 = 4095
            items.push(precio11)
        break;
        case "reloj crrju":
            precio22 = 799
            items.push(precio22)
        break;
        case "reloj monaco":
            precio33 = 1175
            items.push(precio33)
        break;
        case "reloj tourbillon":
            precio44 = 999
            items.push(precio44)
        break;
        case "reloj gues":
            precio55 = 1299
            items.push(precio55)
        break;
        case "reloj tommy hilfiger":
            precio66 = 649
            items.push(precio6)
        break; 
        default:
            precio77 = 0
            items.push(precio77);
    }


function Carrito (producto, precio){
    this.producto = producto;
    this.precio = precio;
    
}

          
var myCarrito = new Carrito  (queProducto, items[0]);

console.log(myCarrito);

var myCarrito2 = new Carrito (otroProducto, items[1]);
console.log(myCarrito2);

    function total(){

        var total = 0;
        items.forEach((pr) => console.log("Producto " + (pr)));
        for (var i of items){
            total += i;

            
        }
            return total / 1.21;
        
    }
            console.log(" subtotal(S/iva): " + total());
            console.log(" su total es  $" + items.reduce((acc, el) => acc + el, 0))


