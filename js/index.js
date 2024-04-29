
$(function() {
  $("#header").load("header.html"); 
  $("#footer").load("footer.html");
  const page = document.getElementById('page');
  page.addEventListener("scroll", animate);
  animatePartnersCarousel();
})


/**
 * Animate on scroll into view
 */

function animate() {
  var reveals = document.querySelectorAll(".animate");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("animation-active");
    } else {
      reveals[i].classList.remove("animation-active");
    }
  }
}


/**
 * Partners carousel
 */

function animatePartnersCarousel() {
  $('.partners-carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
      pauseOnHover: false,
      responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }]
  });
}