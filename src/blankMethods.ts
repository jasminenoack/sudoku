import { SetMethods } from './setMethods'
import {stepPhase, sectionType} from './interfaces'

export abstract class BlankMethods extends SetMethods {
    public blanksStepPhases: stepPhase[] = ["showActive", "showCompare"]
    public typePattern: sectionType[] = ['row', 'column', 'square']


    public takeStepBlank() {
        if (!this.step.stepIndexes.length) {
            this.setUpSectionSingle()
            this.sectionSingleFindActives()
        } else {
            this.processBlanksStep()
        }
    }

    public processBlanksStep() {
        if (this.activePhase() === "showActive") {
            // show active moves into the process compare phase
            this.processActive()
        } else if (this.activePhase() === "showCompare") {
            // process compare will start to compare and setup removing
            this.processCompare()
        }
    }

    public processActive() {
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

    public processCompare() {
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

    public resetBlankStepPhase() {
        this.step.stepPhases = this.blanksStepPhases.slice()
        this.resetStepRemove()
    }

    public setUpBlankStepDefaults() {
        const numbers: number[] = []
        for (let i = 1; i <= this.numbers; i++) {
            numbers.push(i)
        }
        this.step.stepValues = numbers
        this.resetStepTypePattern()
        this.resetBlankStepPhase()
        this.step.stepType = "setUpBlanks"
    }

    public resetStepTypePattern() {
        this.step.stepSections = this.typePattern.slice()
    }

    public setUpBlankStep() {
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

}