import { easyPuzzle1 } from './puzzles'

type sectionType = 'row' | 'column' | 'square'
type stepType = 'setUpBlanks' | "place" | "remove" | "findSingle"
type stepPhase = "showActive" | "showCompare" | "place" | "remove" | "checkSingle" | "search"

interface step {
    stepSections: sectionType[],
    stepPhases: stepPhase[],
    stepType: stepType,
    stepIndexes: string[],
    stepValues: number[],
    stepValuesToRemove: number[], 
    stepSpotsToRemoveFrom?: number[]
}

export class Sudoku {
    public numbers: number = 9
    public givens: boolean[] = []
    public blanks: { [key: number]: number[] }
    private typePattern: sectionType[] = ['row', 'column', 'square']
    private blanksStepPhases: stepPhase[] = ["showActive", "showCompare"]
    private placeSteps: stepPhase[] = ["place"]
    public step: step
    private notes: string[] = []
    public grid: number[]

    constructor(grid: number[] = easyPuzzle1) {
        this.grid = grid.slice()
        this.numbers = Math.sqrt(grid.length)
        this.setGivens()
        this.setUpNewSection()
    }

    setUpNewSection() {
        this.setUpBlanks()
        this.setUpBlankStep()
    }

    takeStep() {
        if (this.step.stepType === "setUpBlanks") {
            if (!this.step.stepIndexes.length) {
                return
            }
            this.processBlanksStep()
        } else if (this.step.stepType === "place") {
            this.processPlaceStep()
        } else if (this.step.stepType === "remove") {
            this.processRemoveStep()
        } else if (this.step.stepType === "findSingle") {
            this.processFindSingle()
        }
    }

    processRemoveStep() {
        if (this.activePhase() === "showActive") {
            this.completeRemoveActive()
        } else if (this.activePhase() === "showCompare") {
            this.showRemoveActive()
        }
    }

    processPlaceStep() {
        if (this.activePhase() === "place") {
            // move into the show active for remove row
            this.showRemoveActive()
        }
    }

    processFindSingle() {
        let index
        let blankKeys = Object.keys(this.blanks)
        for (let i = 0; i < blankKeys.length; i++) {
            index = +blankKeys[i]
            if (this.blanks[index].length === 1) {
                this.notes.unshift(
                    `<div class="search-success">Found element to insert at ${index}. Value: ${this.blanks[index][0]}.</div><br>`
                )
                this.setValueToCell(index, this.blanks[index][0])
                return
            }
        }
        this.setUpBlankStepDefaults()
        this.notes.unshift(`<div class="search-failure">Can't find any single elements. Going back to checking cells.</div><br>`)
    }

    showRemoveActive() {
        this.setUpRemoveStep()
        const indexes = this.getIndexes(this.activeType(), this.currentSectionIndex())
        const indexesToRemoveFrom: number[] = []
        
        indexes.forEach((index) => {
            if(this.blanks[index] && this.blanks[index].indexOf(this.value(this.activeSpot())) !== -1) {
                indexesToRemoveFrom.push(index)
            }
        })
        this.step.stepSpotsToRemoveFrom = indexesToRemoveFrom

        if (indexesToRemoveFrom.length) {
            this.notes.unshift(
                `<div class="remove">Determined that ${this.value(this.activeSpot())} should be removed from indexes: ${indexesToRemoveFrom.join(',')}</div>`
            )
        } else {
            this.step.stepPhases = ["showCompare"]
            this.notes.unshift(
                `<div class="no-remove">Found no squares that need removal in ${this.activeType()}</div><br>`
            )
            this.step.stepSections.shift()
        }
        if (!this.step.stepSections.length) {
            this.setUpSearch()
        }
    }

    completeRemoveActive() {
        const value = this.value(this.activeSpot())
        const indexesToRemoveFrom = this.step.stepSpotsToRemoveFrom
        indexesToRemoveFrom.forEach((index) => {
            const options = this.blanks[index]
            const indexNum = options.indexOf(value)
            options.splice(indexNum, 1)
        })
        this.resetSpotsToRemoveFrom()
        this.step.stepPhases.shift()
        this.step.stepSections.shift()

        if (!this.step.stepSections.length) {
            this.setUpSearch()
        }
    }

