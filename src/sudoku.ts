import { easy1 } from './puzzles'
import { CombinationStep } from './combinationStep'
import {sectionType, stepPhase, step, stepType}  from './interfaces'

export class Sudoku extends CombinationStep {
    constructor(grid: number[] = easy1) {
        super(grid)
        this.setUpNewSection()
    }

    done() {
        return this.grid.indexOf(0) === -1
    }

    setUpNewSection() {
        this.setUpBlanks()
        this.setUpBlankStep()
    }

    takeStep() {
        if (this.done()) {
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
        if (this.grid.indexOf(0) === -1) {
            return '<div class="step- description o- container o- container--small">I\'m Done.</div>'
        }
        let string = ''
        if (this.step.stepType === "endStep" || this.grid.indexOf(0) === -1) {
            return string
        }

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
            string += `<div class="step-description o-container o-container--small">
                Phase 6: Next we attempt to find numbers that only exist in a subsection. For example, in a given row there are 3 subsections each in a different square. If there is a number that appears only in one of these subsections it must be placed in that subsection. Therefore, no spot in the other containing section(a square here) not in the subsection can contain the number. In this section we track any subsection that we find that also appears to affect the puzzle(the number also exists in a spot it would be removed from based on the subsection). 
            </div>`
        } else if (stepType === "processFoundSubsections") {
            string += `<div class="step-description o-container o-container--small">
                Phase 7: Next we process subsections that have been found in other steps based on these we can remove a value from indexes outside of a given subsection.
            </div>`
        } else if (stepType === "combinationStep") {
            string += `<div class="step-description o-container o-container--small">
                Phase 8: Next we are looking for subsections that are combinations. Basically, we want to find a set of cells in a row, column or square which hold the same number of values as cells. This means that these cells are the locations of these values and no other cells in the section can contain these values. Similar to phase 6 we only track these if we expect them to have an effect on the puzzle.
            </div>`
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

        string += `<div class="step-text">${this.notes.join("")}</div>`

        string += "</div>"

        if (string === "<div class='notes'></div>") {
            string += `<div>Thinking!!!</div>`
        }

        this.notes = []

        

        return string
    }
}