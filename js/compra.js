//SE CREA LA FACTURA CON LOS DATOS DEL PRODUCTO
function factura(){
    fact=document.getElementById('listaProd');
    fact.innerHTML="";
    baseDatos.forEach(function (prod){
        prod = document.getElementById('listaProd').innerHTML += 
        `<tr class="pro" data-id="${prod.id}">
            <td>${prod.titulo}</td>
            <td class="precio" id="precioFc-${prod.id}">${prod.precio}</td>
            <td id="nuevoInput${prod.id}">
                <input type="number" class="cantidad" id="${prod.id}"  min='1' max='5' value="1" onchange="veamos(event);">
            </td>
        </tr>`;

    });
   
    sumarFC();
}  

factura();
compra();
// SE OBTIENE LOS DATOS DEL CLIENTE DEL LOCAL STORAGE 
function compra() {
    user = localStorage.getItem('nombre');
    email = localStorage.getItem('email');
    telefono = localStorage.getItem('telefono');

    document.getElementById('cliente').innerHTML = user;
    document.getElementById('correo').innerHTML = email;
    remito = 157;
    if(!telefono && telefono == null | telefono == ''){
        document.getElementById('datTel').innerHTML = `*Para hacer uso de este servicio, por favor debe <a href="#regis">Registrarse</a>`;
        factuComp = document.getElementById('listaProd');
        if(factuComp.innerHTML == " " ){
            document.getElementById('cuerpoModal').innerHTML= `No hay nada en su factura`
        }
        else if(!email){
            document.getElementById('cuerpoModal').innerHTML= `No tenemos ningun dato de cliente, registrese e intente nuevamente!`
        }
        
    }
    else{
        remito++
        document.getElementById('datTel').innerHTML = `Nos pondremos en contacto para coordinar la entrega, los mismo seran ajustados a la REGULACIÓN SANITARIA VIGENTE. <br> 
                                                        **Para una mejor comunicación futura, Imprima su comprobante`
        document.getElementById('cuerpoModal').innerHTML = `Pronto recibirá su pedido, nos contactaremos al número ${telefono}, su remito es el N° ${remito}`
    };
};
//SE BORRA EL PRODUCTO DE LA FACTURA SI EL CLIENTE LO ELIMINA DEL CARRITO
function borrarFC(producto) {
    localStorage.setItem('carritoDeCompras', JSON.stringify(baseDatos));

    var listaFact = document.getElementById("listaProd");
    var borrarTr=document.querySelector('tr.pro[data-id="'+producto+'"]')
   
    listaFact.removeChild(borrarTr);

    sumarFC();
};
//SE HACE LA SUMA DE LOS PRODUCTOS CARGADOS EN LA FACTURA EXTRAIDO DEL CARRITO
function sumarFC(){;
    total = document.getElementById('totalFact').innerHTML = valor;
    subtotal= document.getElementById('subtotalFact').innerHTML = parseInt(valor / 1.21);
    document.getElementById('iva').innerHTML = (total - subtotal);
    
};

//SE OBTIENE EL ID DEL INPUT QUE SE ESTA LLAMANDO Y SE TOMA SU VALOR
function veamos (event) {
    var elemento = event.srcElement ? event.srcElement : event.target;
    var id = elemento.id

    input = document.getElementById(`${id}`).value;
    document.getElementById(`nuevoInput${id}`).innerHTML= `
    <input type="number" class="cantidad" id="${id}"  min='1' max='5' value="${input}" onchange="veamos(event);">`

    

    precioProdFc = document.getElementById(`precioFc-${id}`).innerText;

    cambioPrecioTabla(id)
};
//YA OBTENIDO SU ID SE RECORRE EL ARRAY CON LA CONDICION Q SI ES IGUAL TRAIGA SU PRECIO Y SE LO MULTIPLICA POR SU CANTIDAD
function cambioPrecioTabla(id_id){
    for(var i = 0; i< baseDatos.length; i++){
        if(baseDatos[i].id == id_id){
            prueba = baseDatos[i].precio;

            prueba2 = prueba * input;
            document.getElementById(`precioFc-${id_id}`).innerHTML= prueba2;

        }
    }
    sumaPreCAnt()
};


//SE CREA NUEVA BASE DE DATOS CON LOS PRECIOS DE LOS PRODUCTOS Y SE ACTUALIZA CADA VEZ QUE SE MODIFICA LA CANTIDAD DE ALGÚN PRODUCTO
data = [];

function sumaPreCAnt(){
    data.length =0;
    $("td.precio").each(function(){
    data.push(parseInt($(this).text()));
    });

     suma = data.reduce(function(a,b){ return a+b; },0);


    sumaTotales();
}
//REALIA LA SUMA CORRECTA SEGUN LAS UNIDADES A COMPRAR
function sumaTotales(){
    total = document.getElementById('totalFact').innerHTML = suma;
    subtotal= document.getElementById('subtotalFact').innerHTML = parseInt(suma / 1.21);
    document.getElementById('iva').innerHTML = (total - subtotal);
};
//SE PUEDE IMPRIMIR EL COMPROBANTE!
function imprim2(){
    var mywindow = window.open('', 'PRINT', 'height=700,width=900');
    mywindow.document.write('<html><head>');
	mywindow.document.write('<style>.table{width:100%;border-collapse:collapse;margin:16px 0 16px 0;}.table th{border:1px solid #ddd;padding:4px;background-color:#d4eefd;text-align:center;font-size:15px;}.table td{border:1px solid #ddd;text-align:center;padding:6px;}.cantidad{text-align:center;}#seguir, #realizar, #impri, #aceptar, #cruz{display:none;}.pie-factura{text-align: center;}</style>');
    mywindow.document.write('</head><body>');
    mywindow.document.write(document.getElementById('procesar-pago').innerHTML);
    mywindow.document.write('</body></html>');
    mywindow.document.close(); 
    mywindow.focus(); 
    mywindow.print();
    mywindow.close();
    return true;
}

//ENVIO DE EMAIL DEL COMPROBANTE DE PEDIDO
enviameUnEmail = document.getElementById('enviar');
enviameUnEmail.addEventListener('click', sendEmail);

function sendEmail(event){
    event.preventDefault();
     sinEstilo= document.getElementById('botones-factura').style.display = 'none'
     tablaEstilo = document.getElementById('lista-compra').style.background = "#74d2e7"
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "emilianodelarc@gmail.com",
        Password : "489671191210C5D45261607704DD5539A200",
        To : `${email}`,
        From : "emilianodelarc@gmail.com",
        Subject : "Comprabante compra",
        Body :  document.getElementById('procesar-pago').innerHTML,
                
        
    }).then(function(message){
     alert('Enviado, Recuerda revisar la carpeta spam'), document.getElementById('botones-factura').style.display = 'flex',
     document.getElementById('lista-compra').style.background = "none"
    });
    
}

  