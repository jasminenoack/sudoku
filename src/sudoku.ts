import { easy1 } from './puzzles'

type sectionType = 'row' | 'column' | 'square'
type stepType = 'setUpBlanks' | "place" | "remove" | "findSingle" | "sectionSingle" | "endStep" | "subsectionOptionSets" | "processFoundSubsections"
type stepPhase = "showActive" | "showCompare" | "place" | "remove" | "checkSingle" | "search" | "processSection"

interface step {
    stepSections: sectionType[],
    stepPhases: stepPhase[],
    stepType: stepType,
    stepIndexes: string[],
    stepValues: number[],
    stepValuesToRemove: number[], 
    stepSpotsToRemoveFrom?: number[],
    valuesToPlace?: {[key: number]: number},
    stepSubsectionsToProcess?: { [key: string]: number[] }[]
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

    constructor(grid: number[] = easy1) {
        this.grid = grid.slice()
        this.numbers = Math.sqrt(grid.length)
        this.setGivens()
        this.setUpNewSection()

        // TODO remove
        // this.blanks = { 1: [3, 4], 4: [3, 7], 5: [1, 3, 7], 6: [1, 4], 10: [5, 8], 12: [5, 9], 14: [5, 8, 9], 18: [3, 4, 8], 19: [3, 4, 5, 8], 22: [3, 5], 23: [1, 3, 5, 8], 26: [1, 4], 27: [3, 4, 7, 8, 9], 28: [3, 4, 5, 6, 8, 9], 29: [3, 4, 5], 31: [3, 5, 6, 7], 32: [3, 5, 7], 34: [4, 9], 35: [3, 4, 6, 7, 9], 36: [3, 7], 37: [1, 3, 6], 38: [1, 2, 3], 41: [2, 3, 7], 44: [1, 3, 6, 7], 45: [3, 4, 7, 9], 46: [1, 3, 4, 5, 6, 9], 47: [1, 2, 3, 4, 5], 49: [3, 5, 6, 7], 50: [2, 3, 5, 7], 51: [1, 3, 4, 7], 52: [1, 4, 9], 53: [1, 3, 4, 6, 7, 9], 57: [3, 9], 60: [3, 4], 62: [3, 4, 9], 63: [3, 4, 9], 64: [1, 3, 4, 9], 65: [1, 3, 4], 66: [3, 5, 7, 9], 68: [3, 5, 7, 9], 71: [1, 3, 4, 5, 7, 9], 74: [1, 3], 75: [3, 5, 7, 9], 78: [1, 3, 7], 79: [1, 9], 80: [1, 3, 5, 7, 9] }
        // this.step = { 
        //     "stepSections": ["square"], 
        //     "stepPhases": ["processSection"], 
        //     "stepType": "subsectionOptionSets", 
        //     "stepIndexes": [], 
        //     "stepValues": [8], 
        //     "stepValuesToRemove": [], 
        //     "stepSpotsToRemoveFrom": [], 
        //     "valuesToPlace": {}, 
        //     "stepSubsectionsToProcess": [
        //         { "indexesToCompare": [12, 13, 14, 21, 22, 23], "indexesToIgnore": [3, 4, 5], "numbersToRemove": [7] }, 
        //         { "indexesToCompare": [3, 4, 5, 21, 22, 23], "indexesToIgnore": [12, 13, 14], "numbersToRemove": [9] }, 
        //         { "indexesToCompare": [36, 37, 38, 45, 46, 47], "indexesToIgnore": [27, 28, 29], "numbersToRemove": [8] }, 
        //         { "indexesToCompare": [69, 70, 71, 78, 79, 80], "indexesToIgnore": [60, 61, 62], "numbersToRemove": [4] }, 
        //         { "indexesToCompare": [28, 29, 37, 38, 46, 47], "indexesToIgnore": [27, 36, 45], "numbersToRemove": [7] }, 
        //         { "indexesToCompare": [27, 29, 36, 38, 45, 47], "indexesToIgnore": [28, 37, 46], "numbersToRemove": [6] }, 
        //         { "indexesToCompare": [27, 28, 36, 37, 45, 46], "indexesToIgnore": [29, 38, 47], "numbersToRemove": [2, 5] }, 
        //         { "indexesToCompare": [58, 59, 67, 68, 76, 77], "indexesToIgnore": [57, 66, 75], "numbersToRemove": [3, 7] }, 
        //         { "indexesToCompare": [30, 32, 39, 41, 48, 50], "indexesToIgnore": [31, 40, 49], "numbersToRemove": [6] }, 
        //         { "indexesToCompare": [3, 4, 12, 13, 21, 22], "indexesToIgnore": [5, 14, 23], "numbersToRemove": [1, 8] }, 
        //         { "indexesToCompare": [30, 31, 39, 40, 48, 49], "indexesToIgnore": [32, 41, 50], "numbersToRemove": [2] }, 
        //         { "indexesToCompare": [33, 35, 42, 44, 51, 53], "indexesToIgnore": [34, 43, 52], "numbersToRemove": [4] }, 
        //         { "indexesToCompare": [33, 34, 42, 43, 51, 52], "indexesToIgnore": [35, 44, 53], "numbersToRemove": [6] }, 
        //         { "indexesToCompare": [60, 61, 69, 70, 78, 79], "indexesToIgnore": [62, 71, 80], "numbersToRemove": [5] }, 
        //         { "indexesToCompare": [28, 37, 46, 55, 64, 73], "indexesToIgnore": [1, 10, 19], "numbersToRemove": [5] }, 
        //         { "indexesToCompare": [0, 1, 2, 6, 7, 8], "indexesToIgnore": [3, 4, 5], "numbersToRemove": [7] }, 
        //         { "indexesToCompare": [9, 10, 11, 15, 16, 17], "indexesToIgnore": [12, 13, 14], "numbersToRemove": [9] }, 
        //         { "indexesToCompare": [32, 41, 50, 59, 68, 77], "indexesToIgnore": [5, 14, 23], "numbersToRemove": [1, 8] }, 
        //         { "indexesToCompare": [30, 31, 32, 33, 34, 35], "indexesToIgnore": [27, 28, 29], "numbersToRemove": [8] }, 
        //         { "indexesToCompare": [0, 9, 18, 54, 63, 72], "indexesToIgnore": [27, 36, 45], "numbersToRemove": [7] }, 
        //         { "indexesToCompare": [1, 10, 19, 55, 64, 73], "indexesToIgnore": [28, 37, 46], "numbersToRemove": [6] }, 
        //         { "indexesToCompare": [2, 11, 20, 56, 65, 74], "indexesToIgnore": [29, 38, 47], "numbersToRemove": [2] }, 
        //         { "indexesToCompare": [4, 13, 22, 58, 67, 76], "indexesToIgnore": [31, 40, 49], "numbersToRemove": [6] }, 
        //         { "indexesToCompare": [5, 14, 23, 59, 68, 77], "indexesToIgnore": [32, 41, 50], "numbersToRemove": [2] }, 
        //         { "indexesToCompare": [8, 17, 26, 62, 71, 80], "indexesToIgnore": [35, 44, 53], "numbersToRemove": [6] }, 
        //         { "indexesToCompare": [66, 67, 68, 69, 70, 71], "indexesToIgnore": [63, 64, 65], "numbersToRemove": [4, 9] }
        //     ] 
        // }
        // this.grid = [2, 0, 9, 6, 0, 0, 0, 5, 8, 1, 0, 7, 0, 4, 0, 6, 3, 2, 0, 0, 6, 2, 0, 0, 9, 7, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 4, 9, 0, 5, 8, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 5, 7, 8, 0, 1, 6, 0, 2, 0, 0, 0, 0, 0, 2, 0, 8, 6, 0, 6, 2, 0, 0, 8, 4, 0, 0, 0]
    }

