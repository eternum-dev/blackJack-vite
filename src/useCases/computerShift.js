import { createCardHtml, addCard, valueCard } from './';


/**
 * 
 * @param {Number} minPoints        Elemplo: 19 
 * @param {Array<String>} deck      Ejemplo: ['KD', 'QD', '8C', '3C', '6C', '2C', 'JS', 'AD',]
 * @param {HTMLElement} pointsHTML  elemento html para mostrar los puntos del jugador 
 * @param {HTMLElement} pcCards     elemento html para mostrar las cartas de la computadora 
 */

export const computerShift = (minPoints, deck, pointsHTML, pcCards) => {

    if (!minPoints) throw new Error('minPoints deben ser enviados');

    if (!pointsHTML) throw new Error('pointsHTML debe ser enviado');

    let pcPoints = 0;

    do {
        const card = addCard(deck);

        pcPoints = pcPoints + valueCard(card);
        pointsHTML[1].innerText = pcPoints;

        const imngCard = createCardHtml(card);
        pcCards.append(imngCard);
        if (minPoints > 21) {
            break;
        }

    } while ((pcPoints < minPoints) && (minPoints <= 21));

    setTimeout(() => {
        if (pcPoints === minPoints) {
            alert('Nadie gana :(');
        } else if (minPoints > 21) {
            alert('Computadora gana');
        } else if (pcPoints > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana');
        }
    }, 100);
}