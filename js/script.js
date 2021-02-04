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
    
    for (var i =0; i < baseDatos.length; i++){
        if (baseDatos[i].id == producto) {
            baseDatos.splice(i,1);
            
        }
    };
    
    //baseDatos.shift();
    carritoLS();
    sumar();
    
    console.log(baseDatos)
    
}




function carritoLS(){
    
    
    carritoJSON=JSON.stringify(baseDatos);
    localStorage.baseDatos = carritoJSON;
}


var botonr = document.querySelector('button#registro')
botonr.addEventListener('click', capturarUsuario);

function capturarUsuario(){
    
    nombre = document.getElementById('nombre').value;
    email=document.getElementById('email').value;
    
    //console.log(nombre);
    
    localStorage.setItem("nombre", nombre);
    localStorage.setItem('email', email);
    
    datosUser()
}


function datosUser(){
    usuario = localStorage.getItem('nombre');
    //console.log(usuario);
    if(!usuario){
        document.getElementById("nombreUsuario1").innerHTML = '<li>BIENVENIDO! veo que no estas Registrado!</li>'
    }
    else {
        document.getElementById("nombreUsuario1").innerHTML = '<li>BIENVENIDO '+usuario+ ' <button onclick="checout();" id="salir"><i class="fas fa-sign-out-alt"></i></button</li>'
        
        if (localStorage.baseDatos){
            console.log("Terminá tu compra! Este es tu carrito:")
            console.log(JSON.parse(localStorage.baseDatos))}
        }
    }
    function checout(){
        localStorage.clear();
        document.location.reload(true);
    }
    datosUser()
    
    
    function leerLocalStorage () {
        
        dataBaseLS = JSON.parse(localStorage.baseDatos);
        
        dataBaseLS.forEach(function (data) {
            
            data = document.getElementById("listaPro").innerHTML += '<li class="clearfix" data-id="'+data.id+'"><img src='+data.imagen+' class="img-fluid"/><span class="item-name">'+data.titulo+'</span><span class="item-price">'+data.precio+'</span><button class="btn boton-cerrar" onclick="borrarLS('+ data.id +');">X</button></li>';
        })
        sumarLS();
    }
    leerLocalStorage();
    
    function borrarLS(producto){
        var listaFunc = document.getElementById("listaPro");
        
        //var borrarElemento = document.querySelector("li.clearfix[data-id=' " + producto + "'] ");
        borrarElemento = document.querySelector("li.clearfix[data-id='"+producto+"']")
        
        listaFunc.removeChild(borrarElemento);
        
        for (var i =0; i < dataBaseLS.length; i++){
            if (dataBaseLS[i].id == producto) {
                dataBaseLS.splice(i,1);
                
            }
        };
        
        carritoLS();
        sumarLS();
        //baseDatos.shift();
        console.log(dataBaseLS)
        
    }
    function sumarLS(){
        conteoCant = dataBaseLS.length;
        document.getElementById("cont1").innerHTML = conteoCant;
        document.getElementById("cont2").innerHTML = conteoCant
        
        valor2 = document.getElementById('total').textContent;
        
        
        // Aquí valido si hay un valor previo, si no hay datos, le pongo un cero "0".
        valor2 = (valor2 == null || valor2 == undefined || valor2 == "") ? 0 : valor2;
        
        /* Esta es la suma. */
        valor2 = dataBaseLS.reduce((acc, el) => acc + el.precio,0);
        
        
        // Colocar el resultado de la suma en el control "span".
        document.getElementById('total').innerHTML ='$' + valor2;
    }
    function compra(){
        user= localStorage.getItem('nombre');
        email=localStorage.getItem('email');
        console.log(user,email)
        
        cliente=document.getElementById('cliente').value = user;
        correo=document.getElementById('correo').value = email;
        
        
    };
    compra();
    registroLS();
    function registroLS(){
        
        dataBaseLS.forEach(function (item) {
            item = document.getElementById('listaProd').innerHTML += '<td><img src="'+item.imagen+'" class="img-fluid"></td><td>'+item.titulo+'</td><td>'+item.precio+'</td>'
        });
        total = document.getElementById('totalFact').innerHTML = valor2;
        subtotal= document.getElementById('subtotalFact').innerHTML = valor2 / 1.21;
        document.getElementById('iva').innerHTML = (total - subtotal);
    };

    registro();
    function registro(){

        baseDatos.forEach(function (item) {
            item = document.getElementById('listaProd').innerHTML += '<td><img src="'+item.imagen+'" class="img-fluid"></td><td>'+item.titulo+'</td><td>'+item.precio+'</td>'
        });
       total = document.getElementById('totalFact').innerHTML = valor2;
        subtotal= document.getElementById('subtotalFact').innerHTML = valor2 / 1.21;
        document.getElementById('iva').innerHTML = (total - subtotal);
        console.log("funciona")
    }