    setUpNewSection() {
        this.setUpBlanks()
        this.setUpBlankStep()
    }

    takeStep() {
        if (this.grid.indexOf(0) === -1) {
            return
        }
        if (this.step.stepType === "setUpBlanks") {
            if (!this.step.stepIndexes.length) {
                this.setUpSectionSingle()
                this.sectionSingleFindActives()
            } else {
                this.processBlanksStep()
            }
        } else if (this.step.stepType === "place") {
            this.processPlaceStep()
        } else if (this.step.stepType === "remove") {
            this.processRemoveStep()
        } else if (this.step.stepType === "findSingle") {
            this.processFindSingle()
        } else if (this.step.stepType === "sectionSingle") {
            this.processSectionSingle()
        } else if (this.step.stepType === "subsectionOptionSets") {
            this.subsectionOptionsStep()
        } else if (this.step.stepType === "processFoundSubsections") {
            this.processSubsectionStep()
        }
    }

    processSubsectionStep() {
        if (this.step.stepPhases[0] === "showActive") {
            this.processSubsectionActive()
        } else if (this.step.stepPhases[0] === "processSection") {
            this.processSubSectionProcess()
        }
    }

    private optionsToRemoveFrom (value: number, indexes: number[]): number[] {
        const locationsToRemove: number[] = []
        indexes.forEach((index: number) => {
            if (this.blanks[index] && this.blanks[index].indexOf(value) !== -1) {
                locationsToRemove.push(index)
            }
        })
        return locationsToRemove
    }

