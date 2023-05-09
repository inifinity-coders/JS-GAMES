import { Card, GameState, Player, TableCards } from "../interfaces"
/**
 * *Create Game State
 */
export const createGameState = (cards:Card[]): GameState => ({
    cards,
    players:[],
    dealer:[...cards]
})
/**
 * * AddPLayer
 */
export const AddPLayer = (gameState: GameState, player: Player): GameState => ({
    ...gameState,
    players:[...gameState.players, player]
})
/**
 * *Suffle Cards
 */
export const suffleCards = (cards: Card[]): Card[] => {
    const newArray = [...cards]

    for (let i = newArray.length - 1; i > 0; i--) {
        const j= Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }

    return newArray
}
/**
 * *Create Table per Player
 */
export const createTablePerPlayer = (cards: Card[], numberOfCards:number): TableCards => {
    const suffle = suffleCards(cards)
    return suffle.slice(0, numberOfCards)
}
