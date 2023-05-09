import { AddPLayer, createGameState, createTablePerPlayer, suffleCards } from "./helpers"
import { Card, GameState } from "./interfaces"
import { cards } from "./utils"
import viewDealer from './views/dealerView.html?raw'

const CARD_PER_PLAYER = 16
const NUM_PLAYERS = 6
const TIME_TO_DELAY = 500

let currentCard = ''

const app = document.getElementById('app')
if(app){
    app.innerHTML = viewDealer
}
const currentCardElement = document.getElementById('currentCard')
const playerWinner = document.getElementById('winner')

let gameState = createGameState(cards)

const generatePlayers = (cards:Card[], numPlayers:number, cardsPerPlayer:number) => {
    for(let i = 0; i < numPlayers; i++) {
        const table = createTablePerPlayer(cards, cardsPerPlayer)
        gameState = AddPLayer(gameState, {id: i, table})
    }
}

generatePlayers(cards, NUM_PLAYERS, CARD_PER_PLAYER)

const play = async(state:GameState):Promise<void> => {

    const dealer = suffleCards(state.dealer)

    /* dealer.forEach((card) => {
        console.log(`Gritón: ${card.name}`)
        state.players.forEach((player) => {
            const index = player.table.findIndex((_card) => _card.id === card.id)
            if(index !== -1) {
                player.table.splice(index, 1)
                if(player.table.length === 0) {
                    throw {message: 'Winner', playerId: player.id}
                }
            }
        })
    })

    throw new Error('No one won') */
    const showCards = async () => {
        for(const card of dealer){
            await new Promise((resolve) => setTimeout(resolve, TIME_TO_DELAY))
            currentCard = card.name
            console.log(`Gritón: ${currentCard}`)
            if(currentCardElement){
                currentCardElement.innerHTML = `Gritón: ${currentCard}`
            }
            for(const player of state.players){
                const index = player.table.findIndex((_card) => _card.id === card.id)
                if(index !== -1) {
                    player.table.splice(index, 1)
                    if(player.table.length === 0) {
                        if(playerWinner){
                            playerWinner.innerHTML = `Winner is ${player.id + 1}`
                        }
                        throw {message: 'Winner', playerId: player.id}
                    }
                }
            }
        }
        throw new Error('No one won')
    }
    await showCards()
}

try {
    await play(gameState)
} catch (e:any) {
    if(e.message ==='Winner'){
        console.log(`Winner is ${e.playerId + 1}`)
    }else{
        throw e
    }
}

