function factura(){
    fact=document.getElementById('listaProd');
    fact.innerHTML="";
    baseDatos.forEach(function (prod){
        prod = document.getElementById('listaProd').innerHTML += 
        `<tr class="pro" data-id="${prod.id}">
            <td>${prod.titulo}</td>
            <td>${prod.precio}</td>
            <td><button onclick="borrarFC(${prod.id});">X</button></td>
        </tr>`;
    });

    sumarFC();
};
factura();
compra();
function compra() {
    user = localStorage.getItem('nombre');
    email = localStorage.getItem('email');
    telefono = localStorage.getItem('telefono');

    document.getElementById('cliente').value = user;
    document.getElementById('correo').value = email;

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
        document.getElementById('datTel').innerHTML = `Nos pondremos en contacto para coordinar la entrega, los mismo seran ajustados a la REGULACIÓN SANITARIA VIGENTE.`
        document.getElementById('cuerpoModal').innerHTML = `Pronto recibirá su pedido, nos contactaremos al número ${telefono}`
    };
};

function borrarFC(producto) {
    localStorage.setItem('carritoDeCompras', JSON.stringify(baseDatos));

    var listaFact = document.getElementById("listaProd");
    var borrarTr=document.querySelector('tr.pro[data-id="'+producto+'"]')
   
    listaFact.removeChild(borrarTr);

    borrar(producto);
    sumarFC();
}




function sumarFC(){
    total = document.getElementById('totalFact').innerHTML = valor;
    subtotal= document.getElementById('subtotalFact').innerHTML = parseInt(valor / 1.21);
    document.getElementById('iva').innerHTML = (total - subtotal);
    
};


