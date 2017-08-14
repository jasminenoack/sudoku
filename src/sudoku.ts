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
    public squareWidth: number = 3
    public optionSpots: {[key: number]: string[]} = {}
    public stepType: string = "setUp"
    // track strings explaining exclusions
    public excluded: string[] = []

    constructor(public grid: number[] = easyPuzzle1) {
        this.numbers = Math.sqrt(grid.length)
        this.setGivens()
        this.setUpNewSection()
    }

    setUpNewSection() {
        // todo when goes over setions/next number etc 
        let indexes = this.getIndexes()
        let values = this.valuesInSection(this.type, this.section)

        while (values.length === this.numbers || values.indexOf(this.activeNumber) !== -1) {
            this.nextActiveNumber()
            indexes = this.getIndexes()
            values = this.valuesInSection(this.type, this.section)
        }

        this.excluded = []
        this.optionSpots = {}
        indexes.forEach((index) => {
            if(!this.value(index)) {
                this.optionSpots[index] = this.typePattern.slice()
            }
        })
    }

    isOption(index: number) {
        return Object.keys(this.optionSpots).indexOf(index + '') !== -1
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
        this.section = (this.section + 1) 
        if (this.section == this.numbers) {
            this.section = this.section % this.numbers
            this.nextType()
        }
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
        number = (number + 1)
        if (number === this.numbers) {
            number = number % this.numbers
            this.nextSection()
        }
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

    getIndexes(type?: sectionType, section?: number) {
        const sectionType = type !== undefined ? type : this.type
        const sectionNumber = section !== undefined ? section : this.section
        if (sectionType === "row") {
            return this.rowIndexes(sectionNumber)
        } else if (sectionType === "column") {
            return this.columnIndexes(sectionNumber)
        } else if (sectionType === "square") {
            return this.squareIndexes(sectionNumber)
        }
    }

    squareIndexes(square: number) {
        const square1 = (Math.floor(square / 3) * 27) + (square % 3 * 3)
        const square2 = square1 + 9
        const square3 = square2 + 9
        const indexes = []
        for (let i = 0; i < 3; i++) {
            indexes.push(square1 + i)
            indexes.push(square2 + i)
            indexes.push(square3 + i)
        }
        return indexes
    }

    rowIndexes(row: number) {
        let low = row * this.numbers
        let high = low + this.numbers - 1
        const indexes = []
        for (let i = low; i <= high; i++) {
            indexes.push(i)
        }
        return indexes
    }

    columnIndexes(column: number) {
        const indexes = []
        for (let i = column; i < 81; i += this.numbers) {
            indexes.push(i)
        }
        return indexes
    }

    private inSquare(index: number, square: number): boolean {
        const indexes = this.squareIndexes(square)
        return indexes.indexOf(index) !== -1
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
        } else if (this.type === "square") {
            if (this.inSquare(index, this.section)) {
                return true
            }
        }
        return false
    }

    valuesInSection(type: sectionType, section: number) {
        const indexes = this.getIndexes(type, section)
        let values: number[] = []
        indexes.forEach((index) => {
            if (this.value(index)) {
                values.push(this.value(index))
            }
        })
        return values
    }

    check(type: sectionType, section: number, number: number) {
        const values = this.valuesInSection(type, section)
        return values.indexOf(number) !== -1
    }

    currentStepString() {
        if (this.stepType == "setUp") {
            return `Attempting to determine location for ${this.activeNumber} in ${this.type} ${this.section}`
        }
        else {
            return ''
        }
    }

    findSectionIndex(type: sectionType, index: number): number {
        if (type === "row") {
            return Math.floor(index / this.numbers)
        } else if (type === "column") {
            return index % this.numbers
        } else if (type === "square") {
            const squareRow = Math.floor(index / 27)
            const squareColumn = Math.floor((index % 9) / 3)
            return 3 * squareRow + squareColumn
        }
    }
}