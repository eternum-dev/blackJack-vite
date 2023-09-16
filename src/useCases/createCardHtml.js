
/**
 * Esta funcion nos permite insertar la carta en el html 
 * @param {String} card         Ejemplo: '8C'
 * @returns {HTMLImageElement}  retorna un img de la carta 
 */

export const createCardHtml = (card) => {
    if (!card) throw new Error('la carta es un argumento necesario');

    const imgCard = document.createElement('img');
    imgCard.src = `assets/cartas/${card}.png`;
    imgCard.classList.add('carta');


    return imgCard;
}