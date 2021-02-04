(function(){
 
    $("#cart").on("click", function() {
      $(".shopping-cart").fadeToggle( "fast");
    });
    
  })();


//---------------- ACA EMPIEZA TODO, BOTON AGREGAR CARRITO-----  
const boton = document.querySelectorAll('button#agregar-carrito')

    boton.forEach(function (item) {
    
    item.addEventListener("click", capturar);
});





//------------CAPTURO LOS PRODUCTOS -------
function capturar(event){
    //console.log("capturado")
    //console.log(event.target.parentElement.parentElement.children);
    var divProducto = event.target.parentElement.parentElement.children;
    var idProducto = event.target.parentElement.parentElement.getAttribute('data-id');
    
    function Producto (imagen, titulo,precio, id){
        this.imagen = imagen;
        this.titulo = titulo;
        this.precio = precio;
        this.id = id;
    }
    imagenCapturar = divProducto[0].src;
    //console.log(imagenCapturar);
    tituloCapturar = divProducto[1].textContent;
    //console.log(tituloCapturar);
    precioCapturar = divProducto[4].textContent;
    precioCapturado = precioCapturar.replace(/[$.]/g,'');
    precioCaptu = parseInt(precioCapturado);
    
    nuevoProducto = new Producto (imagenCapturar, tituloCapturar,precioCaptu, idProducto);
    //console.log(nuevoProducto);
    agregar();
}
//------------------ACA SE AGREGAN LOS PRODUCTOS Y SE COLOCAN EN UN ARRAY Y SE LOS LLEVA AL LOCASTORAGE-----------------------------------------------------------
var baseDatos = [];

function agregar(){
    baseDatos.push(nuevoProducto);
    //console.log(baseDatos);
    document.getElementById("listaPro").innerHTML += '<li class="clearfix" data-id="'+nuevoProducto.id+'"><img src='+imagenCapturar+' class="img-fluid"/><span class="item-name">'+tituloCapturar+'</span><span class="item-price">'+precioCaptu+'</span><button class="btn boton-cerrar" onclick="borrar('+ nuevoProducto.id +');">X</button></li>';
    
    /*carritoJSON=JSON.stringify(baseDatos);
    nuevoUser = localStorage.getItem('nombre');
    
    localStorage.setItem('carrito_' + nuevoUser, carritoJSON);
    carrito1= localStorage.getItem('carrito_'+nuevoUser)*/
    carritoLS();
    sumar();
    
}
//---------------------------------------------------------------------------------------------------

//------------ SUMA LOS PRECIO DE LOS PRODUCTOS ALAMACENADOS EN EL ARRAY--------
function sumar () {
    
    conteoCant = baseDatos.length;
    document.getElementById("cont1").innerHTML = conteoCant;
    document.getElementById("cont2").innerHTML = conteoCant

    valor = document.getElementById('total').textContent;
    
    
    // Aquí valido si hay un valor previo, si no hay datos, le pongo un cero "0".
    valor = (valor == null || valor == undefined || valor == "") ? 0 : valor;
    
    /* Esta es la suma. */
    valor = baseDatos.reduce((acc, el) => acc + el.precio,0);
    
    
    // Colocar el resultado de la suma en el control "span".
    document.getElementById('total').innerHTML ='$' + valor;
    //console.log(valor);
}
//-------------ESTA FUNCION BORRA EL PRODUCTO Q NO QUIERO-----------------
function borrar(producto){
    var listaFunc = document.getElementById("listaPro");
    
    //var borrarElemento = document.querySelector("li.clearfix[data-id=' " + producto + "'] ");
    borrarElemento = document.querySelector("li.clearfix[data-id='"+producto+"']")
    
    listaFunc.removeChild(borrarElemento);

    productoDel= document.querySelector('[data-id="'+producto+'"]')
    
    for (var i =0; i < baseDatos.length; i++){
        if (baseDatos[i].id === producto) {
           baseDatos.splice(i,1);
           console.log(nuevoProducto.id)
        }
     };
    
    //baseDatos.shift();

     sumar();

    console.log(baseDatos)
    
}




function carritoLS(){
    
     
    carritoJSON=JSON.stringify(baseDatos);
    nuevoUser = localStorage.getItem('nombre');
    
    localStorage.setItem('carrito_' + nuevoUser, carritoJSON);
    carrito1= localStorage.getItem('carrito_'+ nuevoUser)
    obj = JSON.parse(carrito1);
    //console.log(obj);
    
    //document.getElementById("listaPro").innerHTML += '<li class="clearfix" data-id="'+obj.id+'"><img src='+obj.imagen+' class="img-fluid"/><span class="item-name">'+obj.titulo+'</span><span class="item-price">'+Obj.precio+'</span><button class="btn boton-cerrar" onclick="borrar('+ obj.id +');">X</button></li>';
    //console.log(carrito1);
}


var botonr = document.querySelector('button#registro')
botonr.addEventListener('click', capturarUsuario);

function capturarUsuario(){
    
    nombre = document.getElementById('nombre').value;
    //console.log(nombre);
    
    localStorage.setItem("nombre", nombre);
    
    datosUser()
}


function datosUser(){
    usuario = localStorage.getItem('nombre');
    //console.log(usuario);
    document.getElementById("nombreUsuario1").innerHTML = '<li>BIENVENIDO '+usuario+ ' <button onclick="checout();" id="salir">X</button</li>'


    function checout(){
        localStorage.clear();
        document.location.reload(true);
    }
}