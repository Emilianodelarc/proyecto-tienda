(function(){
 
    $("#cart").on("click", function() {
      $(".shopping-cart").fadeToggle( "fast");
    });
    
  })();

const boton = document.querySelectorAll('button#agregar-carrito');

    boton.forEach(function (item) {
    
    item.addEventListener("click", capturar);
});




function sumar(){
    total = document.getElementById('total').textContent;
    
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

    
    
    function capturar(){
        //console.log("capturado")
        
        function Producto (imagen, titulo,precio){
            this.imagen = imagen;
            this.titulo = titulo;
            this.precio = precio;
        }
        imagenCapturar = document.getElementById("imagen").src;
        console.log(imagenCapturar);
        tituloCapturar = document.getElementById("titulo-pro").textContent;
        console.log(tituloCapturar);
        precioCapturar = document.getElementById("precio-des").textContent;
        console.log(precioCapturar);
        
        nuevoProducto = new Producto (imagenCapturar, tituloCapturar,precioCapturar);
        console.log(nuevoProducto);
        agregar();
    }
    
    var baseDatos = [];
    function agregar(){
        baseDatos.push(nuevoProducto);
        //console.log(baseDatos);
        //document.getElementById("lista").innerHTML += '<li class="clearfix"><img src='+imagenCapturar+'/><span class="item-name">'+tituloCapturar+'</span><span class="item-price">'+precioCapturar+'</span></li>';
        
        carritoJSON=JSON.stringify(baseDatos);
        nuevoUser = localStorage.getItem('nombre');

        sessionStorage.setItem('carrito_' + nuevoUser, carritoJSON);
        var carrito1= sessionStorage.getItem('carrito_'+nuevoUser)
        
        obj = JSON.parse(carrito1);
       console.log(obj);

       document.getElementById("lista").innerHTML += '<li class="clearfix"><img src='+obj[0].imagen+'/><span class="item-name">'+obj[0].precio+'</span><span class="item-price">'+obj[0].titulo+'</span></li>';


    }
       
    
    