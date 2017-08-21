import { sectionType, stepType, stepPhase, step } from './interfaces'
import { easy1 } from './puzzles'

export abstract class SudokuBase {
    public blanks: { [key: number]: number[] }
    public numbers: number = 9
    public givens: boolean[] = []
    public grid: number[]
    public step: step
    public notes: string[] = []

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

    // bases for methods at higher levels
    public setUpPlaceStep() {}
    public setUpSectionSingle() {}
    public sectionSingleFindActives() {}
    public resetStepRemove() {}
    public setUpSearch() {}
}
