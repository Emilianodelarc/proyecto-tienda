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
//$("button #agregar-carrito").click(function (){
   // $(this).each(capturar);
//});
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
           console.log(nuevoProducto)
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