    private processSubSectionProcess() {
        const numberToRemove = this.step.stepSubsectionsToProcess[0].numbersToRemove[0]
        const indexesToRemoveFrom = this.step.stepSpotsToRemoveFrom
        indexesToRemoveFrom.forEach((index) => {
            const options = this.blanks[index]
            this.removeFromOptions(options, numberToRemove)
        })
        this.step.stepPhases = ['showActive', 'processSection']
        const numbersToRemove = this.step.stepSubsectionsToProcess[0].numbersToRemove
        if (numbersToRemove.length === 1) {
            this.step.stepSubsectionsToProcess.shift()
        } else {
            numbersToRemove.shift()
        }
        if (!this.step.stepSubsectionsToProcess.length) {
            this.setUpSearch()
        }
    }

    private processSubsectionActive() {
        const numbersToRemove = this.step.stepSubsectionsToProcess[0].numbersToRemove
        const indexes = this.step.stepSubsectionsToProcess[0].indexesToIgnore
        const compare = this.step.stepSubsectionsToProcess[0].indexesToCompare
        this.notes.push(
            `<div class="processing">Processing ${numbersToRemove[0]} in ${indexes} removing from ${compare}.</div>`
        )
        const locationsToRemove = this.optionsToRemoveFrom(numbersToRemove[0], compare)

        if (locationsToRemove.length) {
            this.notes.push(
                `Found ${locationsToRemove.length} to remove.`
            )
            this.step.stepSpotsToRemoveFrom = locationsToRemove
            this.step.stepPhases.shift()
        } else {
            this.notes.push(`Found no locations to remove.`)
            if (numbersToRemove.length === 1) {
                this.step.stepSubsectionsToProcess.shift()
            } else {
                numbersToRemove.shift()
            }
        }
        if (!this.step.stepSubsectionsToProcess.length) {
            this.setUpSearch()
        }
    }

    private setupSubsectionOptions() {
        this.step.stepSections = this.typePattern.slice()
        this.step.stepPhases = ["processSection"]
        this.step.stepSubsectionsToProcess = []
        this.setStepValueIndexes()
    }

