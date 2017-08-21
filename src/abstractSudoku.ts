import { sectionType, stepType, stepPhase, step } from './interfaces'
import { easy1 } from './puzzles'

export abstract class SudokuBase {
    public blanks: { [key: number]: number[] }
    public numbers: number = 9
    public givens: boolean[] = []
    public grid: number[]
    public step: step

    constructor(grid: number[]) {
        this.grid = grid.slice()
        this.numbers = Math.sqrt(grid.length)
        this.setGivens()
    }

    private setGivens() {
        this.grid.forEach((number) => {
            if (number !== 0) {
                this.givens.push(true)
            } else {
                this.givens.push(false)
            }
        })
    }
}
