import { easyPuzzle1 } from './puzzles'

type sectionType = 'row' | 'column' | 'square'
type stepType = 'setUpBlanks'
type stepPhase = "showActive" | "showCompare" | "removeUnneeded"

interface step {
    stepSections: sectionType[],
    stepPhases: stepPhase[],
    stepType: stepType,
    stepIndexes: string[],
    stepValues: number[],
    stepValuesToRemove: number[], 
}

export class Sudoku {
    public numbers: number = 9
    public givens: boolean[] = []
    public blanks: { [key: number]: number[] }
    private typePattern: sectionType[] = ['row', 'column', 'square']
    private blanksStepPhases: stepPhase[] = ["showActive", "showCompare", "removeUnneeded"]
    public step: step
    private notes: string[] = []

    constructor(public grid: number[] = easyPuzzle1) {
        this.numbers = Math.sqrt(grid.length)
        this.setGivens()
        this.setUpNewSection()
    }

    setUpNewSection() {
        this.setUpBlanks()
        this.setUpStep()
    }

    takeStep() {
        if (this.activePhase() === "showActive") {
            // show active moves into the process compare phase
            this.processActive()
        } else if (this.activePhase() === "showCompare") {
            // process compare will start to compare and setup removing
            this.processCompare()
        } else if (this.activePhase() === "removeUnneeded") {
            // process remove will update the options
            this.processRemove()
        }
    }

    processCompare() {
        
    }

    processActive() {
        const valuesInSection = this.valuesInCurrentSection()
        const valueOptions = this.step.stepValues
        const valuesToRemove: number[] = []
        valuesInSection.forEach((number) => {
            if (valueOptions.indexOf(number) !== -1) {
                valuesToRemove.push(number)
            }
        })
        this.step.stepValuesToRemove = valuesToRemove
        this.step.stepPhases.shift()

        // explain the step
        if (valuesToRemove.length) {
            this.notes.unshift(
                `<div class="remove">Determined that ${valuesToRemove.join(',')} should be removed</div>`
            )
        } else {
            this.notes.unshift(
                `<div class="no-remove">Determined that no additional values should be removed</div>`
            )
        }
        if (valuesInSection.length) {
            this.notes.unshift(
                `<div class="found">Found values: ${valuesInSection.join(',')} in ${this.activeType()} ${this.currentSectionIndex()}.</div>`
            )
        } else {
            this.notes.unshift(
                `<div class="no-found">Found no values in ${this.activeType()} ${this.currentSectionIndex()}.</div>`
            )
        }
        this.notes.unshift(`<div class="consideration">Values in consideration for spot ${this.activeSpot()}: ${valueOptions.join(',')}</div>`)        
        this.notes.unshift('<br>') 
    }

    processRemove() {

    }

    private setUpStep() {
        this.step = {
            stepSections: [],
            stepPhases: [],
            stepType: "setUpBlanks",
            stepIndexes: Object.keys(this.blanks),
            stepValues: [],
            stepValuesToRemove: []
        }
        this.setUpStepDefaults()
    }

    private setUpStepDefaults() {
        const numbers: number[] = []
        for (let i = 1; i <= this.numbers; i++) {
            numbers.push(i)
        }
        this.step.stepValues = numbers
        this.step.stepValuesToRemove = []
        this.step.stepSections = this.typePattern.slice()
        this.step.stepPhases = this.blanksStepPhases.slice()
    }

    private setUpBlanks() {
        this.blanks = {}
        const grid = this.grid
        const blanks = {}
        const typePattern = this.typePattern
        const numbers: number[] = []
        this.grid.forEach((number, index) => {
            if (number === 0) {
                this.blanks[index] = []
            }
        })
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

    getIndexes(type: sectionType, section: number) {
        if (type === "row") {
            return this.rowIndexes(section)
        } else if (type === "column") {
            return this.columnIndexes(section)
        } else if (type === "square") {
            return this.squareIndexes(section)
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

    valuesInCurrentSection() {
        return this.valuesInSection(this.activeType(), this.currentSectionIndex())
    }

    check(type: sectionType, section: number, number: number) {
        const values = this.valuesInSection(type, section)
        return values.indexOf(number) !== -1
    }

    currentStepString() {
        let string = ''
        const sectionIndex = this.currentSectionIndex()
        if (this.activeSpot() !== null && this.activeType()) {
            string += `<div class="current-step">Comparing spot @ ${this.activeSpot()} with ${this.activeType()} ${sectionIndex}</div> <br>`
        }

        string += this.notes.join("")

        return string
    }

    currentSectionIndex() {
        return this.findSectionIndex(this.activeType(), this.activeSpot())
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

    inActiveSection(index: number): boolean {
        let type = this.activeType()
        let sectionIndex = this.currentSectionIndex()
        if (type === "row") {
            if (this.inRow(index, sectionIndex)) {
                return true
            }
        } else if (type === "column") {
            if (this.inColumn(index, sectionIndex)) {
                return true
            }
        } else if (type === "square") {
            if (this.inSquare(index, sectionIndex)) {
                return true
            }
        }
        return false
    }

    private inRow(index: number, row: number): boolean {
        let low = row * this.numbers
        let high = low + this.numbers - 1
        return index >= low && index <= high
    }

    private inColumn(index: number, column: number): boolean {
        return (index - column) % this.numbers === 0
    }

    private inSquare(index: number, square: number): boolean {
        const indexes = this.squareIndexes(square)
        return indexes.indexOf(index) !== -1
    }

    public activeSpot() {
        return +this.step.stepIndexes[0]
    }

    public activeType() {
        return this.step.stepSections[0]
    }

    public activePhase() {
        return this.step.stepPhases[0]
    }
}