import {BlankMethods} from './blankMethods'

export abstract class PlaceRemoveStep extends BlankMethods{
    takePlaceStep() {
        if (this.activePhase() === "place") {
            // move into the show active for remove row
            this.showRemoveActive()
        }
    }

    showRemoveActive() {
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
        const typeIndex = types.indexOf(type)
        types.splice(typeIndex, 1)

        delete this.step.valuesToPlace[index]
        this.step.stepIndexes.shift()
        this.step.stepValues.shift()
        this.setValueToCell(index, value)
        this.step.stepSections = types
    }
}