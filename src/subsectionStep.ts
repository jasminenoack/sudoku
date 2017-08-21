import { SingleSectionStep } from './singleSectionStep'
import { sectionType } from './interfaces'

export abstract class SubsectionStep extends SingleSectionStep {
    public madeChange: boolean = false

    public setupSubsectionOptions() {
        this.step.stepSections = this.typePattern.slice()
        this.step.stepPhases = ["processSection"]
        this.step.stepSubsectionsToProcess = []
        this.setStepValueIndexes()
    }

    public takeSubsectionOptionsStep() {
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

    public numbersInSquareParts(section: number): { [key: string]: { [key: string]: number[] }[] } {
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

    public numbersInRowParts(section: number): { [key: string]: number[] }[] {
        const rowSets = this.getInOrderSubsectionSequences(this.getIndexes('row', section))
        const squareFindings: { [key: string]: number[] }[] = this.addDataToFindingsForSubSections(rowSets, 'square')
        return squareFindings
    }

    public numbersInColumnParts(section: number): { [key: string]: number[] }[] {
        const columnSets = this.getInOrderSubsectionSequences(this.getIndexes('column', section))
        const squareFindings: { [key: string]: number[] }[] = this.addDataToFindingsForSubSections(columnSets, 'square')
        return squareFindings
    }

    public subSectionsToEvaluate(sectionType: string, section: number): { [key: string]: number[] }[] {
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

    public findSubSectionDistribution(findings: { [key: string]: number[] }[]) {
        const dist: { [key: number]: number[] } = {}

        findings.forEach((finding: { [key: string]: number[] }, index) => {
            finding['options'].forEach((value) => {
                dist[value] = (dist[value] || []).concat([index])
            })
        })
        return dist
    }

    public translateDistToValuesSpecificToSection(dist: { [key: number]: number[] }) {
        const sections: { [key: string]: number[] } = {
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

    public setupProcessFoundSubsections() {
        this.madeChange = false
        this.step.stepType = "processFoundSubsections"
        this.step.stepValues = []
        this.step.stepPhases = ['showActive', 'processSection']
        this.step.stepSections = []
    }

    public takeProcessSubsectionStep() {
        if (this.step.stepPhases[0] === "showActive") {
            this.processSubsectionActive()
        } else if (this.step.stepPhases[0] === "processSection") {
            this.processSubSectionProcess()
        }
    }

    public processSubSectionProcess() {
        const numberToRemove = this.step.stepSubsectionsToProcess[0].numbersToRemove[0]
        const indexesToRemoveFrom = this.step.stepSpotsToRemoveFrom
        this.madeChange = true
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

    public optionsToRemoveFrom(value: number, indexes: number[]): number[] {
        const locationsToRemove: number[] = []
        indexes.forEach((index: number) => {
            if (this.blanks[index] && this.blanks[index].indexOf(value) !== -1) {
                locationsToRemove.push(index)
            }
        })
        return locationsToRemove
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
            if (this.madeChange) {
                this.setUpSearch()
                this.madeChange = false
            } else {
                this.step.stepType = "endStep"
            }
        }
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
}