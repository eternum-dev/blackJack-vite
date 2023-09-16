/**
 * 
 * @param   {Array<string>} deck Ejemplo: ['KD', 'QD', '8C', '3C', '6C', '2C', 'JS', 'AD',]
 * @returns {Array<string>} retorna un String como carta   Ejemplo: '8C'
 */


export const addCard = (deck = []) => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }

    //elimina la carta del deck antes de retornarla 
    const card = deck.pop();

    return card;
}