import {Sudoku} from './sudoku';
import * as boards from '../src/puzzles'

const numberClasses = [
    "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
]

let interval: any

class GameUtils {
    public static sudoku: Sudoku

    public static drawBoard (id: string, sudoku: Sudoku) {
        const boardEl: HTMLElement = document.getElementById(id)
        const grid: number[] = sudoku.grid 
        let row: HTMLElement = this.createRow()
        grid.forEach((number: number, index: number) => {
            const el: HTMLElement = document.createElement('div')
            this.updateSpot(el, index, sudoku)
            row.appendChild(el)
            if ((index + 1) % sudoku.numbers === 0) {
                boardEl.appendChild(row)
                row = this.createRow()
            }
        })
        const stepEl: HTMLElement = document.getElementById("step")
        this.addStepString(sudoku)
    }

    public static setUp(boardChoice: string = "easy1", id: string = "board") {
        const grid: number[] = (boards as any)[boardChoice]
        const sudoku: Sudoku = new Sudoku(grid)
        this.sudoku = sudoku
        this.drawBoard(id, sudoku)
    }

    private static updateSpot (el: HTMLElement, index: number, sudoku: Sudoku) {
        el.classList.add('spot')
        if (sudoku.isGiven(index)) {
            el.classList.add('given')
        } else {
            el.classList.remove('given')
        }

        if (sudoku.inActiveSection(index)) {
            el.classList.add('active-section')
        } else {
            el.classList.remove('active-section')
        }

        if (index === sudoku.activeSpot()) {
            el.classList.add('current-node')
        } else {
            el.classList.remove('current-node')
        }

        const indexesFlagged =  sudoku.indexesWithSpecialValues()
        if (indexesFlagged.indexOf(index) !== -1) {
            el.classList.add('flagged')
        } else {
            el.classList.remove('flagged')
        }

        const number: number = sudoku.value(index)
        if (number) {
            el.innerHTML = number + ''
            el.classList.remove('options')
        } else {
            el.classList.add('options')
            const options: number[] = sudoku.getOptions(index)
            let toRemove: number[] = []
            if (index === sudoku.activeSpot() || sudoku.indexInRemovalSpots(index)) {
                toRemove = sudoku.getToRemove()
            }
            this.addOptionsToEl(el, options, toRemove)
        }

        return el
    }

    private static addOptionsToEl(el: HTMLElement, options: number[], toRemove: number[] = []) {
        el.innerHTML = ""
        options.forEach((number) => {
            const numEl: HTMLElement = document.createElement('div')
            numEl.classList.add('option')
            numEl.classList.add(numberClasses[number - 1])
            if (toRemove.indexOf(number) !== -1) {
                numEl.classList.add('to-remove')
            }
            numEl.innerText = number + "";
            el.appendChild(numEl)
        })
    }

    private static createRow() {
        const row = document.createElement('div')
        row.classList.add('row')
        row.classList.add('clear')
        return row
    }

    public static step() {
        this.sudoku.takeStep()
        const boardEl = document.getElementById("board")
        const spots = document.getElementsByClassName('spot')
        const sudoku = this.sudoku
        const grid = sudoku.grid
        let row = this.createRow()
        grid.forEach((number, index) => {
            const el = spots[index]
            this.updateSpot(el as HTMLElement, index, sudoku)
        })
        this.addStepString(sudoku)
    }

    private static addStepString(sudoku: Sudoku) {
        const stepEl = document.getElementById("step")
        const string = sudoku.currentStepString()
        if (string){
            stepEl.innerHTML = string
        }
    }
}

const step = document.getElementById('take-step');
step.addEventListener('click', () => {
    GameUtils.step()
});

const auto = document.getElementById('auto-step');
auto.addEventListener('click', () => {
    if (interval) {
        clearInterval(interval)
        interval = null
    } else {
        GameUtils.step()
        let func = GameUtils.step.bind(GameUtils)
        interval = setInterval(func, 100)
    }
});

(window as any).gameUtils = GameUtils