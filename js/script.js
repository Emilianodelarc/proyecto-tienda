(function(){
 
    $("#cart").on("click", function() {
      $(".shopping-cart").fadeToggle( "fast");
    });
    
  })();

  function capturarUsuario(){
      function Persona(nombre, password){
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

    
    
    function capturar(num){
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
        console.log(baseDatos);
        document.getElementById("lista").innerHTML += '<li class="clearfix"><img src='+imagenCapturar+'/><span class="item-name">'+tituloCapturar+'</span><span class="item-price">'+precioCapturar+'</span></li>';
        
        /*productoListaJSON = JSON.stringify(nuevoProducto);
        nombreUsu= localStorage.getItem('nombre');
        
        localStorage.setItem("carrito_" + nombreUsu, productoListaJSON);
        
    };
    function entrar(){

           console.log("Terminá tu compra! Este es tu carrito:");
           console.log(JSON.parse(localStorage.getItem('carrito_emiliano')));

           listaNoTer = JSON.parse(localStorage.getItem('carrito_emiliano'));

           document.getElementById('lista').innerHTML = listaNoTer;*/

       
}
    