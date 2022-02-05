const info = [
  {
    id: 1,
    title: "Sistema de Voto Electrónico",
    description:
      "Diseño y desarrollo de hardware de una computadora dedicada con características intrínsecas de seguridad y sin disco de almacenamiento destinada a la emisión de voto con boleta única. Con 20 horas de autonomía sustentadas en baterías de litio y con sistema operativo descargable desde CD/DVD, el sistema incluye monitor táctil de 24”, impresora térmica y sistema de lectura-escritura de chips RFID.",
    image1: "assets/images/carrousel/electronic1.jpg",
    image2: "assets/images/carrousel/electronic2.jpg",
    image3: "assets/images/carrousel/electronic3.jpg",
    image4: "assets/images/carrousel/electronic4.jpg",
  },
  {
    id: 2,
    title: "Medidor de Energía Eléctrica con Lectura Remota",
    description:
      "Desarrollo de medidor de energía eléctrica monofásico para aplicaciones de hasta 60A, con capacidad de comunicación en la banda ISM 902...915MHz. Con exactitud superior a Clase I, posee detección de vandalismo y de intento de adulteración. Incluyendo capacidad interna de corte del suministro por comando desde el operador remoto, permite asimismo medir inyección bidireccional de energía, siendo por tanto tambien apto para el uso en prosumidores en redes eléctricas inteligentes.",
    image1: "assets/images/carrousel/electric1.jpeg",
    image2: "assets/images/carrousel/electric2.jpeg",
    image3: "assets/images/carrousel/electric3.jpeg",
    image4: "assets/images/carrousel/electric4.jpeg",
  },
  {
    id: 3,
    title: "Intercomunicador de Redes",
    description:
      "Con un GPS incorporado y suministro de energía a través de la entrada Ethernet o bien por medio de una fuente externa, el intercomunicador de redes es un subsistema orientado a la transferencia de datos por PLC (portadora sobre la red eléctrica), vía ZigBee, por WiFi, red celular de datos o vía Ethernet.",
    image1: "assets/images/carrousel/network1.jpeg",
    image2: "assets/images/carrousel/network2.jpeg",
    image3: "assets/images/carrousel/network3.jpeg",
    image4: "assets/images/carrousel/network4.jpeg",
  },
  {
    id: 4,
    title: "Amplificador de Corriente Conmutado para Aplicaciones de Física de Partículas",
    description:
      "Amplificador de corriente clase D compacto utilizado como filtro activo para la reducción de ripple en rectificadores controlados utilizados en aceleradores de partículas tipo sincrotrón.",
    image1: "assets/images/carrousel/switching1.jpg",
    image2: "assets/images/carrousel/switching2.jpg",
    image3: "assets/images/carrousel/switching3.jpg",
    image4: "assets/images/carrousel/switching4.jpg",
  },
  {
    id: 5,
    title: "Convertidores de Potencia para Generación de Plasma",
    description:
      "Inversor de alta frecuencia (2MHz) de 6kW con tecnología SiC para producción de plasma inductivo, con sistema de control para la carga no-lineal embebido en una FPGA Xilinx. Destinado a procesamiento de wafers de silicio y a la neutralización de gases tóxicos en la industria del semiconductor.",
    image1: "assets/images/carrousel/power1.jpg",
    image2: "assets/images/carrousel/power2.jpg",
    image3: "assets/images/carrousel/power3.jpg",
    image4: "assets/images/carrousel/power4.jpg",
  },
  {
    id: 6,
    title: "Amplificador de RF de Potencia Compacto",
    description:
      "Desarrollo de un amplificador de RF de 3kW compacto para la banda ISM 13.56MHz utilizando tecnología de semiconductores wide bandgap tipo GaN, con modulación por desplazamiento de fase. Eficiencia pico superior a 93%.",
    image1: "assets/images/carrousel/compact1.jpeg",
    image2: "assets/images/carrousel/compact2.jpeg",
    image3: "assets/images/carrousel/compact3.jpeg",
    image4: "assets/images/carrousel/compact4.jpeg",
  },
  {
    id: 7,
    title: "Microinversores para Paneles Solares Fotovoltaicos",
    description:
      "Desarrollo de microinversores para aplicaciones solares con inyección de energía directa a la red eléctrica (sin baterías). Con una eficiencia superior a 96% CEC y potencia máxima de 250W y 500W (dos versiones), permite optimizar la extracción de energía por cada panel solar y escalar una instalación en la medida de los recursos disponibles. Un sistema de comunicación por PLC (power-line carrier) o ZigBee permite adquirir en tiempo real el estado operativo de la unidad asi como la potencia inyectada, calculada internamente con un medidor Clase I certificado embebido en la unidad.",
    image1: "assets/images/carrousel/micro1.jpg",
    image2: "assets/images/carrousel/micro2.jpg",
    image3: "assets/images/carrousel/micro3.jpg",
    image4: "assets/images/carrousel/micro4.jpg",
  },
  {
    id: 8,
    title: "Sensores de Nivel",
    description:
      "Medidores ultrasónicos de nivel de llenado sin contacto para sólidos y líquidos en cisternas, tanques y contenedores, desarrollados para reportar periódicamente esta variable a través de la red celular.",
    image1: "assets/images/carrousel/level1.jpg",
    image2: "assets/images/carrousel/level2.jpg",
    image3: "assets/images/carrousel/level3.jpg",
    image4: "assets/images/carrousel/level4.jpeg",
  },
  {
    id: 9,
    title: "Fuentes de Protección Catódica",
    description:
      "Desarrollo de convertidores de 2kW compactos para protección de tuberías metálicas soterradas, por inyección de corriente controlada en función del potencial local respecto de electrodos de referencia. Con sincronización y comunicación satelital y típicamente empleada en aplicaciones de transporte de oil & gas, es capaz de programarse en forma remota y de enviar datos periódicamente para estadística asociada con la integridad de la tubería.",
    image1: "assets/images/carrousel/cathodic1.JPG",
    image2: "assets/images/carrousel/cathodic2.jpg",
    image3: "assets/images/carrousel/cathodic3.jpg",
    image4: "assets/images/carrousel/cathodic4.jpg",
  },
  {
    id: 10,
    title: "Controladores Inteligentes para Luminarias",
    description:
      "Dispositivos desarrollados como fotocontroles avanzados para luminarias urbanas, de calles, rutas y autopistas con capacidad de comunicación por red celular o WiFi con un sistema de gestión central. Se inserta en el zócalo normalizado ANSI C136 o NEMA. Orientado a aplicaciones en ciudades inteligentes, es capaz de gestionar la intensidad de la luminaria por medio de cualquiera de las interfaces de atenuación comerciales (0/10V, PWM, DALI), en base a una tabla horaria reprogramable en forma remota, contribuyendo enormemente al ahorro de energía eléctrica sin pérdida de funcionalidad y a la extensión de la vida útil de la lámpara. Un medidor de potencia Clase I monitorea el consumo y reporta los casos de falla de la luminaria.",
    image1: "assets/images/carrousel/intelligent1.jpg",
    image2: "assets/images/carrousel/intelligent2.jpg",
    image3: "assets/images/carrousel/intelligent3.jpg",
    image4: "assets/images/carrousel/intelligent4.jpeg",
  },
];
$(document).ready(function () {
  jQuery(".hamburger").click(function (e) {
    $('nav').toggleClass('active')
  })
  $(".slider-dev").slick({
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: true,
    centerMode: true,
    prevArrow:
      "<img class='a-left control-c prev slick-prev' src='./assets/images/left-arrow.svg'>",
    nextArrow:
      "<img class='a-right control-c next slick-next' src='./assets/images/right-arrow.svg'>",
    responsive: [
       {
         breakpoint: 1366,
         settings: {
           slidesToShow: 2,
           arrows: true,
           dots: true,
         }
       },
       {
         breakpoint: 800,
         settings: {
           slidesToShow: 1,
           arrows: false,
           dots: true,
         }
       },
       {
         breakpoint: 450,
         settings: {
           slidesToShow: 1,
           arrows: false,
           dots: true,
         }
       }
     ]
  });
  
});
  

function openPopup(id) {
  $('.popup').show()
  $('section').toggleClass('is-blured')
  infoPopup = info.find((info) => info.id === id);
  $('#title').html(infoPopup.title)
  $('#description').html(infoPopup.description)
  $('#image1').attr('src', infoPopup.image1)
  $('#image2').attr('src', infoPopup.image2)
  $('#image3').attr('src', infoPopup.image3)
  $('#image4').attr('src', infoPopup.image4)
}
jQuery(document).ready(function () {
  jQuery(".close").click(function (e) {
    e.preventDefault();
    jQuery(".popup").hide();
     $("section").toggleClass("is-blured");
  });
  /* ------------------------------- Scroll Links ------------------------------ */
  jQuery(document).on('click', '.anchor', function(event){
    event.preventDefault();
  
    jQuery('html, body').animate({
        scrollTop: jQuery( jQuery.attr(this, 'href') ).offset().top
    }, 500),
    setTimeout(function() {
        $('.menu.sticky').slideUp("slow");
    }, 1000);
  });
});
