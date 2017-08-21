import { RetrievalMethods } from './retrievalMethods'

export abstract class SetMethods extends RetrievalMethods {
    setValueToCell(index: number, value: number) {
        this.grid[index] = value
        delete this.blanks[index]
        this.setUpPlaceStep()
        // remove index from steps indexes 
        const indexNum = this.step.stepIndexes.indexOf(index + '')
        if (indexNum !== -1) {
            this.step.stepIndexes.splice(indexNum, 1)
        }
        // append to beginning of steps indexes
        this.step.stepIndexes.unshift(index + "")
        this.step.stepValues = [value]
    }

    removeFromOptions(options: number[], value: number) {
        const indexNum = options.indexOf(value)
        options.splice(indexNum, 1)
    }
}