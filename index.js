const numOne = document.querySelector('.one')
const numTwo = document.querySelector('.two')
const numThree = document.querySelector('.three')
const numFour = document.querySelector('.four')
const form = document.querySelector('.form')
const plan = document.querySelector('.plan')
const addOn = document.querySelector('.add-on')
const summary = document.querySelector('.summary')
const firstBtn = document.querySelector('.first-btn')
const secondBtn = document.querySelector('.second-btn')
const thirdBtn = document.querySelector('.third-btn')
const firstBack = document.querySelector('.first-back')
const secondBack = document.querySelector('.second-back')
const thirdBack = document.querySelector('.third-back')
const confirmBtn = document.querySelector('.confirm-btn')
const finalOutput = document.querySelector('.final-output')
const sideBarNum = document.querySelector('side-bar-num')
const numBtn = document.getElementById('.btn-num')

function toggleSection(button, section, hideSections) {
  button.addEventListener('click', (event) => {
    event.preventDefault()
    if (section.style.display === 'none') {
      hideSections.forEach((s) => {
        s.style.display = 'none'
      })
      section.style.display = 'block'
    } else {
      section.style.display = 'none'
    }
  })
}
toggleSection(numOne, form, [plan, addOn, summary])
toggleSection(numTwo, plan, [form, addOn, summary])
toggleSection(numThree, addOn, [form, plan, summary])
toggleSection(numFour, summary, [plan, addOn, form])

function navigate(event, currentElem, previousElem, nextElem) {
  event.preventDefault
  if (currentElem.style.display === 'block') {
    previousElem.style.display = 'block'
    currentElem.style.display = 'none'
  } else {
    currentElem.style.display = 'none'
    nextElem.style.display = 'block'
  }
}

firstBack.addEventListener('click', (event) => {
  navigate(event, plan, form, plan)
})
secondBack.addEventListener('click', (event) => {
  navigate(event, addOn, plan, addOn)
})
thirdBack.addEventListener('click', (event) => {
  navigate(event, summary, addOn, summary)
})
firstBtn.addEventListener('click', (event) => {
  navigate(Event, form, plan, plan)
})
secondBtn.addEventListener('click', (event) => {
  navigate(Event, plan, addOn, addOn)
})
thirdBtn.addEventListener('click', (event) => {
  navigate(Event, addOn, summary, summary)
})
