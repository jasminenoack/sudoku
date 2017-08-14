import {Sudoku} from './sudoku';
import { easyPuzzle1, easyPuzzle2, medium1 } from '../src/puzzles'

let interval: any

const boards: {[key: string]: number[]} = {
    "easy1": easyPuzzle1,
    "easy2": easyPuzzle2,
    "medium1": medium1,
}

class GameUtils {
    public static sudoku: Sudoku

    public static drawBoard (id: string, sudoku: Sudoku) {
        const boardEl = document.getElementById(id)
        const grid = sudoku.grid 
        let row = this.createRow()
        grid.forEach((number, index) => {
            const el = document.createElement('div')
            this.updateSpot(el, index, sudoku)
            row.appendChild(el)
            if ((index + 1) % sudoku.numbers === 0) {
                boardEl.appendChild(row)
                row = this.createRow()
            }
        })
        const stepEl = document.getElementById("step")
        stepEl.innerHTML = sudoku.currentStepString()
    }

    public static setUp(boardChoice = "easy1", id = "board") {
        const grid: number[] = boards[boardChoice]
        const sudoku = new Sudoku(grid)
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

        if (sudoku.value(index) === sudoku.activeNumber) {
            el.classList.add('active-number')
        } else {
            el.classList.remove('active-number')
        }

        if (sudoku.isOption(index)) {
            el.classList.add('option')
        } else {
            el.classList.remove('option')
        }

        if (sudoku.currentNode === index) {
            el.classList.add('current-node')
        } else {
            el.classList.remove('current-node')
        }

        if (sudoku.isBeingCompared(index)) {
            el.classList.add('being-compared')
        } else {
            el.classList.remove('being-compared')
        }

        const number = sudoku.value(index)
        if (number) {
            el.innerHTML = number + ''
        }
        return el
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

        const stepEl = document.getElementById("step")
        stepEl.innerHTML = sudoku.currentStepString()
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
        interval = setInterval(func, 30)
    }
});

(window as any).gameUtils = GameUtils