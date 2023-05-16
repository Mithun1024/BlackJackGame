/*let userInput1 = prompt("Please enter the card");
let userInput2 = prompt("Please enter the second card");
let firstCard = parseInt(userInput1);
let secondCard =parseInt(userInput2);*/

let cards=[]
let sum=0
let hasBlackJack = false
let isAlive = false
// let isNewcard=true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

//let sumEl=document.querySelector("#sum-el")

/* let userInput1 = prompt("Please enter the amount");
let money = parseInt(userInput1);
playerEl.textContent=money; */
let player= {
    name : "Mith",
    chips :145
}
let playerEl =document.getElementById("player-el")

playerEl.textContent=player.name+" "+player.chips



function getRandomCard()
{
   /*  let array = [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13];
    let rando = Math.round(Math.random() * array.length); */
    let rando = Math.floor(Math.random()*13)+1
    if(rando==1){
        return 11;
    }
    else if (rando>10)
    {
    return 10;
    }
    else{
        return rando
    }
}

function startGame()
{
    isAlive=true
    let firstCard = getRandomCard()  
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    RenderGame()
}


function RenderGame()
{
cardsEl.textContent="Cards :"
for (let i=0;i<cards.length;i++)
{
    cardsEl.textContent+=cards[i]+" "
}
sumEl.textContent="Sum: "+sum

if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
    // playerEl.textContent  -=parseInt(20)
} 
else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    // playerEl.textContent += parseInt(1000)
    hasBlackJack = true
    // isNewcard=false
} 
else {
    message = "You're out of the game! 😭"
    isAlive = false
    // isNewcard=false
}
messageEl.textContent=message
}

function NewCard(){
 
    // if(isNewcard)
    // {}
    
    if(isAlive ===true && hasBlackJack===false)
    {
    // playerEl.textContent -=parseInt(50)
    let card =getRandomCard()
    sum +=card
    cards.push(card)
    RenderGame()
    }
    else 
    {
        message = "You're out of the game! 😭,You cannot play"
        messageEl.textContent=message
        // playerEl.textContent -=parseInt(50)
        
    } 
    }
