import { easyPuzzle1 } from './puzzles'

type sectionType = 'row' | 'column' | 'square'

interface blankData {
    typesToCheck: string[],
    options: number[]
}

export class Sudoku {
    public numbers: number = 9
    public givens: boolean[] = []
    public blanks: { [key: number]: blankData }

    // public section: number = 0
    public typePattern: sectionType[] = ['row', 'column', 'square']
    // public squareWidth: number = 3
    // public notes: string[] = []
    // public changed: boolean = false
    // public stuck: boolean = false
    // public done: boolean = false

    // nodes for what is currently being run
    // public stepType: string = "setUp"
    // public currentNode: number = null
    // public comparisonType: string = null


    constructor(public grid: number[] = easyPuzzle1) {
        this.numbers = Math.sqrt(grid.length)
        this.setGivens()
        this.setUpNewSection()
    }

    // takeStep() {
    //     if (this.stuck || this.done) {
    //         return
    //     }
    //     // if we are in a setup step
    //     // the next step should be to start a comparison
    //     if (this.stepType === "setUp") {
    //         this.startComparison()
    //     } else if (this.stepType === "startComp") {
    //         this.endComparison()
    //     } else if (this.stepType === "endComp") {
    //         this.chooseNext()
    //     } else if (this.stepType === "placement") {
    //         this.place()
    //     }
    // }

    // place() {
    //     if (this.possibleSpots.length === 1) {
    //         this.grid[this.possibleSpots[0]] = this.activeNumber
    //         this.changed = true
    //         this.fullRoundChanged = true
    //         this.everChanged = true
    //         this.notes.unshift(`<span class="placed"><br>Determined ${this.activeNumber} should be placed in spot ${this.possibleSpots[0]}.</span>`)
    //         console.log(this.activeNumber, this.type, this.comparisonType, this.possibleSpots)
    //     } else {
    //         this.notes.unshift(`<span class="not-placed"><br>Could not determine location for ${this.activeNumber}, found 2 possibilities: ${this.possibleSpots.join(',')}.</span>`)
    //     }
    //     this.nextActiveNumber()
    //     this.setUpNewSection()
    // }

    // chooseNext(excluded?: boolean) {
    //     this.stepType = "setUp"
    //     if (excluded) {
    //         delete this.optionSpots[this.currentNode]
    //     } else if (!this.optionSpots[this.currentNode].length) {
    //         delete this.optionSpots[this.currentNode]
    //         this.possibleSpots.push(this.currentNode)
    //         if (this.possibleSpots.length > 1) {
    //             this.place()
    //         }
    //     }

    //     if (!Object.keys(this.optionSpots).length) {
    //         this.stepType = "placement"
    //     }

    //     this.takeStep()
    // }

    // endComparison () {
    //     this.stepType = "endComp"
    //     let sectionIndex = this.findSectionIndex(this.comparisonType as sectionType, this.currentNode)
    //     let values = this.valuesInSection(this.comparisonType as sectionType, sectionIndex)

    //     if (values.indexOf(this.activeNumber) !== -1) {
    //         this.notes.unshift(`<span class="excluded ${this.comparisonType}">${this.comparisonType.toUpperCase()} ${sectionIndex} excluded ${this.activeNumber} from spot ${this.currentNode}.</span>`)
    //         this.chooseNext(true)
    //     } else {
    //         this.notes.unshift(`<span class="${this.comparisonType}">${this.comparisonType.toUpperCase()} ${sectionIndex} did not exclude ${this.activeNumber} from spot ${this.currentNode}.</span>`)
    //     }
    // }

    // startComparison () {
    //     this.stepType = "startComp"
    //     this.currentNode = +Object.keys(this.optionSpots)[0]
    //     this.comparisonType = this.optionSpots[this.currentNode].shift()
    // }

    // isBeingCompared(index: number) {
    //     if (!this.currentNode || !this.comparisonType) {
    //         return false
    //     }
    //     let sectionIndex = this.findSectionIndex(this.comparisonType as sectionType, this.currentNode)
    //     let indexes = this.getIndexes(this.comparisonType as sectionType, sectionIndex)
    //     return indexes.indexOf(index) !== -1
    // }

