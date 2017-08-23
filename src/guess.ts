import { Sudoku } from './sudoku';

export class Guess {
    public static guesses: {[key: number]: number[]}[] = []

    public static newGuessBoards (sudoku: Sudoku): Sudoku[] {
        const newBoards: Sudoku[] = [] 

        const oldBlanks = sudoku.blanks
        const firstBlank = +Object.keys(oldBlanks)[0]
        const blankOptions = oldBlanks[firstBlank]
        const guess: { [key: number]: number[] } = {}
        this.guesses.push(guess)
        const guesses = sudoku.guesses.slice()
        guesses.push(firstBlank)
        guess[firstBlank] = oldBlanks[firstBlank]

        blankOptions.forEach((option) => {
            const newBoard = new Sudoku(sudoku.grid.slice(), true)
            newBoard.step.stepIndexes = []
            newBoard.blanks = JSON.parse(JSON.stringify(sudoku.blanks));
            newBoard.setValueToCell(firstBlank, option)
            newBoard.guesses = guesses.slice()
            newBoards.push(newBoard)
        })

        return newBoards;
    }
}