    subsectionOptionsStep() {
        const findings = this.subSectionsToEvaluate(this.step.stepSections[0], this.step.stepValues[0])
        findings.forEach((finding) => {
            this.notes.push(
                `<div class="found">Found values: ${finding.numbersToRemove} only in indexes ${finding.indexesToIgnore} in ${this.activeType()} ${this.step.stepValues[0]} they are listed for processing.</div>`
            )
        })
        this.step.stepSubsectionsToProcess = this.step.stepSubsectionsToProcess.concat(findings)
        this.notes.push(`<div class="found">Has ${this.step.stepSubsectionsToProcess.length} listed to process.</div>`)

        this.step.stepValues.shift()
        if (!this.step.stepValues.length) {
            this.step.stepSections.shift()
            this.setStepValueIndexes()
        }
        if (!this.step.stepSections.length && this.step.stepSubsectionsToProcess.length) {
            this.setupProcessFoundSubsections()
        } else if (!this.step.stepSections.length) {
            this.step.stepType = "endStep"
        }
    }

    setupProcessFoundSubsections() {
        this.step.stepType = "processFoundSubsections"
        this.step.stepValues = []
        this.step.stepPhases = ['showActive', 'processSection']
        this.step.stepSections = []
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
                    `<div class="search-success">Found element to insert at ${index}. Value: ${this.blanks[index][0]}.</div>`
                )
                this.setValueToCell(index, this.blanks[index][0])
                return
            }
        }
        this.setUpBlankStepDefaults()
        this.notes.unshift(`<div class="search-failure">Can't find any single elements. Going back to checking cells.</div>`)
    }

    processSectionSingle() {
        if (Object.keys(this.step.valuesToPlace).length) {
            this.placeFromValuesToPlace()
        } else if (this.activePhase() === "showActive") {
            // move into the show active for remove row
            this.nextSectionSingle()
            if (this.step.stepType === "sectionSingle") {
                this.sectionSingleFindActives()
            }
        }
    }

    sectionSingleFindActives() {
        const indexes = this.getIndexes(this.activeType(), this.step.stepValues[0])
        const locations: {[key: number]: number[]} = {}
        indexes.forEach((index) => {
            if (this.blanks[index]) {
                const values = this.blanks[index]
                values.forEach((value) => {
                    const valueIndexes = locations[value] = (locations[value] || [])
                    valueIndexes.push(index)
                })
            }
        })
        const stepType = this.activeType()
        const stepSection = this.step.stepValues[0]
        Object.keys(locations).forEach((value) => {
            const indexes = locations[+value]
            if (indexes.length === 1) {
                const index = indexes[0]
                this.step.valuesToPlace[+index] = +value
                this.notes.unshift(
                    `<div class="section-single">Found single ${value} at index ${index}</div>`
                )
            }
        })
        this.notes.unshift(
            `<div class="section-single">Looking for single occurrences in ${stepType} ${stepSection}.</div>`
        )
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
                `<div class="no-remove">Found no squares that need removal in ${this.activeType()}</div>`
            )
            this.step.stepSections.shift()
        }
        if (!this.step.stepSections.length) {
            if (this.step.valuesToPlace && Object.keys(this.step.valuesToPlace).length) {
                this.placeFromValuesToPlace()
                return
            }
            this.setUpSearch()
        }
    }

    placeFromValuesToPlace () {
        const index = +Object.keys(this.step.valuesToPlace)[0]
        const value = this.step.valuesToPlace[index]
        const type = this.activeType()
        const types = this.typePattern.slice()
        const typeIndex = types.indexOf(type)
        types.splice(typeIndex, 1)

        delete this.step.valuesToPlace[index]
        this.step.stepIndexes.shift()
        this.step.stepValues.shift()
        this.setValueToCell(index, value)
        this.step.stepSections = types
    }

    removeFromOptions(options: number[], value: number) {
        const indexNum = options.indexOf(value)
        options.splice(indexNum, 1)
    }

    completeRemoveActive() {
        const value = this.value(this.activeSpot())
        const indexesToRemoveFrom = this.step.stepSpotsToRemoveFrom
        indexesToRemoveFrom.forEach((index) => {
            const options = this.blanks[index]
            this.removeFromOptions(options, value)
        })
        this.resetSpotsToRemoveFrom()
        this.step.stepPhases.shift()
        this.step.stepSections.shift()

        if (!this.step.stepSections.length) {
            if (this.step.valuesToPlace && Object.keys(this.step.valuesToPlace).length) {
                this.placeFromValuesToPlace()
                return
            }
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
                `<div class="found">Determined there is only 1 option for spot ${this.activeSpot()}: ${newValues[0]}</div>`
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
        this.notes.unshift('') 
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
        }
        for (let i = 0; i < 3; i++) {
            indexes.push(square2 + i)
        }
        for (let i = 0; i < 3; i++) {
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
        return this.valuesByIndex(indexes)
    }

    private valuesByIndex(indexes: number[]) {
        let values: number[] = []
        indexes.forEach((index) => {
            if (this.value(index)) {
                values.push(this.value(index))
            }
        })
        return values.sort()
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
        if (this.step.stepType === "endStep" || this.grid.indexOf(0) === -1) {
            return 
        } else {
            const sectionIndex = this.currentSectionIndex()
            if (this.step.stepType === "setUpBlanks") {
                this.notes.unshift(`<div class="current-step">Comparing spot @ ${this.activeSpot()} with ${this.activeType()} ${sectionIndex}.</div> `)
            } else if (this.step.stepType === "place") {
                this.notes.unshift(`<div class="place">Placing ${this.value(this.activeSpot())} in ${this.activeSpot()}.</div> `)
            } else if (this.step.stepType === "remove") {
                this.notes.unshift(`<div class="remove-note">Removing ${this.value(this.activeSpot())}s from ${this.activeType()} ${sectionIndex}.</div>`)
            }
        }

        if (!this.notes.length) {
            string += `<div>Thinking!!!</div>`
        }

        string += `<div class="step-text">${this.notes.join("")}</div>`

        this.notes = []

        return string
    }

    currentSectionIndex() {
        if (this.step.stepType === "sectionSingle" || this.step.stepType === "subsectionOptionSets") {
            return this.step.stepValues[0]
        }
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
        if (this.step.stepType === "processFoundSubsections") {
            const indexes = this.step.stepSubsectionsToProcess[0].indexesToIgnore
            return indexes.indexOf(index) !== -1
        }
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

    private setStepValueIndexes() {
        this.step.stepValues = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    }

    private setUpSectionSingle() {
        this.step.stepSections = this.typePattern.slice()
        this.step.valuesToPlace = {}
        this.step.stepPhases = ['showActive']
        this.step.stepType = "sectionSingle"
        this.setStepValueIndexes()
    }

    private nextSectionSingle() {
        this.step.stepValues.shift()
        if (!this.step.stepValues.length) {
            this.step.stepSections.shift()
            this.setStepValueIndexes()
        }
        if (!this.step.stepSections.length) {
            this.step.stepType = "subsectionOptionSets"
            this.setupSubsectionOptions()
        }
    }

    private getOptionsByIndex(indexes: number[]) {
        const values: {[key: number]: number} = {}
        indexes.forEach((index) => {
            const options = this.blanks[index]
            if (options) {
                options.forEach((option) => {
                    values[option] = option
                })
            }
        })
        return (Object as any).values(values).sort()
    }

    private getInOrderSubsectionSequences(indexes: number[]) {
        return [
            indexes.slice(0, 3),
            indexes.slice(3, 6),
            indexes.slice(6, 9)
        ]
    }

    private getInColumnSubSequences(indexes: number[]) {
        return [
            [indexes[0], indexes[3], indexes[6]],
            [indexes[1], indexes[4], indexes[7]],
            [indexes[2], indexes[5], indexes[8]],
        ]
    }

    private addDataToFindingsForSubSections(indexSets: number[][], comparisonType: sectionType, findings: { [key: string]: number[] }[] = []) {
        indexSets.forEach((indexes) => {
            const rowIndexes = this.getIndexes(comparisonType, this.findSectionIndex(comparisonType, indexes[0]))
            indexes.forEach((index) => {
                rowIndexes.splice(rowIndexes.indexOf(index), 1)
            })
            findings.push({
                indexes: indexes,
                compareIndexes: rowIndexes,
                options: this.getOptionsByIndex(indexes)
            })
        })
        return findings
    }

    numbersInSquareParts(section: number): {[key: string]: {[key: string]: number[]}[]} {
        const indexes = this.getIndexes('square', section)  
        const rowSets = this.getInOrderSubsectionSequences(indexes)
        const rowFindings: { [key: string]: number[] }[] = this.addDataToFindingsForSubSections(rowSets, 'row')
        const columnSets = this.getInColumnSubSequences(indexes)
        const columnFindings: { [key: string]: number[] }[] = this.addDataToFindingsForSubSections(columnSets, 'column')
        return {
            rowFindings,
            columnFindings
        }
    }

    numbersInRowParts(section: number): {[key: string]: number[]}[] {
        const rowSets = this.getInOrderSubsectionSequences(this.getIndexes('row', section))
        const squareFindings: { [key: string]: number[] }[] = this.addDataToFindingsForSubSections(rowSets, 'square')
        return squareFindings
    }

    numbersInColumnParts(section: number): {[key: string]: number[]}[] {
        const columnSets = this.getInOrderSubsectionSequences(this.getIndexes('column', section))
        const squareFindings: { [key: string]: number[] }[] = this.addDataToFindingsForSubSections(columnSets, 'square')
        return squareFindings
    }

    private findSubSectionDistribution(findings: { [key: string]: number[] }[]) {
        const dist: {[key: number]: number[]} = {}

        findings.forEach((finding: { [key: string]: number[] }, index) => {
            finding['options'].forEach((value) => {
                dist[value] = (dist[value] || []).concat([index])
            })
        })
        return dist
    }

    private translateDistToValuesSpecificToSection(dist: { [key: number]: number[] }) {
        const sections: {[key: string]: number[]} = {
            0: [],
            1: [],
            2: []
        }
        Object.keys(dist).forEach((value) => {
            if (dist[+value].length === 1) {
                sections[dist[+value][0]].push(+value)
            }
        })
        return sections
    }

    private determineValueChangesBasedOnFindings(findings: { [key: string]: number[] }[]): { [key: string]: number[] }[] {
        const dist = this.findSubSectionDistribution(findings)
        const singleBySubsection = this.translateDistToValuesSpecificToSection(dist)
        const output: { [key: string]: number[] }[] = []
        Object.keys(singleBySubsection).forEach((subsection) => {
            if (singleBySubsection[subsection].length > 0) {
                output.push({
                    indexesToCompare: findings[+subsection].compareIndexes,
                    indexesToIgnore: findings[+subsection].indexes,
                    numbersToRemove: singleBySubsection[subsection],
                })
            }
        })
        return output
    }

    subSectionsToEvaluate(sectionType: string, section: number): {[key: string]: number[]}[] {
        let output
        if (sectionType === "row") {
            const findings = this.numbersInRowParts(section)
            output = this.determineValueChangesBasedOnFindings(findings)
        } else if (sectionType === "square") {
            const findings = this.numbersInSquareParts(section)
            const rowFindings = findings['rowFindings']
            const columnFindings = findings['columnFindings']
            output = this.determineValueChangesBasedOnFindings(rowFindings).concat(
                this.determineValueChangesBasedOnFindings(columnFindings)
            )
        } else if (sectionType === "column") {
            const findings = this.numbersInColumnParts(section)
            output = this.determineValueChangesBasedOnFindings(findings)
        }
        return output
    }

    indexesWithSpecialValues(): number[] {
        const findings = this.step.stepSubsectionsToProcess
        if (findings) {
            let result: {[key: number]: number} = {}
            findings.forEach((finding) => {
                finding.indexesToIgnore.forEach((index) => {
                    result[index] = index;
                })
            })
            return (Object as any).values(result)
        }
        return []
    }
}