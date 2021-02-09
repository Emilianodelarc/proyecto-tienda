$( document ).ready(function()
{
    document.getElementById("modal-login").click()
    // console.log( "Página cargada en jQuery!" + (new Date()).getMilliseconds() );
});
(function(){
 
    $( "#cart" ).first().click(function() {
        $( ".shopping-cart" ).first().fadeToggle( "slow", "linear" );
      });
    
  })();



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

    cantidad = 1;

    nuevoProducto = new Producto (imagenCapturar, tituloCapturar,precioCaptu, idProducto);
    
    agregar();
};

//------------------ACA SE AGREGAN LOS PRODUCTOS Y SE COLOCAN EN UN ARRAY-----------------------------------------------------------
var baseDatos = [];

function agregar(){
    baseDatos.push(nuevoProducto);

    for (let i = 0; i < baseDatos.length; i++) {
        if (baseDatos[i].innerText === tituloCapturar) {
            console.log(baseDatos[i]);
        }
      }
    
   document.getElementById("listaPro").innerHTML += `
   <li class="clearfix" data-id="${nuevoProducto.id}">
        <img src=${imagenCapturar} class="img-fluid"/>
        <span class="item-name">${tituloCapturar}</span>
        <span class="item-price">${precioCaptu}</span>
        <input class="shopping-cart-cantidad shoppingCartItemCantidad" type="number"
        value="1">
        <button class="btn boton-cerrar" onclick="borrar(${nuevoProducto.id});">X</button>
   </li>`;
   const cantidadT = document.querySelector('.shoppingCartItemCantidad')
   cantidadT.addEventListener('change', cambioCantidad)

   factura();
   carritoLS();
    sumar();
    
};

//---------------------------------------------------------------------------------------------------
//------------ SUMA LOS PRECIO DE LOS PRODUCTOS ALAMACENADOS EN EL ARRAY-----------------------------

function sumar () {
    
    conteoCant = baseDatos.length;
    document.getElementById("cont1").innerHTML = conteoCant;
    document.getElementById("cont2").innerHTML = conteoCant
    
    valor = document.getElementById('total').textContent;
    
    // Aquí valido si hay un valor previo, si no hay datos, le pongo un cero "0".
    valor = (valor == null || valor == undefined || valor == "") ? 0 : valor;
    
    /* Esta es la suma. */
    valor = baseDatos.reduce((acc, el) => acc + el.precio,0);

    document.getElementById('total').innerHTML ='$' + valor;
    total = document.getElementById('totalFact').innerHTML = valor;
    subtotal= document.getElementById('subtotalFact').innerHTML = parseInt(valor / 1.21);
    document.getElementById('iva').innerHTML = (total - subtotal);

    resultado = document.querySelector('.shoppingCartItemCantidad')
    resultado2 = Number(resultado.value);
    console.log(resultado2)
};

function cambioCantidad(event) {
    const input = event.target;
    if(input.value <= 0){
        input.value = 1
    }
    console.log(input)   
}

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
   
    carritoLS();
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

//----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------DESDE AQUI TODO FUNCIONA CON LOCAL STORAGE--------------------------------------------------------------
//----------------------CARRITO ENVIADO A LOCALSTORAGE------------------------------------------------------------------

function carritoLS(){
    
    carritoJSON=JSON.stringify(baseDatos);
    localStorage.baseDatos = carritoJSON;
    
};

//--------------------------------------------------------------------------------------------------------------------------
//-------------------------------CAPTURA LOS DATOS DEL USUARIO---------------------------------------------------------------

var botonr = document.querySelector('button#registro');
botonr.addEventListener('click', capturarUsuario);

function capturarUsuario(){
    
    nombre = document.getElementById('nombre').value;
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
        
        if (localStorage.baseDatos){
            document.getElementById("alert-carrito").className =
                "alert alert-danger alert-dismissible fade show";
            document.getElementById("alert-carrito-texto").innerText =
            "Terminá tu compra! " + usuario  ;
    
        };
    };
};

function checout(){
    localStorage.clear();
    document.location.reload(true);
};

datosUser();

//--------------------------------------------------------------------------------------------------------------
//----------------------LECTURA DE LOCLSTORAGE Y CARGA LOS PRODUCTOS ALMACENADOS--------------------------------   

function leerLocalStorage () {
    
    dataBaseLS = JSON.parse(localStorage.baseDatos);
    
    dataBaseLS.forEach(function (data) {
        
        data = document.getElementById("listaPro").innerHTML += '<li class="clearfix" data-id="'+data.id+'"><img src='+data.imagen+' class="img-fluid"/><span class="item-name">'+data.titulo+'</span><span class="item-price">'+data.precio+'</span><button class="btn boton-cerrar" onclick="borrarLS('+ data.id +');">X</button></li>';
    });
    sumarLS();
};

leerLocalStorage();

//--------------------------------------------------------------------------------------------------------------    
//---------------------BORRA LOS PRODUCTOS ALMACENDOS EN EL LOCAL STORAGE---------------------------------------  

function borrarLS(producto){
    var listaFunc = document.getElementById("listaPro");
    
    //var borrarElemento = document.querySelector("li.clearfix[data-id=' " + producto + "'] ");
    borrarElemento = document.querySelector("li.clearfix[data-id='"+producto+"']")
    
    listaFunc.removeChild(borrarElemento);
    
    for (var i =0; i < dataBaseLS.length; i++){
        if (dataBaseLS[i].id == producto) {
            dataBaseLS.splice(i,1);
            
        };
    };
    
    carritoLS();
    sumarLS();
    //baseDatos.shift();
    console.log(dataBaseLS);
    borrarFactu(data.id);
};

//----------------------------------------------------------------------------------------------------------------    
//---------------------sUMA LOS PRODUCTOS DEL LOCAL STORAGE-------------------------------------------------------

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
    registroLS();
};

//----------------------------------------------------------------------------------------------------------------------
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