    setUpNewSection() {
        this.setUpBlanks()
    //     // todo when goes over setions/next number etc 
    //     if (this.grid.indexOf(0) === -1) {
    //         this.done = true;
    //         this.notes.unshift("I'm DONE!")
    //         return
    //     }
    //     this.stepType = "setUp"
    //     this.currentNode = null
    //     this.comparisonType = null
    //     this.possibleSpots = []
    //     let indexes = this.getIndexes()
    //     let values = this.valuesInSection(this.type, this.section)

    //     while (values.length === this.numbers || values.indexOf(this.activeNumber) !== -1) {
    //         this.nextActiveNumber()
    //         indexes = this.getIndexes()
    //         values = this.valuesInSection(this.type, this.section)
    //     }

    //     this.optionSpots = {}
    //     let pattern = this.typePattern.slice()
    //     let indexToRemove = pattern.indexOf(this.type)
    //     pattern.splice(indexToRemove, 1)
    //     indexes.forEach((index) => {
    //         if(!this.value(index)) {
    //             this.optionSpots[index] = pattern.slice()
    //         }
    //     })
    }

    private setUpBlanks() {
        this.blanks = {}
        const grid = this.grid
        const blanks = {}
        const typePattern = this.typePattern
        const numbers: number[] = []
        for (let i = 1; i <= this.numbers; i++) {
            numbers.push(i)
        }
        this.grid.forEach((number, index) => {
            if (number === 0) {
                this.blanks[index] = {
                    typesToCheck: typePattern.slice(),
                    options: numbers.slice()
                }
            }
        })
    }

    private setGivens() {
        this.grid.forEach((number) => {
            if (number !== 0) {
                this.givens.push(true)
            } else {
                this.givens.push(false)
            }
        })
    }

    isGiven (index: number): boolean {
        return this.givens[index]
    }

    value (index: number): number {
        const value = this.grid[index]
        if (value) {
            return value
        }
    }

    getIndexes(type: sectionType, section: number) {
        if (type === "row") {
            return this.rowIndexes(section)
        } else if (type === "column") {
            return this.columnIndexes(section)
        } else if (type === "square") {
            return this.squareIndexes(section)
        }
    }

    squareIndexes(square: number) {
        const square1 = (Math.floor(square / 3) * 27) + (square % 3 * 3)
        const square2 = square1 + 9
        const square3 = square2 + 9
        const indexes = []
        for (let i = 0; i < 3; i++) {
            indexes.push(square1 + i)
            indexes.push(square2 + i)
            indexes.push(square3 + i)
        }
        return indexes
    }

    rowIndexes(row: number) {
        let low = row * this.numbers
        let high = low + this.numbers - 1
        const indexes = []
        for (let i = low; i <= high; i++) {
            indexes.push(i)
        }
        return indexes
    }

    columnIndexes(column: number) {
        const indexes = []
        for (let i = column; i < 81; i += this.numbers) {
            indexes.push(i)
        }
        return indexes
    }

    valuesInSection(type: sectionType, section: number) {
        const indexes = this.getIndexes(type, section)
        let values: number[] = []
        indexes.forEach((index) => {
            if (this.value(index)) {
                values.push(this.value(index))
            }
        })
        return values
    }

    check(type: sectionType, section: number, number: number) {
        const values = this.valuesInSection(type, section)
        return values.indexOf(number) !== -1
    }

    // currentStepString() {
    //     let string = ''
    //     if (this.activeNumber !== null && this.type && this.section !== null) {
    //         string += `Attempting to determine location for ${this.activeNumber} in ${this.type} ${this.section}.<br>`
    //     }
    //     if (this.currentNode !== null && this.comparisonType && this.stepType === "startComp") {
    //         const sectionIndex = this.findSectionIndex(this.comparisonType as sectionType, this.currentNode)
    //         string += `Comparing ${this.comparisonType} ${sectionIndex} with node ${this.currentNode}.<br>`
    //     }
    //     string += "<br>"
    //     if (this.notes.length) {
    //         string += this.notes.join('<br>')
    //     }
    //     return string
    // }

    findSectionIndex(type: sectionType, index: number): number {
        if (type === "row") {
            return Math.floor(index / this.numbers)
        } else if (type === "column") {
            return index % this.numbers
        } else if (type === "square") {
            const squareRow = Math.floor(index / 27)
            const squareColumn = Math.floor((index % 9) / 3)
            return 3 * squareRow + squareColumn
        }
    }
}