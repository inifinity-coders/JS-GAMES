export type Card = {
    id: number
    name: string
}

export type TableCards = Card[]

export type Player = {
    id: number
    table: TableCards
}

export type GameState = {
    cards: Card[],
    players: Player[],
    dealer: Card[]
}