import { easy1 } from './puzzles'
import { CombinationStep } from './combinationStep'
import {sectionType, stepPhase, step, stepType}  from './interfaces'

export class Sudoku extends CombinationStep {
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
            this.takeSearchStep()
        } else if (this.step.stepType === "sectionSingle") {
            this.takeSectionSingle()
        } else if (this.step.stepType === "subsectionOptionSets") {
            this.takeSubsectionOptionsStep()
        } else if (this.step.stepType === "processFoundSubsections") {
            this.takeProcessSubsectionStep()
        } else if (this.step.stepType === "combinationStep") {
            this.takeCombinationStep()
        }
    }

    public currentStepString() {
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
}