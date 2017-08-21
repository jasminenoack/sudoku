import { SubsectionStep } from './subsectionStep'

export abstract class CombinationStep extends SubsectionStep {
    public takeCombinationStep() {
        debugger
        const section = this.step.stepValues[0]
        const sectionType = this.activeType()
        const indexes = this.indexWithBlanks(sectionType, section)
        const combinations = this.getCombinations(indexes)
        this.notes.push(
            `<div>Looking for combinations in ${this.activeType()} ${this.step.stepValues[0]}.</div>`
        )
        combinations.forEach((combination) => {
            const dist = this.distCombinationOptions(combination)
            const distOptions = Object.keys(dist).length
            if (distOptions === combination.length) {
                const indexesToRemoveFrom = indexes.slice()
                combination.forEach((index) => {
                    const numIndex = indexesToRemoveFrom.indexOf(index)
                    indexesToRemoveFrom.splice(numIndex, 1)
                })
                this.notes.push(
                    `<div class="found">Found a combination in ${combination.join(',')} of values ${(Object as any).values(dist).join(',')}.</div>`
                )
                this.step.stepSubsectionsToProcess.push({
                    "indexesToCompare": indexesToRemoveFrom,
                    "indexesToIgnore": combination,
                    "numbersToRemove": (Object as any).values(dist)
                })                
            }
        })
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

    private distCombinationOptions(indexes: number[]): {[key: number]: number} {
        const result: { [key: number]: number }  = {}
        indexes.forEach((index) => {
            this.getOptions(index).forEach((option) => {
                result[option] = option
            })
        })
        return result
    }

    public setUpCombinationStep() {
        this.step.stepType = 'combinationStep'
        this.step.stepSections = this.typePattern.slice()
        this.step.stepPhases = ['lookingForCombos']
        this.setStepValueIndexes()
    }

    public getCombinations(indexes: number[]): number[][] {
        const result: number[][] = []
        const maxLength = indexes.length - 1

        function findCombinations (options: number[], current: number[] = []) {
            options.forEach((number, index) => {
                const currentTest = current.slice()
                currentTest.push(number)
                if (currentTest.length > 1) {
                    result.push(currentTest)
                }
                const left = options.slice(index + 1)
                if (left.length > 0 && currentTest.length < maxLength) {
                    findCombinations(left, currentTest)
                }
            })
        }
        findCombinations(indexes)
        return result
    } 
}