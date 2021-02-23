$(document).ready(function () {
    var tamañopantalla = 840;
  
    //Si la pantalla es más pequeña que 840px de ancho, elimine todas las clases.
    if ($(window).width() < tamañopantalla) {
      $('.js-slidein').removeClass('js-slidein');
    }
  
    // Compruebe cuál de los elementos de esta clase está visible en la página
    $('.js-slidein').each(function (i) {
      var objetoAbajo = $(this).offset().top;
      var debajoWindow = $(window).scrollTop() + $(window).height();
  
      if (debajoWindow > objetoAbajo) {
        $(this).removeClass('js-slidein');
      }
    });
  
    // Activar el efecto de deslizamiento en el desplazamiento
    $(window).scroll(function () {
      $('.js-slidein').each(function (i) {
        var objetoAbajo = $(this).offset().top + $(this).outerHeight() / 3;
        var debajoWindow = $(window).scrollTop() + $(window).height();
  
        if (debajoWindow > objetoAbajo) {
          $(this).addClass('js-slidein-visible');
        }
      });
    });
  });
  
//ABRE EL CARRITO SUAVEMENTE
(function(){
 
    $( "#cart" ).click(function() {
        $( ".shopping-cart").fadeToggle( "slow", "linear" );
      });
    
  })();
//SCROLL DE BOTON TIENDA
$(".shop").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
    scrollTop: $("#black").offset().top
    }, 2000);
});
//SCROLL DE BOTON SUBIR AL INICIO Q SE ENCUENTRA EN EL FOOTER
$(".up-up").click(function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $(".header__index").offset().top
    }, 2000);
});

//---------------- ACA EMPIEZA TODO, BOTON AGREGAR CARRITO------------------------------------------------------------------------------
const boton = document.querySelectorAll('button#agregar-carrito')

    boton.forEach(function (item) {
    
    item.addEventListener("click", capturar);
});

//------------CAPTURO LOS PRODUCTOS -----------------------------------------------------------------------------------------------------

function capturar(event){
    
    var divProducto = event.target.parentElement.parentElement.children;
    var idProducto = event.target.parentElement.parentElement.getAttribute('data-id');
    
    function Producto (imagen, titulo,precio, id){
        this.imagen = imagen;
        this.titulo = titulo;
        this.precio = precio;
        this.id = id;
    };

    imagenCapturar = divProducto[0].src;
   
    tituloCapturar = divProducto[1].textContent;
    
    precioCapturar = divProducto[4].textContent;
    precioCapturado = precioCapturar.replace(/[$.]/g,'');
    precioCaptu = parseInt(precioCapturado);

    nuevoProducto = new Producto (imagenCapturar, tituloCapturar,precioCaptu, idProducto);
    
    console.log(idProducto)
    revicion(idProducto);
    
};

//------------------ACA SE AGREGAN LOS PRODUCTOS Y SE COLOCAN EN UN ARRAY--------
//SE CONTROLA EL ARRAY, SI EL PRODUCTO SE ENCUENTRA NO SE AGREGARA
var baseDatos = [];

function revicion (id){

   if( baseDatos.find(producto => producto.id === id)){
    document.getElementById("alert-modalAlerta").className =
    "alert alert-danger alert-dismissible fade show";
    document.getElementById("alert-modalAlerta-texto").innerText =
    "La cantidad podrá modificarla en la factura, al finalizar su selección";
   }else{
       agregar();
   }

};
    
//LUEGO DE SU REVICION SI LA CONDICION ES FALSA LO AGREGA
function agregar(){
    baseDatos.push(nuevoProducto);
    localStorage.setItem('carritoDeCompras', JSON.stringify(baseDatos))
   document.getElementById("listaPro").innerHTML += `
   <li class="clearfix" data-id="${nuevoProducto.id}">
        <img src=${nuevoProducto.imagen} class="img-fluid"/>
        <span class="item-name">${nuevoProducto.titulo}</span>
        <span class="item-price">${nuevoProducto.precio}</span>
        <button class="btn boton-borrar-elemento" id="borraElemento${nuevoProducto.id}" onclick="borrar(${nuevoProducto.id});">X</button>
   </li>`;
   
   sumar();

};

//CONTROLA EL LOCAL STORAGE Y LO VUELVE A COLOCAR EN NUESTRO ARRAY
revisarLocal();

function revisarLocal() {
     carritoLocal = JSON.parse(localStorage.getItem('carritoDeCompras'))
    if (carritoLocal) {
        carritoLocal.forEach((el)=>{
            nuevoProducto = el;
           agregar()
           
        })
    }
};

