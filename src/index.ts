import {Sudoku} from './sudoku';
import * as boards from '../src/puzzles'
import {Guess} from './guess'

const numberClasses = [
    "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"
]

let interval: any

function clear() {
    if (interval) {
        clearInterval(interval)
    }
    interval = null
}

class GameUtils {
    public static currentBoard: Sudoku
    public static guessBoards: Sudoku[] = []
    public static baseBoard: Sudoku
    public static solutions = 0
    public static guesses = 0
    public static failures = 0

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
        this.currentBoard = sudoku
        this.baseBoard = sudoku
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

        if (sudoku.isGuess(index)) {
            el.classList.add('guess')
        } else {
            el.classList.remove('guess')
        }

        const indexesFlagged =  sudoku.indexesWithSpecialValues()
        if (indexesFlagged.indexOf(index) !== -1) {
            el.classList.add('flagged')
        } else {
            el.classList.remove('flagged')
        }

        const number: number = sudoku.value(index)
        if (number) {
            el.classList.add(numberClasses[number - 1])
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
        if (GameUtils.currentBoard.step.stepType === "endStep") {
            GameUtils.takeAGuess()
            GameUtils.getNewBoard("previous-boards")
        } else if (GameUtils.currentBoard.failed()) {
            GameUtils.failures++
            if (GameUtils.guessBoards.length) {
                GameUtils.getNewBoard("failed")
            } else {
                GameUtils.dupBoardEl("failed")
                GameUtils.finish()
            }
        } else if (GameUtils.currentBoard.done()) {
            GameUtils.solutions++
            if (GameUtils.guessBoards.length) {
                GameUtils.getNewBoard("solutions")
            } else {
                GameUtils.dupBoardEl("solutions")
                GameUtils.finish()
            }
        }
        this.currentBoard.takeStep()
        const boardEl = document.getElementById("board")
        const spots = document.getElementsByClassName('spot')
        const sudoku = this.currentBoard
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

    public static dupBoardEl(dupLocation: string) {
        const solutionCount = document.getElementById('solution-count')
        solutionCount.innerText = this.solutions + ''
        const failureCount = document.getElementById('failure-count')
        failureCount.innerText = this.failures + ''
        const guessCount = document.getElementById('guess-count')
        guessCount.innerText = this.guesses + ''

        const boardEl = document.getElementById("board")
        const newBoardEl = boardEl.cloneNode(true);
        (newBoardEl as HTMLElement).id = ""
        boardEl.innerHTML = ""
        const previousDiv = document.getElementById(dupLocation)
        const wrapper = document.createElement('div')
        previousDiv.insertBefore(newBoardEl, previousDiv.firstChild)
    }

    public static getNewBoard(dupLocation: string) {
        // current board
        const current = this.currentBoard
        // dup board
        this.dupBoardEl(dupLocation)
        // use existing board
        let newBoard 
        if (this.guessBoards.length) {
            newBoard = this.guessBoards.shift()
            GameUtils.drawBoard("board", newBoard)
            GameUtils.currentBoard = newBoard
        }
    }

    public static takeAGuess() {
        this.guesses++
        const newBoards = Guess.newGuessBoards(GameUtils.currentBoard)
        this.guessBoards = newBoards.concat(this.guessBoards)
    }

    public static finish() {
        clear()
        const element = document.getElementById("current-display")
        element.remove()
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
        interval = setInterval(() => {
            func()
        }, 100)
    }
});

(window as any).gameUtils = GameUtils