    private setUpSearch() {
        this.step.stepIndexes.shift()
        this.step.stepValues = []
        this.notes.unshift(
            `Searching for any options with only one value`
        )
        this.step.stepPhases = ["search"]
        this.step.stepType = "findSingle"
    }

    processBlanksStep() {
        if (this.activePhase() === "showActive") {
            // show active moves into the process compare phase
            this.processActive()
        } else if (this.activePhase() === "showCompare") {
            // process compare will start to compare and setup removing
            this.processCompare()
        }
    }

    processCompare() {
        const valueOptions = this.step.stepValues
        const valuesToRemove = this.getToRemove()
        const newValues: number[] = []
        valueOptions.forEach((number) => {
            if (valuesToRemove.indexOf(number) === -1) {
                newValues.push(number)
            }
        })
        this.step.stepValues = newValues;
        this.step.stepSections.shift()

        if (newValues.length === 1) {
            this.notes.unshift(
                `<div class="found">Determined there is only 1 option for spot ${this.activeSpot()}: ${newValues[0]}</div><br>`
            )
            this.setValueToCell(this.activeSpot(), newValues[0])
        } else {
            if (this.step.stepSections.length) {
                this.resetBlankStepPhase()
            } else {
                this.blanks[this.activeSpot()] = this.step.stepValues
                this.step.stepIndexes.shift()
                this.setUpBlankStepDefaults()
            }
        }
    }

    setValueToCell(index: number, value: number) {
        this.grid[index] = value
        delete this.blanks[index]
        this.setUpPlaceStep()
        // remove index from steps indexes 
        const indexNum = this.step.stepIndexes.indexOf(index + '')
        if (indexNum !== -1) {
            this.step.stepIndexes.splice(indexNum, 1)
        }
        // append to beginning of steps indexes
        this.step.stepIndexes.unshift(index + "")
        this.step.stepValues = [value]
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

    private setUpPlaceStep() {
        this.step.stepSections = []
        this.step.stepPhases = this.placeSteps.slice()
        this.step.stepType = "place"
        this.resetStepRemove()
        this.resetStepTypePattern()
    }

    private setUpRemoveStep() {
        this.step.stepType = "remove"
        this.resetSpotsToRemoveFrom()
        this.resetBlankStepPhase()
    }

    private resetSpotsToRemoveFrom () {
        this.step.stepSpotsToRemoveFrom = []
    }

    private setUpBlankStep() {
        this.step = {
            stepSections: [],
            stepPhases: [],
            stepType: "setUpBlanks",
            stepIndexes: Object.keys(this.blanks),
            stepValues: [],
            stepValuesToRemove: []
        }
        this.setUpBlankStepDefaults()
    }

    private setUpBlankStepDefaults() {
        const numbers: number[] = []
        for (let i = 1; i <= this.numbers; i++) {
            numbers.push(i)
        }
        this.step.stepValues = numbers
        this.resetStepTypePattern()
        this.resetBlankStepPhase()
        this.step.stepType = "setUpBlanks"
    }

    private resetStepTypePattern() {
        this.step.stepSections = this.typePattern.slice()
    }

    private resetBlankStepPhase() {
        this.step.stepPhases = this.blanksStepPhases.slice()
        this.resetStepRemove()
    }

    private resetStepRemove() {
        this.step.stepValuesToRemove = []
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
        if (!this.activeSpot()) {
            return `I have finished all the logic I know.`
        }
        let string = ''
        const sectionIndex = this.currentSectionIndex()
        if (this.step.stepType === "setUpBlanks") {
            string += `<div class="current-step">Comparing spot @ ${this.activeSpot()} with ${this.activeType()} ${sectionIndex}.</div> <br>`
        } else if (this.step.stepType === "place") {
            string += `<div class="place">Placing ${this.value(this.activeSpot())} in ${this.activeSpot()}.</div> <br>`
        } else if (this.step.stepType === "remove") {
            string += `<div class="remove-note">Removing ${this.value(this.activeSpot())}s from ${this.activeType()} ${sectionIndex}.</div> <br>`
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

    public getOptions(index: number): number[] {
        if (this.activeSpot() === index) {
            return this.step.stepValues
        } else if (this.blanks[index]) {
            return this.blanks[index]
        }
        return []
    }

    public getToRemove() {
        return this.step.stepValuesToRemove
    }
}