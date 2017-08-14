import { easyPuzzle1 } from './puzzles'

type sectionType = 'row' | 'column' | 'square'

export class Sudoku {
    public section: number = 0
    public numbers: number = 9
    public type: sectionType = 'row'
    public typePattern: sectionType[] = ['row', 'column', 'square']
    public activeNumber: number = 1
    public finishedNumbers: number[] = []
    public givens: boolean[] = []

    constructor(public grid: number[] = easyPuzzle1) {
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

    isGiven (index: number): boolean {
        return this.givens[index]
    }

    value (index: number): number {
        const value = this.grid[index]
        if (value) {
            return value
        }
    }

    nextSection (): number {
        this.section = (this.section + 1) % this.numbers
        return this.section
    }

    nextType(): string {
        let currentIndex = this.typePattern.indexOf(this.type)
        let nextIndex = (currentIndex + 1) % this.typePattern.length
        this.type = this.typePattern[nextIndex]
        return this.type
    }

    nextActiveNumber(): number {
        let number = this.activeNumber - 1
        number = (number + 1) % this.numbers
        if (this.finishedNumbers.length === this.numbers) {
            return
        }
        while (this.finishedNumbers.indexOf(number + 1) !== -1) {
            number = (number + 1) % this.numbers
        }
        this.activeNumber = number + 1
        return this.activeNumber
    }

    private inRow(index: number, row: number): boolean {
        let low = row * this.numbers
        let high = low + this.numbers - 1
        return index >= low && index <= high
    }

    private inColumn(index: number, column: number): boolean {
        return (index - column) % this.numbers === 0
    }

    inActiveSection(index: number): boolean {
        if (this.type === "row") {
            if (this.inRow(index, this.section)) {
                return true
            }
        } else if (this.type === "column") {
            if (this.inColumn(index, this.section)) {
                return true
            }
        }
        return false
    }
}