const cardBoard = document.querySelector(".cardboard");
const images = [
    "draven.jpg",
    "irelia.jpg",
    "kayn.jpg",
    "lulu.jpg",
    "pyke.jpg",
    "qiyana.jpg"
]

let cardHTML = ""

images.forEach(img => {
  cardHTML += `
  <div class="memory-card">
    <img class="front-face" src="images/${img}"/>
    <img class="back-face" src="images/lol-card.jpg">
  </div>`
});

cardBoard.innerHTML = cardHTML + cardHTML;

const cards = document.querySelectorAll('.memory-card')
let firstCard, secondCard
function flipCard(){
    this.classList.add("flip")
    if(!firstCard){
    firstCard = this    
    return false
    }
    
}

cards.forEach(card => card.addEventListener('click', flipCard))