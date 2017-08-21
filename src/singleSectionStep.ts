import { SearchStep } from './searchStep'

export abstract class SingleSectionStep extends SearchStep {
    takeSectionSingle() {
        if (this.activePhase() === "showActive") {
            // move into the show active for remove row
            this.nextSectionSingle()
            if (this.step.stepType === "sectionSingle") {
                this.sectionSingleFindActives()
            }
        }
    }

    public nextSectionSingle() {
        this.step.stepValues.shift()
        if (!this.step.stepValues.length) {
            this.step.stepSections.shift()
            this.setStepValueIndexes()
        }
        if (!this.step.stepSections.length) {
            if (Object.keys(this.step.valuesToPlace).length) {
                this.placeFromValuesToPlace()
            } else {
                this.step.stepType = "subsectionOptionSets"
                this.setupSubsectionOptions()
            }
        }
    }

    public setUpSectionSingle() {
        this.step.stepSections = this.typePattern.slice()
        this.step.valuesToPlace = this.step.valuesToPlace || {}
        this.step.stepPhases = ['showActive']
        this.step.stepType = "sectionSingle"
        this.setStepValueIndexes()
    }

    public setStepValueIndexes() {
        this.step.stepValues = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    }

    public sectionSingleFindActives() {
        const indexes = this.getIndexes(this.activeType(), this.step.stepValues[0])
        const locations: { [key: number]: number[] } = {}
        indexes.forEach((index) => {
            if (this.blanks[index]) {
                const values = this.blanks[index]
                values.forEach((value) => {
                    const valueIndexes = locations[value] = (locations[value] || [])
                    valueIndexes.push(index)
                })
            }
        })
        const stepType = this.activeType()
        const stepSection = this.step.stepValues[0]
        Object.keys(locations).forEach((value) => {
            const indexes = locations[+value]
            if (indexes.length === 1) {
                const index = indexes[0]
                this.step.valuesToPlace[+index] = +value
                this.notes.unshift(
                    `<div class="section-single">Found single ${value} at index ${index}</div>`
                )
            }
        })
        this.notes.unshift(
            `<div class="section-single">Looking for single occurrences in ${stepType} ${stepSection}.</div>`
        )
    }
}