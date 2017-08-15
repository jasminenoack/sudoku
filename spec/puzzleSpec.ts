import { Sudoku } from '../src/sudoku'
import { easyPuzzle1, easyPuzzle2, sixBySix1 } from '../src/puzzles'
import { } from 'jasmine';

describe('sudoku board', () => {
    let sudoku: Sudoku;
    beforeEach(() => {
        sudoku = new Sudoku();
    })

    describe('utils', () => {
        describe('gets indexes', () => {
            describe('square', () => {
                it('indexes for 0', () => {
                    expect(sudoku.squareIndexes(0)).toEqual(
                        [0, 9, 18, 1, 10, 19, 2, 11, 20]
                    )
                })

                it('indexes for 3', () => {
                    expect(sudoku.squareIndexes(3)).toEqual(
                        [27, 36, 45, 28, 37, 46, 29, 38, 47]
                    )
                })

                it('indexes for 4', () => {
                    expect(sudoku.squareIndexes(4)).toEqual(
                        [30, 39, 48, 31, 40, 49, 32, 41, 50]
                    )
                })

                it('indexes for 6', () => {
                    expect(sudoku.squareIndexes(6)).toEqual(
                        [54, 63, 72, 55, 64, 73, 56, 65, 74]
                    )
                })

                it('indexes for 8', () => {
                    expect(sudoku.squareIndexes(8)).toEqual(
                        [60, 69, 78, 61, 70, 79, 62, 71, 80]
                    )
                })
            })

            describe('row', () => {
                it('indexes for 0', () => {
                    expect(sudoku.rowIndexes(0)).toEqual(
                        [0, 1, 2, 3, 4, 5, 6, 7, 8]
                    )
                })

                it('indexes for 3', () => {
                    expect(sudoku.rowIndexes(3)).toEqual(
                        [27, 28, 29, 30, 31, 32, 33, 34, 35]
                    )
                })

                it('indexes for 4', () => {
                    expect(sudoku.rowIndexes(4)).toEqual(
                        [36, 37, 38, 39, 40, 41, 42, 43, 44]
                    )
                })

                it('indexes for 6', () => {
                    expect(sudoku.rowIndexes(6)).toEqual(
                        [54, 55, 56, 57, 58, 59, 60, 61, 62]
                    )
                })

                it('indexes for 8', () => {
                    expect(sudoku.rowIndexes(8)).toEqual(
                        [72, 73, 74, 75, 76, 77, 78, 79, 80]
                    )
                })
            })

            describe('column', () => {
                it('indexes for 0', () => {
                    expect(sudoku.columnIndexes(0)).toEqual(
                        [0, 9, 18, 27, 36, 45, 54, 63, 72]
                    )
                })

                it('indexes for 3', () => {
                    expect(sudoku.columnIndexes(3)).toEqual(
                        [3, 12, 21, 30, 39, 48, 57, 66, 75]
                    )
                })

                it('indexes for 4', () => {
                    expect(sudoku.columnIndexes(4)).toEqual(
                        [4, 13, 22, 31, 40, 49, 58, 67, 76]
                    )
                })

                it('indexes for 6', () => {
                    expect(sudoku.columnIndexes(6)).toEqual(
                        [6, 15, 24, 33, 42, 51, 60, 69, 78]
                    )
                })

                it('indexes for 8', () => {
                    expect(sudoku.columnIndexes(8)).toEqual(
                        [8, 17, 26, 35, 44, 53, 62, 71, 80]
                    )
                })
            })

            it('get indexes', () => {
                expect(sudoku.getIndexes('square', 0)).toEqual(
                    [0, 9, 18, 1, 10, 19, 2, 11, 20]
                )
                expect(sudoku.getIndexes('square', 4)).toEqual(
                    [30, 39, 48, 31, 40, 49, 32, 41, 50]
                )
                expect(sudoku.getIndexes('column', 8)).toEqual(
                    [8, 17, 26, 35, 44, 53, 62, 71, 80]
                )
                expect(sudoku.getIndexes('column', 6)).toEqual(
                    [6, 15, 24, 33, 42, 51, 60, 69, 78]
                )
                expect(sudoku.getIndexes('row', 6)).toEqual(
                    [54, 55, 56, 57, 58, 59, 60, 61, 62]
                )
                expect(sudoku.getIndexes('row', 3)).toEqual(
                    [27, 28, 29, 30, 31, 32, 33, 34, 35]
                )
            })
        })

        it('gets a list of blank spots', () => {
            expect(Object.keys(sudoku.blanks)).toEqual([
                "3", "4", "6", "7", 
                "9", "10", "13", "15", "16", 
                "18", "21", "25", "26",
                "27", "28", "29", "30", "32", 
                "37", "38", "40", "41", "42", "44", 
                "50", "51", "52", "53",
                "58", "59", "60", "62",
                "63", "64", "65", "66", "68", "69", 
                "73", "75", "77", "79", "80"
            ])
            expect(sudoku.blanks[3].typesToCheck).toEqual(['row', 'column', 'square'])
            expect(sudoku.blanks[3].options).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])

            expect(sudoku.blanks[9].typesToCheck).toEqual(['row', 'column', 'square'])
            expect(sudoku.blanks[9].options).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])

            expect(sudoku.blanks[28].typesToCheck).toEqual(['row', 'column', 'square'])
            expect(sudoku.blanks[28].options).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])

            expect(sudoku.blanks[59].typesToCheck).toEqual(['row', 'column', 'square'])
            expect(sudoku.blanks[59].options).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])

            expect(sudoku.blanks[79].typesToCheck).toEqual(['row', 'column', 'square'])
            expect(sudoku.blanks[79].options).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])

            expect(sudoku.blanks[0]).toEqual(undefined)
            expect(sudoku.blanks[0]).toEqual(undefined)

            expect(sudoku.blanks[12]).toEqual(undefined)
            expect(sudoku.blanks[12]).toEqual(undefined)

            expect(sudoku.blanks[24]).toEqual(undefined)
            expect(sudoku.blanks[24]).toEqual(undefined)

            expect(sudoku.blanks[54]).toEqual(undefined)
            expect(sudoku.blanks[54]).toEqual(undefined)

            expect(sudoku.blanks[61]).toEqual(undefined)
            expect(sudoku.blanks[61]).toEqual(undefined)

            expect(sudoku.blanks[74]).toEqual(undefined)
            expect(sudoku.blanks[74]).toEqual(undefined)
        })

        it('returns values in section', () => {
            expect(sudoku.valuesInSection('row', 0)).toEqual([3, 7, 4, 6, 5])
        })

        it('finds the row for a specific location', () => {
            expect(sudoku.findSectionIndex('row', 0)).toEqual(0)
            expect(sudoku.findSectionIndex('row', 8)).toEqual(0)
            expect(sudoku.findSectionIndex('row', 13)).toEqual(1)
            expect(sudoku.findSectionIndex('row', 23)).toEqual(2)
            expect(sudoku.findSectionIndex('row', 43)).toEqual(4)
            expect(sudoku.findSectionIndex('row', 50)).toEqual(5)
            expect(sudoku.findSectionIndex('row', 61)).toEqual(6)
            expect(sudoku.findSectionIndex('row', 70)).toEqual(7)
            expect(sudoku.findSectionIndex('row', 80)).toEqual(8)
        })

        it('finds the column for a specific location', () => {
            expect(sudoku.findSectionIndex('column', 0)).toEqual(0)
            expect(sudoku.findSectionIndex('column', 8)).toEqual(8)
            expect(sudoku.findSectionIndex('column', 13)).toEqual(4)
            expect(sudoku.findSectionIndex('column', 23)).toEqual(5)
            expect(sudoku.findSectionIndex('column', 43)).toEqual(7)
            expect(sudoku.findSectionIndex('column', 50)).toEqual(5)
            expect(sudoku.findSectionIndex('column', 61)).toEqual(7)
            expect(sudoku.findSectionIndex('column', 70)).toEqual(7)
            expect(sudoku.findSectionIndex('column', 80)).toEqual(8)
        })

        it('finds the square for a specific location', () => {
            expect(sudoku.findSectionIndex('square', 0)).toEqual(0)
            expect(sudoku.findSectionIndex('square', 8)).toEqual(2)
            expect(sudoku.findSectionIndex('square', 13)).toEqual(1)
            expect(sudoku.findSectionIndex('square', 23)).toEqual(1)
            expect(sudoku.findSectionIndex('square', 43)).toEqual(5)
            expect(sudoku.findSectionIndex('square', 50)).toEqual(4)
            expect(sudoku.findSectionIndex('square', 61)).toEqual(8)
            expect(sudoku.findSectionIndex('square', 70)).toEqual(8)
            expect(sudoku.findSectionIndex('square', 80)).toEqual(8)
        })
    })

    describe('spot', () => {
        it('knows if a spot is given', () => {
            const grid = sudoku.grid;
            const givens = sudoku.givens;
            grid.forEach((number, index) => {
                if (grid[index] !== 0) {
                    expect(givens[index]).toBeTruthy()
                    expect(sudoku.isGiven(index)).toBeTruthy()
                    expect(sudoku.value(index)).toEqual(number)
                } else {
                    expect(givens[index]).toBeFalsy()
                    expect(sudoku.isGiven(index)).toBeFalsy()
                    expect(sudoku.value(index)).toEqual(undefined)
                }
            })
        })
    })

    describe('settings', () => {
        it('has a grid', () => {
            expect(sudoku.grid).toEqual(easyPuzzle1)
            expect(sudoku.numbers).toEqual(9)
        })

        it('can set a different grid', () => {
            const sudoku = new Sudoku(easyPuzzle2)
            expect(sudoku.grid).toEqual(easyPuzzle2)
            expect(sudoku.numbers).toEqual(9)
        })

        it('can set a grid of a different size', () => {
            const sudoku = new Sudoku(sixBySix1)
            expect(sudoku.grid).toEqual(sixBySix1)
            expect(sudoku.numbers).toEqual(6)
        })
    })

    describe('check for number', () => {
        it('check in row', () => {
            expect(sudoku.check('row', 0, 7)).toBeTruthy()
            expect(sudoku.check('row', 1, 7)).toBeFalsy()
            expect(sudoku.check('row', 2, 7)).toBeTruthy()

            expect(sudoku.check('row', 3, 7)).toBeFalsy()
            expect(sudoku.check('row', 4, 7)).toBeTruthy()
            expect(sudoku.check('row', 5, 7)).toBeFalsy()

            expect(sudoku.check('row', 6, 7)).toBeTruthy()
            expect(sudoku.check('row', 7, 7)).toBeFalsy()
            expect(sudoku.check('row', 8, 7)).toBeTruthy()

            expect(sudoku.check('row', 0, 3)).toBeTruthy()
            expect(sudoku.check('row', 1, 3)).toBeFalsy()
            expect(sudoku.check('row', 2, 3)).toBeFalsy()

            expect(sudoku.check('row', 3, 3)).toBeTruthy()
            expect(sudoku.check('row', 4, 3)).toBeFalsy()
            expect(sudoku.check('row', 5, 3)).toBeTruthy()

            expect(sudoku.check('row', 6, 3)).toBeTruthy()
            expect(sudoku.check('row', 7, 3)).toBeFalsy()
            expect(sudoku.check('row', 8, 3)).toBeTruthy()
        })

        it('check in square', () => {
            expect(sudoku.check('square', 0, 7)).toBeTruthy()
            expect(sudoku.check('square', 1, 7)).toBeTruthy()
            expect(sudoku.check('square', 2, 7)).toBeFalsy()

            expect(sudoku.check('square', 3, 7)).toBeTruthy()
            expect(sudoku.check('square', 4, 7)).toBeFalsy()
            expect(sudoku.check('square', 5, 7)).toBeFalsy()

            expect(sudoku.check('square', 6, 7)).toBeTruthy()
            expect(sudoku.check('square', 7, 7)).toBeFalsy()
            expect(sudoku.check('square', 8, 7)).toBeTruthy()

            expect(sudoku.check('square', 0, 3)).toBeTruthy()
            expect(sudoku.check('square', 1, 3)).toBeFalsy()
            expect(sudoku.check('square', 2, 3)).toBeFalsy()

            expect(sudoku.check('square', 3, 3)).toBeTruthy()
            expect(sudoku.check('square', 4, 3)).toBeFalsy()
            expect(sudoku.check('square', 5, 3)).toBeTruthy()

            expect(sudoku.check('square', 6, 3)).toBeFalsy()
            expect(sudoku.check('square', 7, 3)).toBeTruthy()
            expect(sudoku.check('square', 8, 3)).toBeTruthy()
        })

        it('check in column', () => {
            expect(sudoku.check('column', 0, 7)).toBeTruthy()
            expect(sudoku.check('column', 1, 7)).toBeTruthy()
            expect(sudoku.check('column', 2, 7)).toBeTruthy()

            expect(sudoku.check('column', 3, 7)).toBeFalsy()
            expect(sudoku.check('column', 4, 7)).toBeTruthy()
            expect(sudoku.check('column', 5, 7)).toBeFalsy()

            expect(sudoku.check('column', 6, 7)).toBeFalsy()
            expect(sudoku.check('column', 7, 7)).toBeTruthy()
            expect(sudoku.check('column', 8, 7)).toBeFalsy()

            expect(sudoku.check('column', 0, 3)).toBeTruthy()
            expect(sudoku.check('column', 1, 3)).toBeTruthy()
            expect(sudoku.check('column', 2, 3)).toBeFalsy()

            expect(sudoku.check('column', 3, 3)).toBeTruthy()
            expect(sudoku.check('column', 4, 3)).toBeFalsy()
            expect(sudoku.check('column', 5, 3)).toBeFalsy()

            expect(sudoku.check('column', 6, 3)).toBeTruthy()
            expect(sudoku.check('column', 7, 3)).toBeTruthy()
            expect(sudoku.check('column', 8, 3)).toBeFalsy()
        })
    })
})