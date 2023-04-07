
function initialiseFAQExpanders() {
  var faqs = document.getElementsByClassName("faq-button");
  for (let i=0; i<faqs.length; i++) {
    faqs[i].addEventListener('click', function() {
      this.classList.toggle("expanded");
      const content = this.nextElementSibling.getElementsByClassName("faq-text")[0];
      content.classList.toggle("hidden");
    });    
  }
}

function initialise() {
  initialiseFAQExpanders();
  window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").classList.add('header-scroll');
    } else {
      document.getElementById("header").classList.remove('header-scroll');
    }
  }
}