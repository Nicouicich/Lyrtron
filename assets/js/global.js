const info = [
  {
    id: 1,
    title: "Electronic Vote System",
    description:
      "Design and development of a dedicated computing hardware with built-in digital security and no internal storage, aimed to vote casting. Featuring more than 20 hours autonomy based on the use of Li-Ion internal batteries and with an operating system downloadable from CD/DVD, the unit includes a 24” touchscreen monitor, thermal printer and an RFID read-write unit.",
    image1: "assets/images/carrousel/electronic1.jpg",
    image2: "assets/images/carrousel/electronic2.jpg",
    image3: "assets/images/carrousel/electronic3.jpg",
    image4: "assets/images/carrousel/electronic4.jpg",
  },
  {
    id: 2,
    title: "Electric Energy Meter with Remote Reading",
    description:
      "Development of a single-phase electric energy meter for up to 60 A applications, with communication capability in the 902…915MHz ISM band. With accuracy exceeding Class I, it features tamper detection and fraud deterring. Including a remotely controlled built-in breaker, it allows measuring bidirectional energy flow, being also suitable for smart cities.",
    image1: "assets/images/carrousel/electric1.jpeg",
    image2: "assets/images/carrousel/electric2.jpeg",
    image3: "assets/images/carrousel/electric3.jpeg",
    image4: "assets/images/carrousel/electric4.jpeg",
  },
  {
    id: 3,
    title: "Network Communicator",
    description:
      "Network communicator with a built-in GPS and featuring PoE or AC supply, the Network Communicator is a subsystem aimed at channeling data flow through PLC (power-line carrier), ZigBee, WiFi IEEE802.11s, cellular and Ethernet.",
    image1: "assets/images/carrousel/network1.jpeg",
    image2: "assets/images/carrousel/network2.jpeg",
    image3: "assets/images/carrousel/network3.jpeg",
    image4: "assets/images/carrousel/network4.jpeg",
  },
  {
    id: 4,
    title: "Switching Current Amplifier for Particle Physics Applications",
    description:
      "Class D current amplifier used as active filter to reduce low-frequency ripple in high-power controlled rectifiers for synchrotron-like particle accelerators.",
    image1: "assets/images/carrousel/switching1.jpg",
    image2: "assets/images/carrousel/switching2.jpg",
    image3: "assets/images/carrousel/switching3.jpg",
    image4: "assets/images/carrousel/switching4.jpg",
  },
  {
    id: 5,
    title: "Power converter plasma generation",
    description:
      "High-frequency (2MHz), 6kW inverter based on SiC MOS technology for inductive plasma generation, embedding the controller for the nonlinear load into a Xilinx FPGA. Aimed for silicon wafer processing and toxic gas abatement in the semiconductor industry.",
    image1: "assets/images/carrousel/power1.jpg",
    image2: "assets/images/carrousel/power2.jpg",
    image3: "assets/images/carrousel/power3.jpg",
    image4: "assets/images/carrousel/power4.jpg",
  },
  {
    id: 6,
    title: "Compact RF Power Amplifier",
    description:
      "Development of a compact 3kW RF power amplifier for the 13.56MHz ISM band using Gallium-Nitride wide bandgap semiconductor technology, with phase-shift modulation. Peak efficiency exceeds 93%.",
    image1: "assets/images/carrousel/compact1.jpeg",
    image2: "assets/images/carrousel/compact2.jpeg",
    image3: "assets/images/carrousel/compact3.jpeg",
    image4: "assets/images/carrousel/compact4.jpeg",
  },
  {
    id: 7,
    title: "Microinverters for Solar Photovoltaic Modules",
    description:
      "Development of grid-tie microinverters for solar applications with direct energy injection to the grid (no batteries). With CEC efficiency exceeding 96% and 250W and 500W (two models) maximum power, it optimizes the energy extraction on single solar panels, allowing for progressive scaling up based on installation possibilities. A PLC (power-line carrier) or ZigBee communication system allows both, accessing the internal status in real time as well as acquiring the injected power, which is internally measured with a built-in Class I certified energy meter.",
    image1: "assets/images/carrousel/micro1.jpg",
    image2: "assets/images/carrousel/micro2.jpg",
    image3: "assets/images/carrousel/micro3.jpg",
    image4: "assets/images/carrousel/micro4.jpg",
  },
  {
    id: 8,
    title: "Level Sensors",
    description:
      "Non-contact ultrasound fill-level transducers for solids and liquids in tanks and containers, developed to periodically monitor this magnitude through the cellular network.",
    image1: "assets/images/carrousel/level1.jpg",
    image2: "assets/images/carrousel/level2.jpg",
    image3: "assets/images/carrousel/level3.jpg",
    image4: "assets/images/carrousel/level4.jpeg",
  },
  {
    id: 9,
    title: "Cathodic Protection Power Supplies",
    description:
      "Development of compact 2kW power converters aimed to protect underground metallic pipelines, by injecting a current controlled by the local potential related to a reference electrode. With satellite synchronization and communication and typically used in oil and gas pipelines, it can be remotely programmed and polled for integrity statistics.",
    image1: "assets/images/carrousel/cathodic1.JPG",
    image2: "assets/images/carrousel/cathodic2.jpg",
    image3: "assets/images/carrousel/cathodic3.jpg",
    image4: "assets/images/carrousel/cathodic4.jpg",
  },
  {
    id: 10,
    title: "Intelligent Controllers for Street Lighting",
    description:
      "Devices developed as advanced photocontrollers for street, road and highway luminaires, featuring cellular or WiFi communication to a central management system. It is intended to be plugged into a standard ANSI C136 or NEMA socket. Aimed for smart city applications, it controls the light intensity by means of any of the standard interfaces (0/10V, PWM, DALI), based on a remotely reprogrammable timetable, contributing to obtain large electric energy savings and to extend the lamp lifetime as well. A Class I energy meter measures the energy drawn, reporting luminaire failures.",
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
});