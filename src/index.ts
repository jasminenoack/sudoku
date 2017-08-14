import {Sudoku} from './sudoku';
import { easyPuzzle1, easyPuzzle2, sixBySix1 } from '../src/puzzles'

const boards: {[key: string]: number[]} = {
    "easy1": easyPuzzle1,
    "easy2": easyPuzzle2,
    "six1": sixBySix1
}

class GameUtils {
    public static drawBoard (id: string, sudoku: Sudoku) {
        const boardEl = document.getElementById(id)
        const grid = sudoku.grid 
        let row = this.createRow()
        grid.forEach((number, index) => {
            const el = this.createSpot(index)
            // if (number === 0) {

            // } else {
            //     console.log(number)
            // }
            row.appendChild(el)
            console.log((index + 1), sudoku.numbers)
            if ((index + 1) % sudoku.numbers === 0) {
                boardEl.appendChild(row)
                row = this.createRow()
            }
        })
    }

    public static setUp (id = "board", boardChoice = "easy1") {
        const grid: number[] = boards[boardChoice]
        const sudoku = new Sudoku(grid)
        this.drawBoard(id, sudoku)
    }

    private static createSpot (index: number) {
        const el = document.createElement('div')
        el.classList.add('spot')
        return el
    }

    private static createRow() {
        const row = document.createElement('div')
        row.classList.add('row')
        row.classList.add('clear')
        return row
    }
}

(window as any).gameUtils = GameUtils