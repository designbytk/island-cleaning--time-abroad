// Modules
import MoveTo from 'moveto'
import textSwap from './modules/text-swap'
// import delayAnimation from './modules/delay-animation'
import animReveals from './modules/reveals'
// const observer = require('./modules/delay-animation');
import modalAppear from './modules/modal-appear'
import navbarScroll from './modules/navbar'


// Smooth scrolling with MoveTo.js
document.addEventListener('DOMContentLoaded', function () {
  const easeFunctions = {
    easeInQuad: function (t, b, c, d) {
      t /= d;
      return c * t * t + b;
    },
    easeOutQuad: function (t, b, c, d) {
      t /= d;
      return -c * t * (t - 2) + b;
    }
  }
  const moveTo = new MoveTo({
    ease: 'easeInQuad'
    //   duration: 800,
  }, easeFunctions);

  const triggers = document.getElementsByClassName('scroll-to');
  for (var i = 0; i < triggers.length; i++) {
    moveTo.registerTrigger(triggers[i]);
    //   triggers[i].parentElement.style.border = "3px solid blue";
  }
});

// Text Swap for Hero Section * dbtk
document.addEventListener('DOMContentLoaded', function () {
  textSwap()
  // delayAnimation()
  animReveals()
  modalAppear()
  const x = window.matchMedia("(min-width: 768px)")
  if (x.matches) {
    navbarScroll()
  }

});

// COVID close buttons and show more
// let covidClose = document.querySelector('.covid-close')
// let covidMore = document.querySelector('.covid-button')

// covidClose.addEventListener('click', function () {
//   covidClose.parentNode.classList.toggle('hide')
// })

// if(covidMore) {
//   covidMore.addEventListener('click', function () {
//     covidMore.classList.toggle('hide')
//     covidMore.nextElementSibling.classList.toggle('show')
//   })
// }