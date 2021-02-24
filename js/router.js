// Componentes
const HomeComponent = {
    postRender: ()=>{

    },
    render: () => {
      return `
      <div class="banner-info container-fluid">
				<div class="row">
					<div class="col-lg-5 banner-left-info-1">
						<h3>El tic tac de los relojes parece <span>un ratón que roe el tiempo.</span></h3>
						<a href="#" class="btn shop">Tienda</a>
					</div>
	
					<div class="col-lg-7 banner-img">
						<img src="img/1.png" alt="part image" class="img-fluid imagen">
					</div>
				</div>
			</div>
      <section class="banner-bottom py-5 ">
      <div class="container py-md-3">
          <div class="row grids-envio-info text-center">
              <div class="col-lg-4 ab-content">
                  <div class="ab-info-con">
                      <h4>ENVÍO RÁPIDO Y GRATUITO</h4>
                      <p>Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero.</p>
                  </div>
              </div>
              <div class="col-lg-4 ab-content">
                  <div class="ab-info-con">
                      <h4>PAGOS SEGUROS Y ONLINE</h4>
                      <p>Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero.</p>
                  </div>
              </div>
              <div class="col-lg-4 ab-content">
                  <div class="ab-info-con">
                      <h4>Garantía de devolución del 100% del dinero</h4>
                      <p>Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero.</p>
                  </div>
              </div>

          </div>
      </div>
  </section>
  <!--FIN DE BANNER PRINCIPAL-->
  <aside id="alert-modalAlerta" class="alert alert-danger alert-dismissible fade hide" role="alert">
      <i class="bi bi-star" style="margin-right: 5px;"></i>
      <span id="alert-modalAlerta-texto"></span>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
      </button>
  </aside>
  <!--BANNER DESCUENTO-->
  <aside class="banner-descuento">
      <h1>Hasta 50% <span class="off">OFF</span> en Productos Seleccionado</h1>
  </aside>
  <section class="banner-bottom py-5 js-slidein">
      <div class="container py-md-5">

          <h3 class="title-estilo mb-lg-5 mb-4 text-center">La seguridad se une al estilo</h3>
          <div class="row text-center">


              <div class="col-md-4 content-gd">
                  <img src="img/product/homb-1.jpg" class="img-fluid" alt="" />
              </div>
              <div class="col-md-4 content-gd- ab-content py-lg-5 my-lg-5">
                  <h4>¿Necesitas marcar la elegancia?</h4>
                  <p>Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero.</p>

              </div>
              <div class="col-md-4 content-gd">
                  <img src="img/product/homb-2.jpg" class="img-fluid" alt="" />
              </div>
          </div>
      </div>
  </section>
  <!--FIN DE BANNER DESCUENTO-->
  <!--Galeria de imagenes tendencia-->
  <section class="banner-bottom py-5 js-slidein">
      <div class="container-fluid tendencia">
          <div class="row">
              <div class="col-lg-4 gallery-content-info titulo-tend ">
                  <h3 class="titulo-destacados">SIENDO TENDENCIA AHORA</h3>
                  <p>Lorem ipsum dolor sit,Nulla pellentesque dolor ipsum laoreet eleifend integer,Pellentesque maximus libero.</p>
              </div>
              <div class="col-8 imagen-des gallery-content">
                  <div class="row">
                      <div class="col-md-4 col-sm-6 gal-img">
                          <a href="#gal1"><img src="img/product/producto (1).jpg" alt="Baggage" class="img-fluid mt-4"></a>
                      </div>
                      <div class="col-md-4 col-sm-6 gal-img">
                          <a href="#gal2"><img src="img/product/producto (2).png" alt="Baggage" class="img-fluid mt-4"></a>
                      </div>
                      <div class="col-md-4 col-sm-6 gal-img">
                          <a href="#gal3"><img src="img/product/producto (3).png" alt="Baggage" class="img-fluid mt-4"></a>
                      </div>
                      <div class="col-md-4 col-sm-6 gal-img">
                          <a href="#gal4"><img src="img/product/producto (4).png" alt="Baggage" class="img-fluid mt-4"></a>
                      </div>
                      <div class="col-md-4 col-sm-6 gal-img">
                          <a href="#gal5"><img src="img/product/producto (5).png" alt="Baggage" class="img-fluid mt-4"></a>
                      </div>
                      <div class="col-md-4 col-sm-6 gal-img">
                          <a href="#gal11"><img src="img/product/producto (11).png" alt="Baggage" class="img-fluid mt-4"></a>
                      </div>
                  </div>
                  <!--popups-->
                  <div id="gal1" class="popup-efecto">
                      <div class="popup">
                          <img src="img/product/producto (1).jpg" alt="Popup image" class="img-fluid mt-4" />
                          <p>Mas de 20 unidades vendidas</p>
                          <a class="cerrar" href="#gallery">&times;</a>
                      </div>
                  </div>
                  <div id="gal2" class="popup-efecto">
                      <div class="popup">
                          <img src="img/product/producto (2).png" alt="Popup image" class="img-fluid mt-4" />
                          <p>Mas de 20 unidades vendidas</p>
                          <a class="cerrar" href="#gallery">&times;</a>
                      </div>
                  </div>
                  <div id="gal3" class="popup-efecto">
                      <div class="popup">
                          <img src="img/product/producto (3).png" alt="Popup image" class="img-fluid mt-4" />
                          <p>Mas de 27 unidades vendidas</p>
                          <a class="cerrar" href="#gallery">&times;</a>
                      </div>
                  </div>
                  <div id="gal4" class="popup-efecto">
                      <div class="popup">
                          <img src="img/product/producto (4).png" alt="Popup image" class="img-fluid mt-4" />
                          <p>Mas de 11 unidades vendidas</p>
                          <a class="cerrar" href="#gallery">&times;</a>
                      </div>
                  </div>
                  <div id="gal5" class="popup-efecto">
                      <div class="popup">
                          <img src="img/product/producto (5).png" alt="Popup image" class="img-fluid mt-4" />
                          <p>Mas de fa-rotate-90 unidades vendidas</p>
                          <a class="cerrar" href="#gallery">&times;</a>
                      </div>
                  </div>
                  <div id="gal11" class="popup-efecto">
                      <div class="popup">
                          <img src="img/product/producto (11).png" alt="Popup image" class="img-fluid mt-4" />
                          <p>Mas de 29 unidades vendidas</p>
                          <a class="cerrar" href="#gallery">&times;</a>
                      </div>
                  </div>
                  <div id="regis" class="popup-efecto">
                      <div class="popup">
                          <a class="close" href="#gallery">&times;</a>
                          <form>
                              <div class="field-group">
                                  <div class="entrada-datos">
                                      <input  id="nombre" type="text" placeholder="Nombre y Apellido" >
                                  </div>
                              </div>
                              <div class="field-group">
                                  <div class="entrada-datos">
                                      <input id="email" type="email"  placeholder="example@example.com" >
                                  </div>
                              </div>
                              <div class="field-group">
                                  <div class="entrada-datos">
                                      <input  id="telefono" type="text"  placeholder="telefono" >
                                  </div>
                              </div>
                              <div class="entrada-datos">
                                  <button id="registro" class="btn"><a href="#" class="regis"> Registrarse</a></button>
                              </div>
                              <div class="list-login-bottom text-center mt-lg-5 mt-4">
                                  <a href="#" class="">*Al hacer clic en Registrarse, acepta los términos</a>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <!--fin de popups Y DE GALERIA TENDENCIA-->
  
  <!--Galeria de productos BLACK FRIDAY-->
  <section class="container-principal js-slidein">
      <h2 class="titulo-oferta" id="black">black friday</h2>
      <section class="productos-ofertas">
          <div class="producto card" data-id="1">
              <img src="img/product/producto (9).png" class="img-producto card-img-top" id="imagen">
              <p class="titulo-producto card-title" id="titulo-pro">Reloj IWC Schaffhausen</p>
              <p class="descripcion-producto card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p class="producto-precio">$1099</p>
              <span class ="precio-desc" id="precio-des">$549</span>
              <button class="aCarr" id="agregar-carrito"><a href='#' class="agregar-carrito card-footer" data-id="1">Agregar Carrito</a></button>
          </div>
          <div class="producto card" data-id="2">
              <img src="img/product/producto (10).png" class="img-producto card-img-top" id="imagen">
              <p class="titulo-producto card-title" id="titulo-pro">Reloj DOM Time</p>
              <p class="descripcion-producto card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p class="producto-precio">$8190</p>
              <span class ="precio-desc" id="precio-des" >$4095</span>
              <button class="aCarr" id="agregar-carrito"><a href='#' class="agregar-carrito card-footer" data-id="2">Agregar Carrito</a></button>
          </div>
          <div class="producto card" data-id="3">
              <img src="img/product/producto (11).png" class="img-producto card-img-top" id="imagen">
              <p class="titulo-producto card-title" id="titulo-pro">Reloj CRRJU</p>
              <p class="descripcion-producto card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p class="producto-precio">$1599</p>
              <span class ="precio-desc" id="precio-des" >$799</span>
              <button class="aCarr" id="agregar-carrito"><a href='#' class="agregar-carrito card-footer">Agregar Carrito</a></button>
          </div>
          <div class="producto card" data-id="4">
              <img src="img/product/producto (12).png" class="img-producto card-img-top" id="imagen">
              <p class="titulo-producto card-title" id="titulo-pro">Reloj Monaco</p>
              <p class="descripcion-producto card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p class="producto-precio">$2350</p>
              <span class ="precio-desc" id="precio-des" >$1175</span>
              <button class="aCarr" id="agregar-carrito"><a href='#' class="agregar-carrito card-footer">Agregar Carrito</a></button>
          </div>
          <div class="producto card" data-id="5">
              <img src="img/product/producto (2).png" class="img-producto card-img-top" id="imagen">
              <p class="titulo-producto card-title" id="titulo-pro">Reloj Tourbillon</p>
              <p class="descripcion-producto card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p class="producto-precio">$1999</p>
              <span class ="precio-desc" id="precio-des" >$999</span>
              <button class="aCarr" id="agregar-carrito"><a href='#' class="agregar-carrito card-footer">Agregar Carrito</a></button>
          </div>
          <div class="producto card" data-id="6">
              <img src="img/product/producto (4).png" class="img-producto card-img-top" id="imagen">
              <p class="titulo-producto card-title" id="titulo-pro">reloj Gues</p>
              <p class="descripcion-producto card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p class="producto-precio">$5200</p>
              <span class ="precio-desc" id="precio-des" >$799</span>
              <button class="aCarr" id="agregar-carrito"><a href='#' class="agregar-carrito card-footer">Agregar Carrito</a></button>
          </div>
          <div class="producto card" data-id="7">
              <img src="img/product/producto (3).png" class="img-producto card-img-top" id="imagen">
              <p class="titulo-producto card-title" id="titulo-pro">Reloj Cube</p>
              <p class="descripcion-producto card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p class="producto-precio">$2599</p>
              <span class ="precio-desc" id="precio-des" >$1299</span>
              <button class="aCarr" id="agregar-carrito"><a href='#' class="agregar-carrito card-footer">Agregar Carrito</a></button>
          </div>
          <div class="producto card" data-id="8">
              <img src="img/product/producto (5).png" class="img-producto card-img-top" id="imagen">
              <p class="titulo-producto card-title" id="titulo-pro">Reloj Gues</p>
              <p class="descripcion-producto card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p class="producto-precio">$1299</p>
              <span class ="precio-desc" id="precio-des" >$649</span>
              <button class="aCarr" id="agregar-carrito"><a href='#' class="agregar-carrito card-footer">Agregar Carrito</a></button>
          </div>

          <div class="producto card" data-id="9">
              <img src="img/product/producto (1).jpg" class="img-producto card-img-top" id="imagen">
              <p class="titulo-producto card-title" id="titulo-pro">Reloj Tommy Hilfiger </p>
              <p class="descripcion-producto card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p class="producto-precio">$1999</p>
              <span class ="precio-desc" id="precio-des" >$999</span>
              <button class="aCarr" id="agregar-carrito"><a href='#' class="agregar-carrito card-footer">Agregar Carrito</a></button>
          </div>

          <div class="producto card" data-id="10">
              <img src="img/product/producto (9).png" class="img-producto card-img-top" id="imagen">
              <p class="titulo-producto card-title" id="titulo-pro">Reloj IWC Schaffhausen</p>
              <p class="descripcion-producto card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p class="producto-precio">$1599</p>
              <span class ="precio-desc" id="precio-des" >$799</span>
              <button class="aCarr" id="agregar-carrito"><a href='#' class="agregar-carrito card-footer">Agregar Carrito</a></button>
          </div>
      </section>
  </section>
  <aside class="boton-prox">
      <button type="button" class="btn btn-outline-primary" id="mostrar-nuevos">Proximamente</button>
  </aside>
  <!--MUESTRAS LOS PRODUCTOS TRAIDOS DE MERCADOLIBRE-->
  <section id="contenedor-productos">
      
  </section>
  <!--FIN DE SECCION DE PROXIMAMENTE-->
  <!--FIN DE LA GALERIA-->

  <!--NEWLETTER-->
  <section class="newsletter py-5 js-slidein">
      <div class="container py-md-5">
          <form method="post" action="#">
              <p class="parrafo-newletter">Suscríbase a la lista de correo de Watch-Wish para recibir actualizaciones sobre recién llegados, ofertas especiales y otra información sobre descuentos.</p>
             <div class="row subscribe-sec">
                  <div class="col-md-9">
                      <input type="email" class="form-control" id="email" placeholder="example@example.com" name="email" required="">
                  </div>
                  <div class="col-md-3">
                      <button type="submit" class="btn submit">Suscribirse</button>
                  </div>
              </div>
          </form>
      </div>
  </section>
  <!--FIN DE NEWLETTER-->
  <!--PUBLICIDAD-->
  <section class="envio js-slidein">
      <div class="envio-grids d-lg-flex">
          <div class="col-lg-4 envio-gd text-center">
              <div class="icon-gd"><span class="fa fa-truck" aria-hidden="true"></span>
              </div>
              <div class="icon-gd-info">
                  <h3>ENVÍO GRATIS</h3>
                  <p>En todos los productos del BLACK-FRIDAY.</p>
              </div>
          </div>
          <div class="col-lg-4 envio-gd sec text-center">
              <div class="icon-gd"><span class="fa fa-bullhorn" aria-hidden="true"></span></div>
              <div class="icon-gd-info">
                  <h3>DEVOLUCIÓN GRATUITA</h3>
                  <p>En el primer intercambio en 30 días</p>
              </div>
          </div>
          <div class="col-lg-4 envio-gd text-center">
              <div class="icon-gd"> <span class="fa fa-gift" aria-hidden="true"></span></div>
              <div class="icon-gd-info">
                  <h3>DESCUENTO PARA MIEMBROS</h3>
                  <p>Regístrese y ahorre hasta $ 29%</p>
              </div>

          </div>
      </div>
  </section>
      `;
    }
}

