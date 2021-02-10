
(function(){
 
    $( "#cart" ).first().click(function() {
        $( ".shopping-cart" ).first().fadeToggle( "slow", "linear" );
      });
    
  })();

  


//---------------- ACA EMPIEZA TODO, BOTON AGREGAR CARRITO------------------------------------------------------------------------------
const boton = document.querySelectorAll('button#agregar-carrito')

    boton.forEach(function (item) {
    
    item.addEventListener("click", capturar);
})
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
    
    agregar();
};

//------------------ACA SE AGREGAN LOS PRODUCTOS Y SE COLOCAN EN UN ARRAY-----------------------------------------------------------
var baseDatos = [];
function agregar(){
    baseDatos.push(nuevoProducto);
    localStorage.setItem('carritoDeCompras', JSON.stringify(baseDatos))
   document.getElementById("listaPro").innerHTML += `
   <li class="clearfix" data-id="${nuevoProducto.id}">
        <img src=${nuevoProducto.imagen} class="img-fluid"/>
        <span class="item-name">${nuevoProducto.titulo}</span>
        <span class="item-price">${nuevoProducto.precio}</span>
       <!--<button onclick="menosUno();">-</button>
        <input class="shopping-cart-cantidad" id="shoppingCartItemCantidad" type="text"
        value="1">
        <button onclick="masUno();">+</button>-->
        <button class="btn boton-cerrar" onclick="borrar(${nuevoProducto.id});">X</button>
   </li>`;
   
   factura();
   sumar();
   
   
};
revisarLocal()
function revisarLocal() {
     carritoLocal = JSON.parse(localStorage.getItem('carritoDeCompras'))
    if (carritoLocal) {
        carritoLocal.forEach((el)=>{
            nuevoProducto = el;
           agregar()
           console.log(nuevoProducto)
        })
    }
}

function sumar () {
    
    conteoCant = baseDatos.length;
    document.getElementById("cont1").innerHTML = conteoCant;
    document.getElementById("cont2").innerHTML = conteoCant
    
    valor = document.getElementById('total').textContent;
    
    // Aquí valido si hay un valor previo, si no hay datos, le pongo un cero "0".
    valor = (valor == null || valor == undefined || valor == "") ? 0 : valor;
    
    valor = baseDatos.reduce((acc, el) => acc + el.precio,0);

    document.getElementById('total').innerHTML ='$' + valor;
    total = document.getElementById('totalFact').innerHTML = valor;
    subtotal= document.getElementById('subtotalFact').innerHTML = parseInt(valor / 1.21);
    document.getElementById('iva').innerHTML = (total - subtotal);

};


//--------------------------------------------------------------------------------------------------------------
//-------------ESTA FUNCION BORRA EL PRODUCTO QUE EL USUARIO NO QUIERE DEL CARRITO Y POR ENDE SE BORRA DEL CARRITO------------------------------------------------------
function borrar(producto){
    var listaFunc = document.getElementById("listaPro");

    borrarElemento = document.querySelector("li.clearfix[data-id='"+producto+"']")
    
    listaFunc.removeChild(borrarElemento);
    
    for (var i =0; i < baseDatos.length; i++){
        if (baseDatos[i].id == producto) {
            baseDatos.splice(i,1);
            
        }
    };

    var listaFact = document.getElementById("listaProd");
    var borrarTr=document.querySelector('tr.pro[data-id="'+producto+'"]')
   
    listaFact.removeChild(borrarTr);

    for (var i =0; i < baseDatos.length; i++){
        if (baseDatos[i].id == producto) {
            baseDatos.splice(i,1);
            
        }
    };
   
    sumar();
}
//------------------------------FACTURA DE COMPRA-----------------------
function factura(){
    fact=document.getElementById('listaProd');
    fact.innerHTML="";
    baseDatos.forEach(function (prod){
        prod = document.getElementById('listaProd').innerHTML += 
        `<tr class="pro" data-id="${prod.id}">
            <td>${prod.titulo}</td>
            <td>${prod.precio}</td>
        </tr>`;
    });
   
};

//--------------------------------------------------------------------------------------------------------------------------


$("#registro").click(capturarUsuario);


function capturarUsuario(){
    
    nombre = document.getElementById('nombre').value  
    emailCli=document.getElementById('email').value;
    
    nombreCli=document.getElementById('cliente').value = nombre;
    correoCli=document.getElementById('correo').value = emailCli;
    //console.log(nombre);
    
    localStorage.setItem("nombre", nombre);
    localStorage.setItem('email', emailCli);

    datosUser();
};

//----------------------------------------------------------------------------------------------------------------------------------
//------------------DATOS DEL USUARIO Y ALERTA SI HAY CARRITO---------------------------------------------------------------------------------

function datosUser(){
    usuario = localStorage.getItem('nombre');
    //console.log(usuario);
    if(!usuario){
        document.getElementById("nombreUsuario1").innerHTML = '<li>BIENVENIDO! veo que no estas Registrado!</li>'
    }
    else {
        document.getElementById("nombreUsuario1").innerHTML = '<li>BIENVENIDO '+usuario+ ' <button onclick="checout();" id="salir"><i class="fas fa-sign-out-alt"></i></button</li>'
        leerLocalStorage(usuario)
    };
};

$(".btn-cerrar-modal").click(checout);

function checout(){
    localStorage.removeItem('nombre');
    localStorage.removeItem('email');
    document.location.reload(true);
};

datosUser();

//------------------------REALIZA LA CARGA DE DATOS PARA LA FACTURA-----------------------------------------------------

function compra(){
    user= localStorage.getItem('nombre');
    email=localStorage.getItem('email');
    console.log(user,email)
    
    cliente=document.getElementById('cliente').value = user;
    correo=document.getElementById('correo').value = email;              
};

compra();

function registroLS(){
    factLS=document.getElementById('listaProd');
    factLS.innerHTML="";
    dataBaseLS.forEach(function (item) {
        item = document.getElementById('listaProd').innerHTML += 
        `<tr class="pro" data-id="${item.id}">
            <td>${item.titulo}</td>
            <td>${item.precio}</td>
        </tr>`;
    });
    total = document.getElementById('totalFact').innerHTML = valor2;
    subtotal= document.getElementById('subtotalFact').innerHTML = parseInt(valor2 / 1.21);
    document.getElementById('iva').innerHTML = (total - subtotal);
    
};

//---------------------------BORRA LA LISTA DE LOS PRODUCTOS EN LA FACTURA-----------------------------------------------------

function borrarFactu(producto){
    var listaFact = document.getElementById("listaProd");
   var borrarTr=document.querySelector('tr.pro[data-id="'+producto+'"]')
   
   listaFact.removeChild(borrarTr);

    for (var i =0; i < baseDatos.length; i++){
        if (baseDatos[i].id == producto) {
            baseDatos.splice(i,1);
            
        };
    }
    
};
//-------------------------------------------------------------------------------------------------------------------------------