(function($) {
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("menu");
  var close = document.getElementById("menu-close");

  toggle.addEventListener("click", function(e) {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    } else {
      menu.classList.add("open");
    }
  });

  close.addEventListener("click", function(e) {
    menu.classList.remove("open");
  });

  // Close menu after click on smaller screens
  $(window).on("resize", function() {
    if ($(window).width() < 846) {
      $(".main-menu a").on("click", function() {
        menu.classList.remove("open");
      });
    }
  });

  $(".owl-carousel").owlCarousel({
    items: 4,
    lazyLoad: true,
    loop: true,
    dots: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });

  $(".hover").mouseleave(function() {
    $(this).removeClass("hover");
  });

  $(".isotope-wrapper").each(function() {
    var $isotope = $(".isotope-box", this);
    var $filterCheckboxes = $('input[type="radio"]', this);

    var filter = function() {
      var type = $filterCheckboxes.filter(":checked").data("type") || "*";
      if (type !== "*") {
        type = '[data-type="' + type + '"]';
      }
      $isotope.isotope({ filter: type });
    };

    $isotope.isotope({
      itemSelector: ".isotope-item",
      layoutMode: "masonry"
    });

    $(this).on("change", filter);
    filter();
  });

  lightbox.option({
    resizeDuration: 200,
    wrapAround: true
  });
})(jQuery);

  // Email JS

  const btn = document.getElementById('form-submit-button');

  document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_eyqvvj9';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
      document.getElementById('form').reset();
      window.location.href = "thanks.html"; 
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
});

  const translations = {
    en: {
      aboutMeTitle: "About Me",
      profession: "Front End Programmer",
      cvButtonTitle: "My CV",
      technologyStackTitle: "Technology Stack",
      myWorkTitle: "My Work",
      contactMeTitle: "Contact Me",
      paragraphMboutMe: "Hello, Hello! I'm a 25-year-old Colombian web programmer currently based in Buenos Aires. I’ve been passionate about programming since 2022, and I enjoy creating useful solutions that drive project success. I am always driven by curiosity and seek to make a positive impact with every challenge.",
      myCodingJourneyTitle: "My Coding Journey",
      myCodingJourneyParagraph: "I started programming to combine my interest in technology with creating practical solutions. Learning on my own wasn’t easy, but persistence taught me that challenges are part of the process. A key moment was when I worked on an online store project and chose to research and experiment independently. Since then, I've embraced this method—think, research, structure, and apply—which has deeply enriched my work",
      currentProjectsTitle: "Current Projects",
      currentProjectsSubtitle: "FollowUp: Your Personal Organization Assistant",
      CurrentProjectsText: `A work-in-progress project that combines a GitHub-style commit tracker for habits and an expense organizer into a single platform. It will also include a to-do list, which is another project showcased in this portfolio. Designed to simplify time management and enhance productivity. 
                            <br> I'm also learning <span class="highlight">TypeScript</span> to achieve better and more efficient code across all my projects.`,
      projectDescriptionOne: "A robust and scalable e-commerce features sign-up, log-in, shopping cart, order checkout, and a search bar, providing a seamless user experience.",
      projectDescriptionTwo: "Lets users browse the catalog, view detailed product information, add products to the cart, and more features for a delightful experience.",
      projectDescriptionThree: "Elegant portfolio landing designed to reflect the photographer’s unique style and earn client trust—crafted with attention to every detail.",
      ViewCodeButton: `View Code <i class="fa fa-github"></i>`,
      contactMeDescription: "Contact Me If you have a project in mind or want to collaborate, i am always open to new ideas and would love to hear from you. I will respond promptly your message.",
      sendMessageButton: "Send Message"

    },
    es: {
      aboutMeTitle: "Sobre Mí",
      profession: "Programador Front End",
      cvButtonTitle: "Mi CV",
      technologyStackTitle: "Stack Tecnológico",
      myWorkTitle: "Mi Trabajo",
      contactMeTitle: "Contacto",
      paragraphMboutMe: "¡Hola! Soy un programador web de 25 años nacido en Colombia, actualmente radicado en Buenos Aires. Desde 2022 descubrí mi pasión por la programación, y desde entonces disfruto creando soluciones útiles que impulsan el éxito de los proyectos. La curiosidad me mueve constantemente, y en cada desafío busco generar un impacto positivo.",
      myCodingJourneyTitle: "Mi Camino Como Programador",
      myCodingJourneyParagraph: "Comencé a programar para combinar mi interés por la tecnología con la creación de soluciones prácticas. Aprender por mi cuenta no fue fácil, pero la perseverancia me enseñó que los desafíos son parte del proceso. Un momento clave fue cuando trabajé en un proyecto de tienda online y decidí investigar y experimentar de forma independiente. Desde entonces, adopté un método que ha enriquecido profundamente mi trabajo: pensar, investigar, estructurar y aplicar.",
      currentProjectsTitle: "Proyectos En Curso",
      currentProjectsSubtitle: "FollowUp: tu asistente personal de organización",
      CurrentProjectsText: `Proyecto en desarrollo que integra un sistema de seguimiento de hábitos inspirado en los commits de GitHub con un organizador de gastos, todo en una misma plataforma. También incluirá una lista de tareas, basada en otro proyecto que forma parte de este portfolio. Está diseñado para simplificar la gestión del tiempo y potenciar la productividad. 
                            <br>Actualmente estoy aprendiendo <span class="highlight">TypeScript</span> para lograr un código más eficiente y escalable en todos mis proyectos.`,
      projectDescriptionOne: "Una solución de e-commerce robusta y escalable que incluye registro de usuarios, inicio de sesión, carrito de compras, resumen de la orden y barra de búsqueda, ofreciendo fluidez y eficiencia.",
      projectDescriptionTwo: "Permite sexplorar el catálogo, ver información detallada de cada producto, agregar artículos al carrito y acceder a otras funciones pensadas para ofrecer una experiencia intuitiva y agradable.",
      projectDescriptionThree: "portfolio elegante, diseñado para reflejar el estilo único del fotógrafo y generar confianza en sus clientes, fué creado con atención minuciosa a cada detalle.",
      ViewCodeButton: `Código <i class="fa fa-github"></i>`,
      contactMeDescription: "Contáctame Si tienes un proyecto en mente o quieres colaborar, estoy abierto a nuevas ideas y me encantaria escucharte. Responderé tu mensaje con la mayor prontitud posible.",
      sendMessageButton: "Enviar Mensaje"

    }
  };




function setLanguage(lang) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    el.innerHTML = translations[lang] [key];
  });
}


window.onload = () => {
  setLanguage("en");
};