//SUMA TODOS LOS PRODUCTOS DEL ARRAY Y SE VE REFLEJADO EN EL CARRITO
function sumar () {
    
    conteoCant = baseDatos.length;
    document.getElementById("cont1").innerHTML = conteoCant;
    document.getElementById("cont2").innerHTML = conteoCant
    
    valor = document.getElementById('total').textContent;
    
    // Aquí valido si hay un valor previo, si no hay datos, le pongo un cero "0".
    valor = (valor == null || valor == undefined || valor == "") ? 0 : valor;
    
    valor = baseDatos.reduce((acc, el) => acc + el.precio,0);

    document.getElementById('total').innerHTML ='$' + valor;
    

};

//--------------------------------------------------------------------------------------------------------------
//-------------ESTA FUNCION BORRA EL PRODUCTO QUE EL USUARIO NO QUIERE DEL CARRITO 

function borrar(producto){
    var listaFunc = document.getElementById("listaPro");
   
    borrarElemento = document.querySelector("li.clearfix[data-id='"+producto+"']")
    
    listaFunc.removeChild(borrarElemento);
    
    for (var i =0; i < baseDatos.length; i++){
        if (baseDatos[i].id == producto) {
            baseDatos.splice(i,1);
        }
    };

    localStorage.setItem('carritoDeCompras', JSON.stringify(baseDatos));

    sumar();
    borrarFC(producto);
    
};

//SE TOMA LOS DATOS DEL CLIENTE Y SE ENVIA AL LOCAL STORAGE
$("#registro").click(capturarUsuario);


function capturarUsuario(){
    
    nombre = document.getElementById('nombre').value;
    emailCli=document.getElementById('email').value;
    telefono=document.getElementById('telefono').value;
    
    localStorage.setItem("nombre", nombre);
    localStorage.setItem('email', emailCli);
    localStorage.setItem('telefono', telefono);

    datosUser();
    
};

//----------------------------------------------------------------------------------------------------------------------------------
//------------------DATOS DEL USUARIO TRAIDO DEL LOCAL STORAGE SI LA CONDICION SE CUMPLE MOSTRARA SU NOMBRE EN PANTALLA

function datosUser(){
    usuario = localStorage.getItem('nombre');
    //console.log(usuario);
    if(!usuario){
        document.getElementById("nombreUsuario1").innerHTML = '<li>BIENVENIDO! veo que no estas Registrado!</li>'
    }
    else {
        document.getElementById("nombreUsuario1").innerHTML = `
        <li>BIENVENIDO ${usuario} 
            <button onclick="checout();" id="salir">
                <i class="fas fa-sign-out-alt"></i>
            </button
        </li>`
    };
    
};

//SI EL USURIO FINALIZA LA COMPRA O SALE DEL LOGIN SE BORRA TODO LOS DATOS GUARDADOS EN EL LOCAL STORAGE
$(".btn-cerrar-modal").click(checout);

function checout(){
    localStorage.clear();
    document.location.reload(true);
};

datosUser();

function Productos (id,title,price,thumbnail){
    this.id = id;
    this.title= title;
    this.price= price;
    this.thumbnail = thumbnail;
}

//API DE MERCADO LIBRE, TRAE LOS PRODUCOS DE JOYERIA Y RELOJES
productosPox = [];

$(document).ready(function(){ 
    $.get("https://api.mercadolibre.com/sites/MLA/search?category=MLA3937", //nombre del archivo en el servidor que procesa la llamada
  
  function(data, status){ 
      //función que se ejecuta cuando la llamada regresa del servidor
      console.log(data)
      data.results.forEach((reloj) => {
        productosPox.push(
        new Productos(reloj.id, reloj.title, reloj.price, reloj.thumbnail)
        )
   });
    }
    )
});

$('#mostrar-nuevos').click(function(){
    mostrarProductos(productosPox);
})

//CON LOS DATOS OBTENIDOS LOS MUESTRAS EN LA SECCION DE PROXIMAMENTE
 const contenedorProductos = document.getElementById('contenedor-productos');

function mostrarProductos(array){
    array.forEach((productoNuevo)=>{
        let div = document.createElement('div')
        div.classList.add('producto1')
        div.innerHTML += `
                    <img src=${productoNuevo.thumbnail} alt="" class="img-fluid">
                    <h3>${productoNuevo.title}</h3>
                    <p class="precioProducto">Precio: $${productoNuevo.price}</p>
                    
        `
        contenedorProductos.appendChild(div)
    
    })
}    
