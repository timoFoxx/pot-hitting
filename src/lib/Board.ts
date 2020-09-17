import { Point } from "./Game";


export type potX = number;

export type potY = number;

export class Board {
    // Upper left corner point is denoted by x and y
    potWidth: number = 20
    potHeight: number = 20

    constructor(public x: potX, public y: potY) {}

    isOnPot = (p: Point): Boolean => {
        return Math.abs(p.x - this.x) < this.potWidth && Math.abs(p.y - this.y) < this.potHeight
    }

}
