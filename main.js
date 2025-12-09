/* De eerste interactie is al voor jullie uitgewerkt
   Als je op het 2e linkje klikt (Design), springt deze omhoog */

// Stap 1: selecteer het Design linkje, en sla deze op in een variabele
let designLink = document.querySelector('a[href="#design"]')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
designLink.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {
  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  designLink.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
// Dit is trouwens geen UIEvent, maar een AnimationEvent
designLink.addEventListener('animationend', jumpHandler)




// Ga zelf verder met de overige elementen, aan de hand van de instructies
// Maak bijvoorbeeld een scale animatie als je op de Frontend link klikt

// Stap 1: querySelector
// let scaleLink = document.querySelector...

// Stap 2: addEventListener
// scaleLink.addEventListener...

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
// scaleLink.classList.toggle...

const frontend = document.querySelector('[href="#frontend"]')

frontend.addEventListener('click', function() {
  frontend.classList.add('scale')
})

frontend.addEventListener('animationend', function() {
  frontend.classList.remove('scale')
})




// translate

const translate = document.querySelector('[href="#and"]')

translate.addEventListener('click', function() {
  translate.classList.toggle('translate')
})



//Development

const development = document.querySelector('[href="#development"]')

development.addEventListener('dblclick', function(){
  development.classList.add('shake')
})

development.addEventListener('animationend', function() {
  development.classList.remove('shake')
})



// Sprint 5 - kleur

const sprint5 = document.querySelector('[href="#sprint-5"]')

sprint5.addEventListener('focus', function() {
  sprint5.classList.add('kleur')
})

sprint5.addEventListener('animationend', function() {
  sprint5.classList.remove('kleur')
})



// Fix - textcontent

const fix = document.querySelector('[href="#fix"]')

fix.addEventListener('mouseenter', function() {
  fix.textContent = "Hallo wereld!"
})
fix.addEventListener('mouseleave', function() {
  fix.textContent = "Fix"
})


// The - mouse-out

const mouseOut = document.querySelector('[href="#the"]')

mouseOut.addEventListener('mouseout', function() {
  mouseOut.classList.add('mouse-out')
})


mouseOut.addEventListener('animationend', function() {
  mouseOut.classList.remove('mouse-out')
})


// flow / mousedown mouseup

const flow = document.querySelector('[href="#flow"]')

flow.addEventListener('mousedown', function() {
  flow.classList.add('flow')
})
flow.addEventListener('mouseup', function() {
  flow.classList.remove('flow')
})


// User / keyup

const keyUp = document.querySelector('[href="#user"]')

keyUp.addEventListener('keyup', function(e) {
  if (e.key === 'f') {
    keyUp.classList.add('key-up')
  }
})

keyUp.addEventListener('animationend', function() {
  keyUp.classList.remove('key-up')
})


// Interface - keydown

const interface = document.querySelector('[href="#interface"]')

interface.addEventListener('keydown', function(e) {
  if(e.key == "f") {
    interface.classList.add('interface')
  }
})

interface.addEventListener('keyup', function(e) {
  if(e.key == "f") {
    interface.classList.remove('interface')
  }
})


const scroll = document.querySelector('[href="#events"]')

scroll.addEventListener('wheel', function(e) {

  // Current size
  // https://www.tutorialspoint.com/get-and-set-css-variables-with-javascript
  const fontSize = getComputedStyle(scroll).getPropertyValue('--font-size')
  // returns string
  // console.log(typeof fontSize) 

  // string to number
  // https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/
  const numberFontSize = parseInt(fontSize, 10)
  // console.log(numberFontSize)



  const scrollAmount = Math.floor(e.deltaY) / 100
  console.log(scrollAmount)

  const newFontSize = numberFontSize + scrollAmount

  // console.log(newFontSize)

  // Change current size to updated size
  return scroll.style.setProperty('--font-size', newFontSize + 'px')
})