import { easy1 } from './puzzles'
import { CombinationStep } from './combinationStep'
import {sectionType, stepPhase, step, stepType}  from './interfaces'

export class Sudoku extends CombinationStep {
    constructor(grid: number[] = easy1) {
        super(grid)
        this.setUpNewSection()

        // this.blanks = { 1: [3, 4], 4: [3, 7], 5: [1, 3, 7], 6: [1, 4], 10: [5, 8], 12: [5, 9], 14: [5, 8, 9], 18: [3, 4, 8], 19: [3, 4, 5, 8], 22: [3, 5], 23: [1, 3, 5, 8], 26: [1, 4], 27: [3, 4, 7, 8, 9], 28: [3, 4, 5, 6, 8, 9], 29: [3, 4, 5], 31: [3, 5, 6, 7], 32: [3, 5, 7], 34: [4, 9], 35: [3, 4, 6, 7, 9], 36: [3, 7], 37: [1, 3, 6], 38: [1, 2, 3], 41: [2, 3, 7], 44: [1, 3, 6, 7], 45: [3, 4, 7, 9], 46: [1, 3, 4, 5, 6, 9], 47: [1, 2, 3, 4, 5], 49: [3, 5, 6, 7], 50: [2, 3, 5, 7], 51: [1, 3, 4, 7], 52: [1, 4, 9], 53: [1, 3, 4, 6, 7, 9], 57: [3, 9], 60: [3, 4], 62: [3, 4, 9], 63: [3, 4, 9], 64: [1, 3, 4, 9], 65: [1, 3, 4], 66: [3, 5, 7, 9], 68: [3, 5, 7, 9], 71: [1, 3, 4, 5, 7, 9], 74: [1, 3], 75: [3, 5, 7, 9], 78: [1, 3, 7], 79: [1, 9], 80: [1, 3, 5, 7, 9] }
        // this.step = {
        //     "stepSections": ["square"],
        //     "stepPhases": ["showActive"],
        //     "stepType": "sectionSingle",
        //     "stepIndexes": [],
        //     "stepValues": [8],
        //     "stepValuesToRemove": [],
        //     "stepSpotsToRemoveFrom": [],
        //     "valuesToPlace": {}
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