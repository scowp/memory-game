const cardBoard = document.querySelector(".cardboard");
const images = [
    "draven-card.jpg",
    "irelia-card.jpg",
    "kayn-card.jpg",
    "lulu-card.jpg",
    "pyke-card.jpg",
    "qiyana-card.jpg"
]

let cardHTML = ""

images.forEach(img => {
  cardHTML += `
  <div class="memory-card" data-card="${img}">
    <img class="front-face" src="images/${img}"/>
    <img class="back-face" src="images/lol-card.jpg">
  </div>`
});

cardBoard.innerHTML = cardHTML + cardHTML;

const cards = document.querySelectorAll('.memory-card')
let firstCard, secondCard
let lockCard = false

function flipCard(){
  if(lockCard) return false
    this.classList.add("flip")
    if(!firstCard){
    firstCard = this    
    return false
    }
    
    secondCard = this
    checkForMatch()
}

function checkForMatch(){
  let isMatch = firstCard.dataset.card === secondCard.dataset.card

  !isMatch ? disableCards(): resetCards(isMatch)
}

function disableCards(){
  lockCard = true

  setTimeout(() => {
  firstCard.classList.remove("flip")
  secondCard.classList.remove("flip")
  
  resetCards()
  }, 1000)
}

(function shuffle(){
  cards.forEach(card => {
    let rand = Math.floor(Math.random() * 12)
    card.style.order = rand
  })
})()

function resetCards(isMatch = false){
  if(isMatch){
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
  }
  firstCard = null
  secondCard = null
  lockCard = false  
}

cards.forEach(card => card.addEventListener('click', flipCard))