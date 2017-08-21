import {BlankMethods} from './blankMethods'
import {stepPhase} from './interfaces'

export abstract class PlaceRemoveStep extends BlankMethods{
    public placeSteps: stepPhase[] = ["place"]

    public takePlaceStep() {
        if (this.activePhase() === "place") {
            // move into the show active for remove row
            this.showRemoveActive()
        }
    }

    public takeRemoveStep() {
        if (this.activePhase() === "showActive") {
            this.completeRemoveActive()
        } else if (this.activePhase() === "showCompare") {
            this.showRemoveActive()
        }
    }

    public completeRemoveActive() {
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

    public resetStepRemove() {
        this.step.stepValuesToRemove = []
    }

    public setUpPlaceStep() {
        this.step.stepSections = []
        this.step.stepPhases = this.placeSteps.slice()
        this.step.stepType = "place"
        this.resetStepRemove()
        this.resetStepTypePattern()
    }

    public showRemoveActive() {
        this.setUpRemoveStep()
        const indexes = this.getIndexes(this.activeType(), this.currentSectionIndex())
        const indexesToRemoveFrom: number[] = []

        indexes.forEach((index) => {
            if (this.blanks[index] && this.blanks[index].indexOf(this.value(this.activeSpot())) !== -1) {
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

    public setUpRemoveStep() {
        this.step.stepType = "remove"
        this.resetSpotsToRemoveFrom()
        this.resetBlankStepPhase()
    }

    public resetSpotsToRemoveFrom() {
        this.step.stepSpotsToRemoveFrom = []
    }

    public placeFromValuesToPlace() {
        const index = +Object.keys(this.step.valuesToPlace)[0]
        const value = this.step.valuesToPlace[index]
        const type = this.activeType()
        const types = this.typePattern.slice()
        delete this.step.valuesToPlace[index]
        this.step.stepIndexes.shift()
        this.step.stepValues.shift()
        this.setValueToCell(index, value)
        this.step.stepSections = types
    }
}