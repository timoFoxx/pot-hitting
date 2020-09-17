import { Board } from './Board'
import { Cold, FirstClick, Game, Point, Warm, Win } from './Game'

describe('Game', () => {
    test("top left corner pot with a win", () => {
        const gameLoop = Game(new Board(0, 0))

        expect(gameLoop(new Point(50, 50))).toBeInstanceOf(FirstClick)
        expect(gameLoop(new Point(70, 70))).toBeInstanceOf(Cold)
        expect(gameLoop(new Point(40, 40))).toBeInstanceOf(Warm)
        expect(gameLoop(new Point(100, 100))).toBeInstanceOf(Cold)

        // Winning click!
        const win = gameLoop(new Point(10, 10))
        expect(win).toBeInstanceOf(Win)
        expect(win.score).toEqual(4)
    })

    test("center center pot", () => {
        const gameLoop = Game(new Board(240, 240))

        expect(gameLoop(new Point(50, 50))).toBeInstanceOf(FirstClick)
        expect(gameLoop(new Point(70, 70))).toBeInstanceOf(Warm)
        expect(gameLoop(new Point(40, 40))).toBeInstanceOf(Cold)
        expect(gameLoop(new Point(100, 100))).toBeInstanceOf(Warm)

        // Winning click!
        const win = gameLoop(new Point(242, 242))
        expect(win).toBeInstanceOf(Win)
        expect(win.score).toEqual(4)
    })
})
