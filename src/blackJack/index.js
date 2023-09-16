import { createCardHtml, addCard, computerShift, createDeck, valueCard } from "../useCases";


let deck = [];
const types = ['C', 'D', 'H', 'S'];
const specialTypes = ['A', 'J', 'Q', 'K'];

let playerPoints = 0;

// Referencias del HTML
const btnAddCard = document.querySelector('#btnAddCard');
const btnStopGame = document.querySelector('#btnStopGame');
const btnNewGame = document.querySelector('#btnNewGame');
const playerCards = document.querySelector('#playerCards');
const pcCards = document.querySelector('#pcCards');
const pointsHTML = document.querySelectorAll('small');


deck = createDeck(types, specialTypes);

const card = addCard(deck);

valueCard(card);



// Eventos
btnAddCard.addEventListener('click', () => {
    const card = addCard(deck);

    playerPoints = playerPoints + valueCard(card);
    pointsHTML[0].innerText = playerPoints;

    const imgCard = createCardHtml(card);
    playerCards.append(imgCard);
    
    if (playerPoints > 21) {
        console.warn('Lo siento mucho, perdiste');
        btnAddCard.disabled = true;
        btnStopGame.disabled = true;
        computerShift(playerPoints, deck, pointsHTML, pcCards);

    } else if (playerPoints === 21) {
        btnAddCard.disabled = true;
        btnStopGame.disabled = true;
        computerShift(playerPoints, deck, pointsHTML);
    }
});


btnStopGame.addEventListener('click', () => {
    btnAddCard.disabled = true;
    btnStopGame.disabled = true;

    computerShift(playerPoints, deck, pointsHTML, pcCards);
});


btnNewGame.addEventListener('click', () => {
    deck = [];
    deck = createDeck(types, specialTypes);

    playerPoints = 0;

    pointsHTML[0].innerText = 0;
    pointsHTML[1].innerText = 0;

    pcCards.innerHTML = '';
    playerCards.innerHTML = '';

    btnAddCard.disabled = false;
    btnStopGame.disabled = false;
});

