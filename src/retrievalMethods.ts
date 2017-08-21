import { SectionIndexMethods } from './sectionIndexMethods'
import {sectionType} from './interfaces'

export abstract class RetrievalMethods extends SectionIndexMethods {
    public activeSpot() {
        return +this.step.stepIndexes[0]
    }

    public activeType() {
        return this.step.stepSections[0]
    }

    public activePhase() {
        return this.step.stepPhases[0]
    }

    public isGiven(index: number): boolean {
        return this.givens[index]
    }

    public value(index: number): number {
        const value = this.grid[index]
        if (value) {
            return value
        }
    }

    public currentSectionIndex() {
        if (this.step.stepType === "sectionSingle" || this.step.stepType === "subsectionOptionSets") {
            return this.step.stepValues[0]
        }
        return this.findSectionIndex(this.activeType(), this.activeSpot())
    }

    public findSectionIndex(type: sectionType, index: number): number {
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

    public inActiveSection(index: number): boolean {
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

    public getOptions(index: number): number[] {
        if (this.activeSpot() === index) {
            return this.step.stepValues
        } else if (this.blanks[index]) {
            return this.blanks[index]
        }
        return []
    }

    public check(type: sectionType, section: number, number: number) {
        const values = this.valuesInSection(type, section)
        return values.indexOf(number) !== -1
    }

    public getOptionsByIndex(indexes: number[]) {
        const values: { [key: number]: number } = {}
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

    public valuesInSection(type: sectionType, section: number) {
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

    public valuesInCurrentSection() {
        return this.valuesInSection(this.activeType(), this.currentSectionIndex())
    }

    public getToRemove() {
        if (this.step.stepType === "processFoundSubsections" && this.step.stepPhases[0] === "processSection") {
            return [this.step.stepSubsectionsToProcess[0].numbersToRemove[0]]
        }
        if (this.step.stepType === "remove" && this.step.stepPhases[0] == "showActive") {
            return [this.value(this.activeSpot())]
        }
        return this.step.stepValuesToRemove
    }

    public indexInRemovalSpots(index: number) {
        return this.step.stepSpotsToRemoveFrom && this.step.stepSpotsToRemoveFrom.indexOf(index) !== -1
    }

    public indexesWithSpecialValues(): number[] {
        let result: { [key: number]: number } = {} 
        if (this.step.stepSubsectionsToProcess && this.step.stepSubsectionsToProcess.length) {
            const findings = this.step.stepSubsectionsToProcess
            if (findings) {

                findings.forEach((finding) => {
                    finding.indexesToIgnore.forEach((index) => {
                        result[index] = index;
                    })
                })

            }
        }
        if (this.step.valuesToPlace && Object.keys(this.step.valuesToPlace).length) {
            Object.keys(this.step.valuesToPlace).forEach((index: string) => {
                result[+index] = +index
            })
        }
        return (Object as any).values(result)
    }

    public indexWithBlanks(type: sectionType, section: number): number[] {
        const indexes = this.getIndexes(type, section)
        const blankIndexes: number[] = []
        indexes.forEach((index) => {
            if (this.blanks[index]) {
                blankIndexes.push(index)
            }
        })
        return blankIndexes
    }
}