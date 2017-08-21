import { SubsectionStep } from './subsectionStep'

export abstract class CombinationStep extends SubsectionStep {
    public takeCombinationStep() {
        
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