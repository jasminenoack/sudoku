import { easy1 } from './puzzles'
import { PlaceRemoveStep } from './placeRemoveStep'
import {sectionType, stepPhase, step, stepType}  from './interfaces'

export class Sudoku extends PlaceRemoveStep {
    constructor(grid: number[] = easy1) {
        super(grid)
        this.setUpNewSection()
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
            this.takeStepBlank()
        } else if (this.step.stepType === "place") {
            this.takePlaceStep()
        } else if (this.step.stepType === "remove") {
            this.takeRemoveStep()
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

    public optionsToRemoveFrom (value: number, indexes: number[]): number[] {
        const locationsToRemove: number[] = []
        indexes.forEach((index: number) => {
            if (this.blanks[index] && this.blanks[index].indexOf(value) !== -1) {
                locationsToRemove.push(index)
            }
        })
        return locationsToRemove
    }

    public processSubSectionProcess() {
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

    public processSubsectionActive() {
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

    public setupSubsectionOptions() {
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

    public setUpSearch() {
        this.step.stepIndexes.shift()
        this.step.stepValues = []
        this.notes.unshift(
            `Searching for any options with only one value`
        )
        this.step.stepPhases = ["search"]
        this.step.stepType = "findSingle"
    }

    
    
    public resetStepRemove() {
        this.step.stepValuesToRemove = []
    }

    public setUpBlanks() {
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

    public setStepValueIndexes() {
        this.step.stepValues = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    }

    public setUpSectionSingle() {
        this.step.stepSections = this.typePattern.slice()
        this.step.valuesToPlace = {}
        this.step.stepPhases = ['showActive']
        this.step.stepType = "sectionSingle"
        this.setStepValueIndexes()
    }

    public nextSectionSingle() {
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

    public getOptionsByIndex(indexes: number[]) {
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

    public getInOrderSubsectionSequences(indexes: number[]) {
        return [
            indexes.slice(0, 3),
            indexes.slice(3, 6),
            indexes.slice(6, 9)
        ]
    }

    public getInColumnSubSequences(indexes: number[]) {
        return [
            [indexes[0], indexes[3], indexes[6]],
            [indexes[1], indexes[4], indexes[7]],
            [indexes[2], indexes[5], indexes[8]],
        ]
    }

    public addDataToFindingsForSubSections(indexSets: number[][], comparisonType: sectionType, findings: { [key: string]: number[] }[] = []) {
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

    public findSubSectionDistribution(findings: { [key: string]: number[] }[]) {
        const dist: {[key: number]: number[]} = {}

        findings.forEach((finding: { [key: string]: number[] }, index) => {
            finding['options'].forEach((value) => {
                dist[value] = (dist[value] || []).concat([index])
            })
        })
        return dist
    }

    public translateDistToValuesSpecificToSection(dist: { [key: number]: number[] }) {
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

    public determineValueChangesBasedOnFindings(findings: { [key: string]: number[] }[]): { [key: string]: number[] }[] {
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