
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


function initialise() {
  initialiseHeader();
  initialiseFAQExpanders();
}


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


function initialiseHeader() {
  window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").classList.add('header-scroll');
    } else {
      document.getElementById("header").classList.remove('header-scroll');
    }
  }
}


function joinEmailList() {
  grecaptcha.ready(function() {
    grecaptcha.execute('6LeSTW0lAAAAAPHSOMbGylNsXD7evuMBMSRacUsC', {action: 'submit'})
      .then(function(token) {
        const email = $("#email").val();
        return fetch("https://vault.bubbleprotocol.com:8125/bubble-join-email-list?email="+email+"&token="+token);
      })
      .then(() => {
        $("#email").text('');
        toggleHidden("#email", "#join-button", "#recaptcha-notice", "#thankyou-for-joining-text");
      })
      .catch(err => {
        console.error(err);
        toggleHidden("#email", "#join-button", "#recaptcha-notice", "#something-went-wrong-text");
      });
  });
}
window.joinEmailList = joinEmailList;


function validateEmail(event) {
  const email = $("#email").val();
  if (EMAIL_REGEX.test(email)) {
    enable("#join-button");
    if (event.key === 'Enter') joinEmailList();
  }
  else disable("#join-button");
}
window.validateEmail = validateEmail;


//
// CSS functions
//

function toggleHidden(...ids) {
  ids.forEach(id => $(id).toggleClass('hidden'));
}

function disable(...ids) {
  ids.forEach(id => $(id).addClass('disabled'));
}

function enable(...ids) {
  ids.forEach(id => $(id).removeClass('disabled'));
}