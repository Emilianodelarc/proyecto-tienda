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
function compra() {
    user = localStorage.getItem('nombre');
    email = localStorage.getItem('email');
    telefono = localStorage.getItem('telefono');

    document.getElementById('cliente').value = user;
    document.getElementById('correo').value = email;
    remito = 157;
    if(!telefono && telefono == null | telefono == ''){
        document.getElementById('datTel').innerHTML = `*Para hacer uso de este servicio, por favor debe <a href="#regis">Registrarse</a>`;
        factuComp = document.getElementById('listaProd');
        if(factuComp.innerHTML == '' ){
            document.getElementById('cuerpoModal').innerHTML= `No hay nada en su factura`
        }
        else{
            document.getElementById('cuerpoModal').innerHTML= `Nos pondremos en contacto por ${email}`
        }
    }
    else{
        remito++
        document.getElementById('datTel').innerHTML = `Nos pondremos en contacto para coordinar la entrega, los mismo seran ajustados a la REGULACIÓN SANITARIA VIGENTE.`
        document.getElementById('cuerpoModal').innerHTML = `Pronto recibirá su pedido, nos contactaremos al número ${telefono}, su remito es el N° ${remito}`
    };
};

function borrarFC(producto) {
    localStorage.setItem('carritoDeCompras', JSON.stringify(baseDatos));

    var listaFact = document.getElementById("listaProd");
    var borrarTr=document.querySelector('tr.pro[data-id="'+producto+'"]')
   
    listaFact.removeChild(borrarTr);

    sumarFC();
};

function sumarFC(){;
    total = document.getElementById('totalFact').innerHTML = valor;
    subtotal= document.getElementById('subtotalFact').innerHTML = parseInt(valor / 1.21);
    document.getElementById('iva').innerHTML = (total - subtotal);
    
};



$('.cantidad').each(function () { 
   $(this).change()
})

function veamos (event) {
    var elemento = event.srcElement ? event.srcElement : event.target;
    var id = elemento.id
    //console.log(id)
    input = document.getElementById(`${id}`).value;
    //console.log(input)
    precioProdFc = document.getElementById(`precioFc-${id}`).innerText;
    //console.log(precioProdFc)
    cambiaValor = precioProdFc * input;
    //console.log(cambiaValor)
    cambioPrecioTabla(id)
};

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

function sumaTotales(){
    total = document.getElementById('totalFact').innerHTML = suma;
    subtotal= document.getElementById('subtotalFact').innerHTML = parseInt(suma / 1.21);
    document.getElementById('iva').innerHTML = (total - subtotal);
}