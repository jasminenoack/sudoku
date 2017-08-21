import { PlaceRemoveStep } from './placeRemoveStep'

export abstract class SearchStep extends PlaceRemoveStep {
    takeSearchStep() {
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

    public setUpSearch() {
        this.step.stepIndexes.shift()
        this.step.stepValues = []
        this.notes.unshift(
            `Searching for any options with only one value`
        )
        this.step.stepPhases = ["search"]
        this.step.stepType = "findSingle"
    }
}