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
            return string
        }

        console.log(this.step.stepType)

        const stepType = this.step.stepType
        if (stepType === 'setUpBlanks') {
            string += `<div class="step-description o-container o-container--small">
                Phase 1: We first determine what numbers are possible for each blank spot.
                To do this we compare the spot to the row, column, and square that contains it. Based each of these we can remove all the numbers that already exist in the corresponding section.
            </div>`
        } else if (stepType === "place") {
            string += `<div class="step-description o-container o-container--small">
                Phase 2: Once we have logically determined there is only one option for a location we can place a number in that location.
            </div>`
        } else if (stepType === "remove") {
            string += `<div class="step-description o-container o-container--small">
                Phase 3: After a number has been placed we need to remove it from the options for any square in the same row, column, or square as it is no longer valid there.
            </div>`
        } else if (stepType === "findSingle") {
            string += `<div class="step-description o-container o-container--small">
                Phase 4: Once we have removed a number from the options for blank locations for the row, column, and square we can then look for locations that now only have one option. These locations can now be placed to help us to remove additional options and bring the puzzle closer to solved. 
            </div>`
        } else if (stepType === "sectionSingle") { 
            string += `<div class="step-description o-container o-container--small">
                Phase 5: Once we have determined the options for all the blank spots we can check if in any given row, column or square there is only one cell that could hold a particular number. This step checks for these cells in all rows, columns, and squares and flags these spots.
            </div>`
        } else if (stepType === "subsectionOptionSets") {
            debugger
        } else {
            debugger
        }

        string += "<div class='notes'>"
        const sectionIndex = this.currentSectionIndex()
 
        if (this.step.stepType === "setUpBlanks" && this.activeSpot() >= 0) {
            this.notes.unshift(`<div class="current-step">Comparing spot @ ${this.activeSpot()} with ${this.activeType()} ${sectionIndex}.</div> `)
        } else if (this.step.stepType === "remove") {
            this.notes.unshift(`<div class="remove-note">Removing ${this.value(this.activeSpot())}s from ${this.activeType()} ${sectionIndex}.</div>`)
        }

        if (!this.notes.length) {
            string += `<div>Thinking!!!</div>`
        }

        string += `<div class="step-text">${this.notes.join("")}</div>`

        this.notes = []

        string += "</div>"

        return string
    }
}