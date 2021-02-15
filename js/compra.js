//SE CREA LA FACTURA CON LOS DATOS DEL PRODUCTO
function factura(){
    fact=document.getElementById('listaProd');
    fact.innerHTML="";
    baseDatos.forEach(function (prod){
        prod = document.getElementById('listaProd').innerHTML += 
        `<tr class="pro" data-id="${prod.id}">
            <td>${prod.titulo}</td>
            <td class="precio" id="precioFc-${prod.id}">${prod.precio}</td>
            <td><input type="number" class="cantidad" id="${prod.id}" value="1" min='1' max='5' onclick="veamos(event);"></td>
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
        if(factuComp.innerHTML === " " ){
            document.getElementById('cuerpoModal').innerHTML= `No hay nada en su factura`
        }
        else if(!email){
            document.getElementById('cuerpoModal').innerHTML= `No tenemos ningun dato de cliente, registrese e intente nuevamente!`
        }
        else{
            document.getElementById('cuerpoModal').innerHTML=`Nos pondremos en contacto por ${email}`
        }
    }
    else{
        remito++
        document.getElementById('datTel').innerHTML = `Nos pondremos en contacto para coordinar la entrega, los mismo seran ajustados a la REGULACIÓN SANITARIA VIGENTE.`
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


//SE PUEDE CAMBIAR LA CANTIDAD DEL PRODUCTO
$('.cantidad').each(function () { 
   $(this).change()
})
//SE OBTIENE EL ID DEL INPUT QUE SE ESTA LLAMANDO Y SE TOMA SU VALOR
function veamos (event) {
    var elemento = event.srcElement ? event.srcElement : event.target;
    var id = elemento.id
    //console.log(id)
    input = document.getElementById(`${id}`).value;
    //console.log(input)
    precioProdFc = document.getElementById(`precioFc-${id}`).innerText;
    //console.log(precioProdFc)
    cambioPrecioTabla(id)
};
//YA OBTENIDO SU ID SE RECORRE EL ARRAY CON LA CONDICION Q SI ES IGUAL TRAIGA SU PRECIO Y SE LO MULTIPLICA POR SU CANTIDAD
function cambioPrecioTabla(id_id){
    for(var i = 0; i< baseDatos.length; i++){
        if(baseDatos[i].id == id_id){
            prueba = baseDatos[i].precio;
            //console.log(prueba);
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

    //console.log(data);
    //console.log(suma);
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
	mywindow.document.write('<style>#procesar-pago{background:url(../img/floating.cogs.svg);}.table{width:100%;border-collapse:collapse;margin:16px 0 16px 0;}.table th{border:1px solid #ddd;padding:4px;background-color:#d4eefd;text-align:center;font-size:15px;}.table td{border:1px solid #ddd;text-align:left;padding:6px;}#seguir, #realizar, #impri, #aceptar, #cruz{display:none;}</style>');
    mywindow.document.write('</head><body >');
    mywindow.document.write(document.getElementById('procesar-pago').innerHTML);
    mywindow.document.write('</body></html>');
    mywindow.document.close(); 
    mywindow.focus(); 
    mywindow.print();
    mywindow.close();
    return true;
}