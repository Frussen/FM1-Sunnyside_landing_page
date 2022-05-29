const menu = document.querySelector('.header__menu');
const header = document.querySelector('.header');
const mobileMenu = document.querySelector('.header__mobileMenu');
const spans = document.querySelector('.header__menu').childNodes;
console.log(spans);
const socials = document.querySelectorAll('.social a');
console.log(socials);


menu.addEventListener('click', function() {
  if(header.classList.contains('open')) { //Close mobileMenu
    header.classList.remove('open');
    mobileMenu.classList.remove('fade-in');
    mobileMenu.classList.add('fade-out');
  }
  else {  //Open mobileMenu
    header.classList.add('open');
    mobileMenu.classList.remove('fade-out');
    mobileMenu.classList.add('fade-in');
  }
});

// To close the mobileMenu when user click outside of it
window.addEventListener('click', function(e) {
  if(header.classList.contains('open') && e.target!==mobileMenu && e.target!==menu && e.target!==spans[1] && e.target!==spans[3] && e.target!==spans[5]) {
    header.classList.remove('open');
    mobileMenu.classList.remove('fade-in');
    mobileMenu.classList.add('fade-out');
  }
})

// To display white social logos when the link is active
window.addEventListener("load", function() { //When loaded

  // Facebook icon
  socials[0].addEventListener('mousedown', function() {
    socials[0].childNodes[1].childNodes[0].contentDocument.firstChild.firstChild.setAttribute("fill", "#FFF");
  });
  socials[0].addEventListener('mouseup', function() {
    socials[0].childNodes[1].childNodes[0].contentDocument.firstChild.firstChild.setAttribute("fill", "#2C7566");
  });
  socials[0].addEventListener('mouseout', function() {
    socials[0].childNodes[1].childNodes[0].contentDocument.firstChild.firstChild.setAttribute("fill", "#2C7566");
  });

  // Instagram icon
  socials[1].addEventListener('mousedown', function() {
    socials[1].childNodes[1].childNodes[0].contentDocument.firstChild.firstChild.setAttribute("fill", "#FFF");
  });
  socials[1].addEventListener('mouseup', function() {
    socials[1].childNodes[1].childNodes[0].contentDocument.firstChild.firstChild.setAttribute("fill", "#2C7566");
  });
  socials[1].addEventListener('mouseout', function() {
    socials[1].childNodes[1].childNodes[0].contentDocument.firstChild.firstChild.setAttribute("fill", "#2C7566");
  });

  // Twitter icon
  socials[2].addEventListener('mousedown', function() {
    socials[2].childNodes[1].childNodes[0].contentDocument.firstChild.firstChild.setAttribute("fill", "#FFF");
  });
  socials[2].addEventListener('mouseup', function() {
    socials[2].childNodes[1].childNodes[0].contentDocument.firstChild.firstChild.setAttribute("fill", "#2C7566");
  });
  socials[2].addEventListener('mouseout', function() {
    socials[2].childNodes[1].childNodes[0].contentDocument.firstChild.firstChild.setAttribute("fill", "#2C7566");
  });

  // Pinterest icon
  socials[3].addEventListener('mousedown', function() {
    socials[3].childNodes[1].childNodes[0].contentDocument.firstChild.firstChild.setAttribute("fill", "#FFF");
  });
  socials[3].addEventListener('mouseup', function() {
    socials[3].childNodes[1].childNodes[0].contentDocument.firstChild.firstChild.setAttribute("fill", "#2C7566");
  });
  socials[3].addEventListener('mouseout', function() {
    socials[3].childNodes[1].childNodes[0].contentDocument.firstChild.firstChild.setAttribute("fill", "#2C7566");
  });
});