
function initialiseFAQExpanders() {
  var faqs = document.getElementsByClassName("faq-button");
  for (let i=0; i<faqs.length; i++) {
    faqs[i].addEventListener("click", function() {
      this.classList.toggle("expanded");
      const content = this.nextElementSibling.getElementsByClassName("faq-text")[0];
      content.classList.toggle("hidden");
    });    
  }
}
