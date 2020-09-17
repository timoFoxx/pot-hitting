import { Board } from './Board'

export class Point {
    constructor(public x: number, public y: number) {}

    //calculates distance from mouse pointer to pot coords
    distanceFrom = (p: Point): number  => Math.sqrt(Math.pow(this.x - p.x, 2) + Math.pow(this.y - p.y, 2))
}

export interface GameEvent {
    score: number;
}

export class Win implements GameEvent {
    constructor(public score: number) {}
}

export class Cold implements GameEvent {
    constructor(public score: number) {}
}

export class Warm implements GameEvent {
    constructor(public score: number) {}
}

export class FirstClick implements GameEvent {
    constructor(public score: number) {}
}

//side effects
export class GameState {
    constructor(public distance: number | null, public score: number) {}

    setDistance = (p: number) => {
        this.distance = p
    }

    incrementScore = () => {
        this.score += 1;
    }
}

export type GameLoop = (e: Point) => GameEvent

export const Game = (board: Board, state: GameState = new GameState(null, 0)): GameLoop => (userEvent: Point): GameEvent => {
    const newDistance = userEvent.distanceFrom(new Point(board.x, board.y))
    // side effects here -> redux?
    if (board.isOnPot(userEvent)) {
        state.incrementScore()
        return new Win(state.score)
    } else if (state.distance == null) {
        state.setDistance(newDistance)
        return new FirstClick(state.score)
    } else if (state.distance > newDistance) {
        state.setDistance(newDistance)
        state.incrementScore()
        return new Warm(state.score)
    } else {
        state.setDistance(newDistance)
        state.incrementScore()
        return new Cold(state.score)
    }
}
