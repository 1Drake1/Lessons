"use strict"

window.addEventListener('load', pageLoaded)

function pageLoaded() {
   document.documentElement.classList.add('loaded')
}

const items = document.querySelectorAll('.list-brand__item')

items.forEach(item => {
   item.addEventListener('click', addActive)
   function addActive(e) {
      const hasActive = item.classList.contains('active')
      if (hasActive) {
         item.classList.remove('active')
      } else {
         item.classList.add('active')
      }
      e.preventDefault()
   }
})

let options = {
   root: null,
   rootMargin: '0px',
   threshold: 0.1,
}
let optionsTwo = {
   root: null,
   rootMargin: '0px',
   threshold: 0.3,
}

let callbackOne = (entries, observer) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         classAdd.classList.add('itemOne-visible')
      }
   });
}

let callbackTwo = (entries, observer) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         classAdd.classList.add('itemTwo-visible')
      }
   });
}
let callbackThird = (entries, observer) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         classAdd.classList.add('itemThird-visible')
      }
   });
}
let callbackFourth = (entries, observer) => {
   entries.forEach((entry) => {
      if (entry.isIntersecting) {
         targetFourth.classList.add('itemFourth-visible')
      }
   });
}

// let callbackFifth = (entries, observer) => {
//    entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//          classAdd.classList.add('itemFifth-visible')
//       }
//    });
// }

const classAdd = document.body

const targetOne = document.querySelector('.shopping')
let observerOne = new IntersectionObserver(callbackOne, options)
observerOne.observe(targetOne)

const targetTwo = document.querySelector('.explore-block')
let observerTwo = new IntersectionObserver(callbackTwo, options)
observerTwo.observe(targetTwo)

const targetThird = document.querySelector('.blog-block')
let observerThird = new IntersectionObserver(callbackThird, optionsTwo)
observerThird.observe(targetThird)

const targetFourth = document.querySelector('.main__head')
let observerFourth = new IntersectionObserver(callbackFourth, options)
observerFourth.observe(targetFourth)
// const targetFifth = document.querySelector('.choose-brand ')
// let observerFifth = new IntersectionObserver(callbackFifth, options)
// observerFifth.observe(targetFifth)


