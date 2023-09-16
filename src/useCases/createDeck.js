import { shuffle } from 'underscore';

/**
 * 
 * @param {Array<String>} types          Ejemplo: ['C', 'D', 'H', 'S']; 
 * @param {Array<String>} specialTypes   Ejemplo: ['C', 'D', 'H', 'S']; 
 * @returns {Array<String>}              createDeck: retorna un arreglo de cartas
 */


export const createDeck = (types, specialTypes) => {

    if (!types || specialTypes.length === 0)
        throw new Error('types es obligatorio [String]');

    if (!types || specialTypes.length === 0)
        throw new Error('types es obligatorio [String]');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipe of types) {
            deck.push(i + tipe);
        }
    }

    for (let tipe of types) {
        for (let esp of specialTypes) {
            deck.push(esp + tipe);
        }
    }
  
    deck = shuffle(deck);

    return deck;
}