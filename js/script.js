(function(){
 
    $("#cart").on("click", function() {
      $(".shopping-cart").fadeToggle( "fast");
    });
    
  })();

const boton = document.querySelectorAll('button#agregar-carrito');

    boton.forEach(function (item) {
    
    item.addEventListener("click", capturar);
});


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

var botonr = document.getElementById('registro')
botonr.addEventListener('click', capturarUsuario);

function capturarUsuario(){
    function Persona(persona, password){
        this.persona = persona;
        this.password = password;
    }
    nombre = document.getElementById('nombre').value;
    //console.log(nombre);
    password = document.getElementById('contraseña').value;
    //console.log(password);
    
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("contraseña", password);
    
    
    nuevoUsuario = new Persona (nombre, password);
    //agregarUsu();
}

//usuario = [];

/*function agregarUsu(){
    usuario.push(nuevoUsuario);
    console.log(usuario);
}

usuarioJSON = JSON.stringify(usuario);*/



function capturar(event){
    //console.log("capturado")

    var divProducto = event.target.parentElement.parentElement.children;
    var idProducto = event.target.parentElement.parentElement.getAttribute('data-id');
    
    function Producto (imagen, titulo,precio, id){
        this.imagen = imagen;
        this.titulo = titulo;
        this.precio = precio;
        this.id = id;
    }
    imagenCapturar = divProducto[0].src;
    console.log(imagenCapturar);
    tituloCapturar = divProducto[1].textContent;
    console.log(tituloCapturar);
    precioCapturar = divProducto[4].textContent;
    precioCapturado = precioCapturar.replace(/[$.]/g,'');
    precioCaptu = parseInt(precioCapturado);
    
    nuevoProducto = new Producto (imagenCapturar, tituloCapturar,precioCaptu, idProducto);
    console.log(nuevoProducto);
    agregar();
}

var baseDatos = [];

function agregar(){
    baseDatos.push(nuevoProducto);
    //console.log(baseDatos);
    document.getElementById("lista").innerHTML += '<li class="clearfix" data-id= " '+ nuevoProducto.id + ' " ><img src='+imagenCapturar+' class="img-fluid"/><span class="item-name">'+tituloCapturar+'</span><span class="item-price">'+precioCaptu+'</span><button class="btn boton-cerrar" id="borrar" onclick="borrar('+ nuevoProducto.id +');">X</button></li>';
    
    carritoJSON=JSON.stringify(baseDatos);
    nuevoUser = localStorage.getItem('nombre');
    
    sessionStorage.setItem('carrito_' + nuevoUser, carritoJSON);
    var carrito1= sessionStorage.getItem('carrito_'+nuevoUser)
    
    obj = JSON.parse(carrito1);
    console.log(obj);
    
    //document.getElementById("lista").innerHTML += '<li class="clearfix" ><img src='+obj[0].imagen+ ' class="img-fluid"/><span class="item-name">'+obj[0].precio+'</span><span class="item-price">'+obj[0].titulo+'</span></li>';
    
    sumar();
    
}

  
/*var botonBor = document.getElementById('borrar');
botonBor.addEventListener('click', borrar);*/


function borrar(producto){
     listafunc = document.getElementById('lista');

     elementoABorrarDelCarrito = document.querySelector("li.clearfix[data-id =' " + producto + "'] ");
    
    listafunc.removeChild(elementoABorrarDelCarrito);

    baseDatos.shift();

 }

