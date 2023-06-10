let card_list, tot;
let cardEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
let isAlive, hasBlackJack;


function startGenCard(){
    card_list = [];
    for (let i=0; i<2; i++) {
        card_list.push(Math.floor(Math.random() * 10)+2);
    }
}

function findTot() {
    tot = 0;
    for (let i=0; i<card_list.length; i++) {
        tot += card_list[i];
    }
}

function renderGame() {
    findTot();
    cardEl.textContent = "Cards :" + card_list.join(" ");
    sumEl.textContent = "Sum :" + tot;
}

function startGame() {
    isAlive = true;
    hasBlackJack = false;
    startGenCard();
    renderGame();
    check();
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        card_list.push(Math.floor(Math.random() * 10)+2);
        renderGame();
        check();
    }
}

function check() {
    if (tot < 21) {
        messageEl.textContent = "Do you want to draw a new card?";
    } else if (tot === 21) {
        messageEl.textContent = "You win! BlackJack!";
        hasBlackJack = true;
    } else {
        messageEl.textContent = "You lose!";
        isAlive = false;
    }
}