const ContactoComponent = {
    postRender: ()=>{
        
    },
    render: () => {
      return `
      <section class="contenedor-formulario">
      <form>
          <label for="">Nombre</label>
          <input type="text">

          <label for="">Apellido</label>
          <input type="text">

          <label for="">Email</label>
          <input type="text">

          <label for="">Mensaje:</label>

          <textarea name="textarea" id="" cols="" rows="6"></textarea>

          <input type="submit" name="enviar-form" class="btn-enviar-form" value="Enviar">	
      </form>
      <aside class="promoVideo">
          <button class="mensjPromo"><a href="index.html#black"> NO TE PIERDAS ESTAS PROMOS!</a></button>
          <video class="video" src="img/black1.mp4" controls width="500" height="287"></video>
      </aside>
  </section>
      `;
    }
}

// Componentes
const CompraComponent = {
    postRender: ()=>{
        
    },
    render: () => {
      return `
      <div class="banner-info container">
                    <div class="row">
                        <div class="col-lg-5 banner-left-info-1">
                            <h3>El tic tac de los relojes parece <span>un ratón que roe el tiempo.</span></h3>
                        </div>
        
                        <div class="col-lg-7 banner-img">
                            <img src="img/1.png" alt="part image" class="img-fluid imagen">
                        </div>
                    </div>
                </div>
      <section id="regis" class="popup-efecto">
      <div class="popup">
          <a class="close" href="#gallery">&times;</a>
          <form>
              <div class="field-group">
                  <div class="entrada-datos">
                      <input  id="nombre" type="text" placeholder="Nombre y Apellido" required>
                  </div>
              </div>
              <div class="field-group">
                  <div class="entrada-datos">
                      <input id="email" type="email"  placeholder="example@example.com" required>
                  </div>
              </div>
              <div class="field-group">
                  <div class="entrada-datos">
                      <input  id="telefono" type="text"  placeholder="telefono" required>
                  </div>
              </div>
              <div class="entrada-datos">
                  <button id="registro" class="btn" type="submit" >Registrarse</button>
              </div>
              <div class="list-login-bottom text-center mt-lg-5 mt-4">
                  <a href="#" class="">*Al hacer clic en Registrarse, acepta los términos</a>
              </div>
          </form>
      </div>
  </section>
  <section class="smart-forms smart-forms smart-container wrap-2 formulario">
      <div class="row mt-3">
          <div class="col">
              <h2 class="form-header header-primary titulo-factura">Realizar Compra</h2>
              <form class="form-body" id="procesar-pago" action="#">
                  <div class="frm-row">
                      <label for="cliente" class="field-label col-12 col-md-2 col-form-label h2">Cliente :</label>
                      <div class="col-12 col-md-10">
                          <p id="cliente"></p>
                      </div>
                  </div>
                  <div class="frm-row">
                      <label for="email" class="field-label col-12 col-md-2 col-form-label h2">Correo :</label>
                      <div class="col-12 col-md-10">
                          <p id="correo"></p>
                      </div>
                  </div>
                  <div class="frm-row">
                      <div class="col-12 col-md-10">
                          <p id="datoTel" class="avisoFactu"></p>
                      </div>
                  </div>
                  <div id="carrito" class="table-responsive">
                      <table class="table table-hover" id="lista-compra">
                          <thead class="table-info" id="cabecera-tabla">
                              <tr>
                                  <th scope="col">Producto</th>
                                  <th scope="col">Precio</th>
                                  <th scope="col">Canatidad</th>
                              </tr>
                          </thead>
                          <tbody id="listaProd">

                          </tbody>
                          <tfoot id="calculoTotal">
                              <tr>
                                  <th scope="col" >SUB TOTAL :</th>
                                  <th scope="col">
                                      <p id="subtotalFact">$</p>
                                  </th>
                              </tr>
                              <tr>
                                  <th scope="col" >Iva:21%</th>
                                  <th scope="col">
                                      <p id="iva">$</p>
                                  </th>
                              </tr>
                              <tr>
                                  <th scope="col" c>TOTAL :</th>
                                  <th scope="col">
                                      <p id="totalFact">$</p>
                                  </th>
                              </tr>
                          </tfoot>
                      </table>
                  </div>
                  <div class="row form-footer botones-factura" id="botones-factura">
                      <div class="col-md-4 mb-2">
                          <a href="index.html#black" class="btn btn-info btn-block" id="seguir">Seguir comprando</a>
                      </div>
                      <img src="img/facturaImagen.svg" alt="factura" class="img-factura-pie">
                      <div class="col-xs-12 col-md-4">
                      <button class="btn btn-success btn-block comprarButton" id="realizar" type="button" data-toggle="modal"
                      data-target="#comprarModal">Realizar Comprar</button>
                      </div>
                  </div>
                  <p class="pie-factura">Gracias por su compra!.<br> Guarde este comprobante de pedido para futuras referencias.</p>
              </form>
          </div>
      </div>            
  </section>                
  <aside class="modal fade" id="comprarModal" tabindex="-1" aria-labelledby="comprarModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="comprarModalLabel">Gracias por su compra</h5>
                  <button type="button" id="cruz" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
              </div>
              <div class="modal-body">
                  <img src="img/camioncito.gif" alt="" class="img-modal-body">
                  <p id="cuerpoModal"></p>
                  
              </div>
              <div class="modal-footer">
                  <button type="submit" class="btn btn-outline-success" id="enviar">Enviar por Email</button>
                  <button type="button" class="btn btn-outline-info" id="impri" onclick="imprim2();"><i class="fas fa-print">Imprimir</i></button>
                  <button type="button" id="aceptar" class="btn btn-cerrar-modal btn-secondary" data-dismiss="modal">Aceptar</button>
              </div>
          </div>
      </div>
  </aside>
  <p id="datTel" class="avisoFactu"></p>
  <p class="avisoFactu js-slidein">Recorda SIEMPRE UTILIZAR BARBIJO!</p>
  <img src="img/barbijo.png" alt="barbijo" class="barbijo js-slidein">
  <!--NEWLETTER-->
  <section class="newsletter py-5">
      <div class="container py-md-5">
          <form method="post" action="#">
              <p class="parrafo-newletter">Suscríbase a la lista de correo de Watch-Wish para recibir actualizaciones sobre recién llegados, ofertas especiales y otra información sobre descuentos.</p>
          <div class="row subscribe-sec">
                  <div class="col-md-9">
                      <input type="email" class="form-control" id="email" placeholder="example@example.com" name="email" required="">
                  </div>
                  <div class="col-md-3">
                      <button type="submit" class="btn submit">Suscribirse</button>
                  </div>
              </div>
          </form>
      </div>
  </section>
  <!--FIN DE NEWLETTER-->
  <!--PUBLICIDAD-->
  <section class="envio js-slidein">
      <div class="envio-grids d-lg-flex">
          <div class="col-lg-4 envio-gd text-center">
              <div class="icon-gd"><span class="fa fa-truck" aria-hidden="true"></span>
              </div>
              <div class="icon-gd-info">
                  <h3>ENVÍO GRATIS</h3>
                  <p>En todos los productos del BLACK-FRIDAY.</p>
              </div>
          </div>
          <div class="col-lg-4 envio-gd sec text-center">
              <div class="icon-gd"><span class="fa fa-bullhorn" aria-hidden="true"></span></div>
              <div class="icon-gd-info">
                  <h3>DEVOLUCIÓN GRATUITA</h3>
                  <p>En el primer intercambio en 30 días</p>
              </div>
          </div>
          <div class="col-lg-4 envio-gd text-center">
              <div class="icon-gd"> <span class="fa fa-gift" aria-hidden="true"></span></div>
              <div class="icon-gd-info">
                  <h3>DESCUENTO PARA MIEMBROS</h3>
                  <p>Regístrese y ahorre hasta $ 29%</p>
              </div>

          </div>
      </div>
  </section>
      `;
    }
}
  
const ErrorComponent = {
    render: () => {
      return `
        <p>Error</p>
      `;
    }
}

// Routes 
const routes = [
    { path: '/', component: HomeComponent, },
    { path: '/contactos', component: ContactoComponent, },
    { path: '/compras', component: CompraComponent, },
];

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

const findComponentByPath = (path, routes) =>
 routes.find(r => r.path.match(new RegExp(`^\\${path}$`, 'gm'))) || undefined;


const router = () => {

    const path = parseLocation();
    const { component = ErrorComponent } = findComponentByPath(path, routes) || {};
    
   $('#app').html(component.render());

};

$( window ).on( 'load', function( e ) {
    router();
} );
  
$( window ).on( 'hashchange', function( e ) {
    router();
} );
  

  