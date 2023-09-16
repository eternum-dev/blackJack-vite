
/**
 * Esta funcion me permite  pasar la carta de String a un valor numerico
 * @param {String} card   Ejemplo: '8C'
 * @returns {number} retorna el valor numerico de la carta Ejemplo: 8
 */


export const valueCard = (card) => {

    const value = card.substring(0, card.length - 1);

    return (isNaN(value)) ?
        (value === 'A') ? 11 : 10
        : value * 1;
}