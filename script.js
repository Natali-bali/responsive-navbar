let myFunction = function() {
    document.querySelector('.menu-icon__lines').classList.toggle('menu-icon__cross');
    document.querySelector('#mobile-menu').classList.toggle('mobile-menu__active');
}
let menuIcon = document.querySelector('#menu-icon');
  menuIcon.onclick =  myFunction;


