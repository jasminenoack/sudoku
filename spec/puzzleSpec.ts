import { Sudoku } from '../src/sudoku'
import { easy1, easy2, sixBySix1 } from '../src/puzzles'
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
                        [0, 1, 2, 9, 10, 11, 18, 19, 20]
                    )
                })

                it('indexes for 3', () => {
                    expect(sudoku.squareIndexes(3)).toEqual(
                        [27, 28, 29, 36, 37, 38, 45, 46, 47]
                    )
                })

                it('indexes for 4', () => {
                    expect(sudoku.squareIndexes(4)).toEqual(
                        [30, 31, 32, 39, 40, 41, 48, 49, 50]
                    )
                })

                it('indexes for 6', () => {
                    expect(sudoku.squareIndexes(6)).toEqual(
                        [54, 55, 56, 63, 64, 65, 72, 73, 74]
                    )
                })

                it('indexes for 8', () => {
                    expect(sudoku.squareIndexes(8)).toEqual(
                        [60, 61, 62, 69, 70, 71, 78, 79, 80]
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
                    [0, 1, 2, 9, 10, 11, 18, 19, 20]
                )
                expect(sudoku.getIndexes('square', 4)).toEqual(
                    [30, 31, 32, 39, 40, 41, 48, 49, 50]
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
            expect(sudoku.blanks[3]).toEqual([])

            expect(sudoku.blanks[9]).toEqual([])

            expect(sudoku.blanks[28]).toEqual([])

            expect(sudoku.blanks[59]).toEqual([])

            expect(sudoku.blanks[79]).toEqual([])

            expect(sudoku.blanks[0]).toEqual(undefined)

            expect(sudoku.blanks[12]).toEqual(undefined)

            expect(sudoku.blanks[24]).toEqual(undefined)

            expect(sudoku.blanks[54]).toEqual(undefined)

            expect(sudoku.blanks[61]).toEqual(undefined)

            expect(sudoku.blanks[74]).toEqual(undefined)
        })

        it('returns values in section', () => {
            expect(sudoku.valuesInSection('row', 0)).toEqual([3, 4, 5, 6, 7])
        })

        it('returns values in current section', () => {
            expect(sudoku.valuesInCurrentSection()).toEqual([3, 4, 5, 6, 7])
        })

        it('finds the index for the current section', () => {
            expect(sudoku.currentSectionIndex()).toEqual(0)
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

        it('get options returns options from blanks array', () => {
            sudoku.blanks[5] = [1, 3, 6]
            expect(sudoku.getOptions(5)).toEqual([1, 3, 6])
        })

        it('get options returns options from step array', () => {
            sudoku.step.stepValues = [1, 3, 6]
            expect(sudoku.getOptions(3)).toEqual([1, 3, 6])
        })

        it('returns empty array if called on unknown', () => {
            expect(sudoku.getOptions(0)).toEqual([])
        })
    })

    describe('settings', () => {
        it('has a grid', () => {
            expect(sudoku.grid).toEqual(easy1)
            expect(sudoku.numbers).toEqual(9)
        })

        it('can set a different grid', () => {
            const sudoku = new Sudoku(easy2)
            expect(sudoku.grid).toEqual(easy2)
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

    describe('step', () => {
        it('has a step', () => {
            expect(sudoku.step).toEqual({
                stepSections: ['row', 'column', 'square'],
                stepPhases: ["showActive", "showCompare"],
                stepType: "setUpBlanks",
                stepIndexes: [
                    "3", "4", "6", "7",
                    "9", "10", "13", "15", "16",
                    "18", "21", "25", "26",
                    "27", "28", "29", "30", "32",
                    "37", "38", "40", "41", "42", "44",
                    "50", "51", "52", "53",
                    "58", "59", "60", "62",
                    "63", "64", "65", "66", "68", "69",
                    "73", "75", "77", "79", "80"
                ],
                stepValues: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                stepValuesToRemove: []
            })
            expect(sudoku.getToRemove()).toEqual([])
        }) 

        describe('does processes from showActive to showCompare', () => {
            it('moves from show to compare on row', () => {
                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    stepSections: ['row', 'column', 'square'],
                    stepPhases: ["showCompare"],
                    stepType: "setUpBlanks",
                    stepIndexes: [
                        "3", "4", "6", "7",
                        "9", "10", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                    stepValuesToRemove: [3, 4, 5, 6, 7]
                })
                expect(sudoku.getToRemove()).toEqual([3, 4, 5, 6, 7])
            })

            it('moves from show to compare on column', () => {
                sudoku.step.stepSections = ['column']
                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    stepSections: ['column'],
                    stepPhases: ["showCompare"],
                    stepType: "setUpBlanks",
                    stepIndexes: [
                        "3", "4", "6", "7",
                        "9", "10", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                    stepValuesToRemove: [2, 3, 8, 9]
                })
                expect(sudoku.getToRemove()).toEqual([2, 3, 8, 9])
            })

            it('moves from show to compare on square', () => {
                sudoku.step.stepSections = ['square']
                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    stepSections: ['square'],
                    stepPhases: ["showCompare"],
                    stepType: "setUpBlanks",
                    stepIndexes: [
                        "3", "4", "6", "7",
                        "9", "10", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                    stepValuesToRemove: [5, 6, 7, 8, 9]
                })
            })

            it('does not attempt to remove numbers that are not there', () => {
                sudoku.step.stepSections = ['square']
                sudoku.step.stepValues = [1, 2, 3, 4, 5, 6]
                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    stepSections: ['square'],
                    stepPhases: ["showCompare"],
                    stepType: "setUpBlanks",
                    stepIndexes: [
                        "3", "4", "6", "7",
                        "9", "10", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [1, 2, 3, 4, 5, 6],
                    stepValuesToRemove: [5, 6]
                })
            }) 
        })
        describe('it processes from showCompare to showActive', () => {
            it('row', () => {
                sudoku.step = {
                    stepSections: ['row', 'column', 'square'],
                    stepPhases: ["showCompare"],
                    stepType: "setUpBlanks",
                    stepIndexes: [
                        "3", "4", "6", "7",
                        "9", "10", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                    stepValuesToRemove: [3, 7, 4, 6, 5]
                }
                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    stepSections: ['column', 'square'],
                    stepPhases: ["showActive", "showCompare"],
                    stepType: "setUpBlanks",
                    stepIndexes: [
                        "3", "4", "6", "7",
                        "9", "10", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [1, 2, 8, 9],
                    stepValuesToRemove: []
                })
                expect(sudoku.blanks[3]).toEqual([])
            })

            it('column', () => {
                sudoku.step = {
                    stepSections: ['column', 'square'],
                    stepPhases: ["showCompare"],
                    stepType: "setUpBlanks",
                    stepIndexes: [
                        "3", "4", "6", "7",
                        "9", "10", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [1, 2, 8, 9],
                    stepValuesToRemove: [2, 9]
                }
                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    stepSections: ['square'],
                    stepPhases: ["showActive", "showCompare"],
                    stepType: "setUpBlanks",
                    stepIndexes: [
                        "3", "4", "6", "7",
                        "9", "10", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [1, 8],
                    stepValuesToRemove: []
                })
                expect(sudoku.blanks[3]).toEqual([])
            })

            it('square', () => {
                sudoku.step = {
                    stepSections: ['square'],
                    stepPhases: ["showCompare"],
                    stepType: "setUpBlanks",
                    stepIndexes: [
                        "3", "4", "6", "7",
                        "9", "10", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [1, 3, 8],
                    stepValuesToRemove: [8]
                }
                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    stepSections: ['row', 'column', 'square'],
                    stepPhases: ["showActive", "showCompare"],
                    stepType: "setUpBlanks",
                    stepIndexes: [
                        "4", "6", "7",
                        "9", "10", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                    stepValuesToRemove: []
                })
                expect(sudoku.blanks[3]).toEqual([1, 3])
            })

            it('moves into the place phase if there is only one number left', () => {
                sudoku.step = {
                    stepSections: ['column', 'square'],
                    stepPhases: ["showCompare"],
                    stepType: "setUpBlanks",
                    stepIndexes: [
                        "3", "4", "6", "7",
                        "9", "10", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [1, 2, 8, 9],
                    stepValuesToRemove: [2, 8, 9]
                }
                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    stepSections: ["row", "column", "square"],
                    stepPhases: ["place"],
                    stepType: "place",
                    stepIndexes: [
                        "3", "4", "6", "7",
                        "9", "10", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [1],
                    stepValuesToRemove: []
                })
                expect(sudoku.blanks[3]).toEqual(undefined)
                expect(sudoku.value(3)).toEqual(1)
            })

            it('does handles no removal necessary', () => {
                sudoku.step = {
                    stepSections: ['column', 'square'],
                    stepPhases: ["showCompare"],
                    stepType: "setUpBlanks",
                    stepIndexes: [
                        "3", "4", "6", "7",
                        "9", "10", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [1, 2, 8, 9],
                    stepValuesToRemove: [2, 8, 9]
                }
                // switch to place
                sudoku.takeStep()
                // switch to show active
                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    stepSections: ["column", "square"],
                    stepPhases: ["showCompare"],
                    stepType: "remove",
                    stepIndexes: [
                        "3", "4", "6", "7",
                        "9", "10", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [1],
                    stepValuesToRemove: [], 
                    stepSpotsToRemoveFrom: []
                })

                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    stepSections: ["square"],
                    stepPhases: ["showCompare"],
                    stepType: "remove",
                    stepIndexes: [
                        "3", "4", "6", "7",
                        "9", "10", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [1],
                    stepValuesToRemove: [],
                    stepSpotsToRemoveFrom: []
                })

                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    stepSections: [],
                    stepPhases: ["search"],
                    stepType: "findSingle",
                    stepIndexes: [
                        "4", "6", "7",
                        "9", "10", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [],
                    stepValuesToRemove: [],
                    stepSpotsToRemoveFrom: []
                })
            })

            it('does steps for remove', () => {
                sudoku.blanks[4] = [1, 2, 3]
                sudoku.blanks[2] = [4, 5, 3]
                sudoku.blanks[12] = [1, 2, 3]
                sudoku.blanks[21] = [4, 5, 6]
                sudoku.blanks[13] = [1, 2, 3]
                sudoku.blanks[14] = [4, 5, 6]
                sudoku.blanks[17] = [1]
                sudoku.step = {
                    stepSections: ['column', 'square'],
                    stepPhases: ["showCompare"],
                    stepType: "setUpBlanks",
                    stepIndexes: [
                        "3", "4", "6", "7",
                        "9", "10", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [1, 2, 8, 9],
                    stepValuesToRemove: [2, 8, 9]
                }
                // switch to place
                sudoku.takeStep()
                // switch to show active
                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    stepSections: ["row", "column", "square"],
                    stepPhases: ["showActive", "showCompare"],
                    stepType: "remove",
                    stepIndexes: [
                        "3", "4", "6", "7",
                        "9", "10", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [1],
                    stepValuesToRemove: [],
                    stepSpotsToRemoveFrom: [4]
                })

                // switch to show compare
                sudoku.takeStep()
                expect(sudoku.blanks[4]).toEqual([2, 3])
                expect(sudoku.step).toEqual({
                    stepSections: ["column", "square"],
                    stepPhases: ["showCompare"],
                    stepType: "remove",
                    stepIndexes: [
                        "3", "4", "6", "7",
                        "9", "10", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [1],
                    stepValuesToRemove: [],
                    stepSpotsToRemoveFrom: []
                })

                // switch to show active
                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    stepSections: ["column", "square"],
                    stepPhases: ["showActive", "showCompare"],
                    stepType: "remove",
                    stepIndexes: [
                        "3", "4", "6", "7",
                        "9", "10", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [1],
                    stepValuesToRemove: [],
                    stepSpotsToRemoveFrom: [12]
                })

                // switch to show compare
                sudoku.takeStep()
                expect(sudoku.blanks[12]).toEqual([2, 3])
                expect(sudoku.step).toEqual({
                    stepSections: ["square"],
                    stepPhases: ["showCompare"],
                    stepType: "remove",
                    stepIndexes: [
                        "3", "4", "6", "7",
                        "9", "10", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [1],
                    stepValuesToRemove: [],
                    stepSpotsToRemoveFrom: []
                })

                // switch to show active
                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    stepSections: ["square"],
                    stepPhases: ["showActive", "showCompare"],
                    stepType: "remove",
                    stepIndexes: [
                        "3", "4", "6", "7",
                        "9", "10", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [1],
                    stepValuesToRemove: [],
                    stepSpotsToRemoveFrom: [13]
                })

                // switch to show compare
                sudoku.takeStep()
                expect(sudoku.blanks[13]).toEqual([2, 3])
                expect(sudoku.step).toEqual({
                    stepSections: [],
                    stepPhases: ["search"],
                    stepType: "findSingle",
                    stepIndexes: [
                        "4", "6", "7",
                        "9", "10", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [],
                    stepValuesToRemove: [],
                    stepSpotsToRemoveFrom: []
                })
            })
        })

        it('knows active number', () => {
            expect(sudoku.activeSpot()).toEqual(3)
        })

        it('knows active type', () => {
            expect(sudoku.activeType()).toEqual('row')
        })

        it('knows active phase', () => {
            expect(sudoku.activePhase()).toEqual('showActive')
        })

        describe('knows if spot is part of current analysis section', () => {
            describe('knows if in current active row', () => {
                it('knows row 0', () => {
                    sudoku.step.stepSections = ['row']
                    sudoku.step.stepIndexes = ["2"]
                    expect(sudoku.inActiveSection(0)).toBeTruthy()
                    expect(sudoku.inActiveSection(1)).toBeTruthy()
                    expect(sudoku.inActiveSection(2)).toBeTruthy()
                    expect(sudoku.inActiveSection(3)).toBeTruthy()
                    expect(sudoku.inActiveSection(4)).toBeTruthy()
                    expect(sudoku.inActiveSection(5)).toBeTruthy()
                    expect(sudoku.inActiveSection(6)).toBeTruthy()
                    expect(sudoku.inActiveSection(7)).toBeTruthy()
                    expect(sudoku.inActiveSection(8)).toBeTruthy()

                    expect(sudoku.inActiveSection(9)).toBeFalsy()
                    expect(sudoku.inActiveSection(11)).toBeFalsy()
                    expect(sudoku.inActiveSection(15)).toBeFalsy()
                    expect(sudoku.inActiveSection(20)).toBeFalsy()
                    expect(sudoku.inActiveSection(60)).toBeFalsy()
                    expect(sudoku.inActiveSection(80)).toBeFalsy()
                })

                it('knows row 8', () => {
                    sudoku.step.stepSections = ['row']
                    sudoku.step.stepIndexes = ["74"]
                    expect(sudoku.inActiveSection(72)).toBeTruthy()
                    expect(sudoku.inActiveSection(73)).toBeTruthy()
                    expect(sudoku.inActiveSection(74)).toBeTruthy()
                    expect(sudoku.inActiveSection(75)).toBeTruthy()
                    expect(sudoku.inActiveSection(76)).toBeTruthy()
                    expect(sudoku.inActiveSection(77)).toBeTruthy()
                    expect(sudoku.inActiveSection(78)).toBeTruthy()
                    expect(sudoku.inActiveSection(79)).toBeTruthy()
                    expect(sudoku.inActiveSection(80)).toBeTruthy()

                    expect(sudoku.inActiveSection(9)).toBeFalsy()
                    expect(sudoku.inActiveSection(11)).toBeFalsy()
                    expect(sudoku.inActiveSection(15)).toBeFalsy()
                    expect(sudoku.inActiveSection(20)).toBeFalsy()
                    expect(sudoku.inActiveSection(60)).toBeFalsy()
                    expect(sudoku.inActiveSection(1)).toBeFalsy()
                })

                it('knows row 3', () => {
                    sudoku.step.stepSections = ['row']
                    sudoku.step.stepIndexes = ["27"]
                    expect(sudoku.inActiveSection(27)).toBeTruthy()
                    expect(sudoku.inActiveSection(28)).toBeTruthy()
                    expect(sudoku.inActiveSection(29)).toBeTruthy()
                    expect(sudoku.inActiveSection(30)).toBeTruthy()
                    expect(sudoku.inActiveSection(31)).toBeTruthy()
                    expect(sudoku.inActiveSection(32)).toBeTruthy()
                    expect(sudoku.inActiveSection(33)).toBeTruthy()
                    expect(sudoku.inActiveSection(34)).toBeTruthy()
                    expect(sudoku.inActiveSection(35)).toBeTruthy()

                    expect(sudoku.inActiveSection(9)).toBeFalsy()
                    expect(sudoku.inActiveSection(11)).toBeFalsy()
                    expect(sudoku.inActiveSection(15)).toBeFalsy()
                    expect(sudoku.inActiveSection(20)).toBeFalsy()
                    expect(sudoku.inActiveSection(60)).toBeFalsy()
                    expect(sudoku.inActiveSection(1)).toBeFalsy()
                })
            })

            describe('knows if in current active column', () => {
                it('knows column 0', () => {
                    sudoku.step.stepSections = ['column']
                    sudoku.step.stepIndexes = ["9"]
                    expect(sudoku.inActiveSection(0)).toBeTruthy()
                    expect(sudoku.inActiveSection(9)).toBeTruthy()
                    expect(sudoku.inActiveSection(18)).toBeTruthy()
                    expect(sudoku.inActiveSection(27)).toBeTruthy()
                    expect(sudoku.inActiveSection(36)).toBeTruthy()
                    expect(sudoku.inActiveSection(45)).toBeTruthy()
                    expect(sudoku.inActiveSection(54)).toBeTruthy()
                    expect(sudoku.inActiveSection(63)).toBeTruthy()
                    expect(sudoku.inActiveSection(72)).toBeTruthy()

                    expect(sudoku.inActiveSection(10)).toBeFalsy()
                    expect(sudoku.inActiveSection(11)).toBeFalsy()
                    expect(sudoku.inActiveSection(15)).toBeFalsy()
                    expect(sudoku.inActiveSection(20)).toBeFalsy()
                    expect(sudoku.inActiveSection(60)).toBeFalsy()
                    expect(sudoku.inActiveSection(80)).toBeFalsy()
                })

                it('knows column 8', () => {
                    sudoku.step.stepSections = ['column']
                    sudoku.step.stepIndexes = ["71"]
                    expect(sudoku.inActiveSection(8)).toBeTruthy()
                    expect(sudoku.inActiveSection(17)).toBeTruthy()
                    expect(sudoku.inActiveSection(26)).toBeTruthy()
                    expect(sudoku.inActiveSection(35)).toBeTruthy()
                    expect(sudoku.inActiveSection(44)).toBeTruthy()
                    expect(sudoku.inActiveSection(53)).toBeTruthy()
                    expect(sudoku.inActiveSection(62)).toBeTruthy()
                    expect(sudoku.inActiveSection(71)).toBeTruthy()
                    expect(sudoku.inActiveSection(80)).toBeTruthy()

                    expect(sudoku.inActiveSection(9)).toBeFalsy()
                    expect(sudoku.inActiveSection(11)).toBeFalsy()
                    expect(sudoku.inActiveSection(15)).toBeFalsy()
                    expect(sudoku.inActiveSection(20)).toBeFalsy()
                    expect(sudoku.inActiveSection(60)).toBeFalsy()
                    expect(sudoku.inActiveSection(1)).toBeFalsy()
                })

                it('knows column 3', () => {
                    sudoku.step.stepSections = ['column']
                    sudoku.step.stepIndexes = ["21"]
                    expect(sudoku.inActiveSection(3)).toBeTruthy()
                    expect(sudoku.inActiveSection(12)).toBeTruthy()
                    expect(sudoku.inActiveSection(21)).toBeTruthy()
                    expect(sudoku.inActiveSection(30)).toBeTruthy()
                    expect(sudoku.inActiveSection(39)).toBeTruthy()
                    expect(sudoku.inActiveSection(48)).toBeTruthy()
                    expect(sudoku.inActiveSection(57)).toBeTruthy()
                    expect(sudoku.inActiveSection(66)).toBeTruthy()
                    expect(sudoku.inActiveSection(75)).toBeTruthy()

                    expect(sudoku.inActiveSection(9)).toBeFalsy()
                    expect(sudoku.inActiveSection(11)).toBeFalsy()
                    expect(sudoku.inActiveSection(15)).toBeFalsy()
                    expect(sudoku.inActiveSection(20)).toBeFalsy()
                    expect(sudoku.inActiveSection(60)).toBeFalsy()
                    expect(sudoku.inActiveSection(1)).toBeFalsy()
                })
            })

            describe('knows if in current active square', () => {
                it('knows square 0', () => {
                    sudoku.step.stepSections = ['square']
                    sudoku.step.stepIndexes = ["11"]
                    expect(sudoku.inActiveSection(0)).toBeTruthy()
                    expect(sudoku.inActiveSection(1)).toBeTruthy()
                    expect(sudoku.inActiveSection(2)).toBeTruthy()
                    expect(sudoku.inActiveSection(9)).toBeTruthy()
                    expect(sudoku.inActiveSection(10)).toBeTruthy()
                    expect(sudoku.inActiveSection(11)).toBeTruthy()
                    expect(sudoku.inActiveSection(18)).toBeTruthy()
                    expect(sudoku.inActiveSection(19)).toBeTruthy()
                    expect(sudoku.inActiveSection(20)).toBeTruthy()

                    expect(sudoku.inActiveSection(3)).toBeFalsy()
                    expect(sudoku.inActiveSection(12)).toBeFalsy()
                    expect(sudoku.inActiveSection(15)).toBeFalsy()
                    expect(sudoku.inActiveSection(21)).toBeFalsy()
                    expect(sudoku.inActiveSection(60)).toBeFalsy()
                    expect(sudoku.inActiveSection(80)).toBeFalsy()
                })

                it('knows square 8', () => {
                    sudoku.step.stepSections = ['square']
                    sudoku.step.stepIndexes = ["79"]
                    expect(sudoku.inActiveSection(60)).toBeTruthy()
                    expect(sudoku.inActiveSection(61)).toBeTruthy()
                    expect(sudoku.inActiveSection(62)).toBeTruthy()
                    expect(sudoku.inActiveSection(69)).toBeTruthy()
                    expect(sudoku.inActiveSection(70)).toBeTruthy()
                    expect(sudoku.inActiveSection(71)).toBeTruthy()
                    expect(sudoku.inActiveSection(78)).toBeTruthy()
                    expect(sudoku.inActiveSection(79)).toBeTruthy()
                    expect(sudoku.inActiveSection(80)).toBeTruthy()

                    expect(sudoku.inActiveSection(9)).toBeFalsy()
                    expect(sudoku.inActiveSection(11)).toBeFalsy()
                    expect(sudoku.inActiveSection(15)).toBeFalsy()
                    expect(sudoku.inActiveSection(20)).toBeFalsy()
                    expect(sudoku.inActiveSection(63)).toBeFalsy()
                    expect(sudoku.inActiveSection(1)).toBeFalsy()
                })

                it('knows square 4', () => {
                    sudoku.step.stepSections = ['square']
                    sudoku.step.stepIndexes = ["31"]
                    expect(sudoku.inActiveSection(30)).toBeTruthy()
                    expect(sudoku.inActiveSection(31)).toBeTruthy()
                    expect(sudoku.inActiveSection(32)).toBeTruthy()
                    expect(sudoku.inActiveSection(39)).toBeTruthy()
                    expect(sudoku.inActiveSection(40)).toBeTruthy()
                    expect(sudoku.inActiveSection(41)).toBeTruthy()
                    expect(sudoku.inActiveSection(48)).toBeTruthy()
                    expect(sudoku.inActiveSection(49)).toBeTruthy()
                    expect(sudoku.inActiveSection(50)).toBeTruthy()

                    expect(sudoku.inActiveSection(9)).toBeFalsy()
                    expect(sudoku.inActiveSection(11)).toBeFalsy()
                    expect(sudoku.inActiveSection(14)).toBeFalsy()
                    expect(sudoku.inActiveSection(20)).toBeFalsy()
                    expect(sudoku.inActiveSection(60)).toBeFalsy()
                    expect(sudoku.inActiveSection(1)).toBeFalsy()
                })
            })
        })

        describe('search', () => {
            it('if finds a single in search goes to place for that index', () => {
                sudoku.step = {
                    stepSections: [],
                    stepPhases: ["search"],
                    stepType: "findSingle",
                    stepIndexes: [
                        "3", "4", "6", "7",
                        "9", "10", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [],
                    stepValuesToRemove: [],
                    stepSpotsToRemoveFrom: []
                }
                sudoku.blanks[10] = [3]
                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    stepSections: ["row", "column", 'square'],
                    stepPhases: ["place"],
                    stepType: "place",
                    stepIndexes: [
                        "10", "3", "4", "6", "7",
                        "9", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [3],
                    stepValuesToRemove: [],
                    stepSpotsToRemoveFrom: []
                })
                expect(sudoku.value(10)).toEqual(3)
            })

            it('if no singles goes back to processing blanks', () => {
                sudoku.step = {
                    stepSections: [],
                    stepPhases: ["search"],
                    stepType: "findSingle",
                    stepIndexes: [
                        "3", "4", "6", "7",
                        "9", "10", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [1],
                    stepValuesToRemove: [],
                    stepSpotsToRemoveFrom: []
                }
                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    stepSections: ['row', 'column', 'square'],
                    stepPhases: ["showActive", "showCompare"],
                    stepType: "setUpBlanks",
                    stepIndexes: [
                        "3", "4", "6", "7",
                        "9", "10", "13", "15", "16",
                        "18", "21", "25", "26",
                        "27", "28", "29", "30", "32",
                        "37", "38", "40", "41", "42", "44",
                        "50", "51", "52", "53",
                        "58", "59", "60", "62",
                        "63", "64", "65", "66", "68", "69",
                        "73", "75", "77", "79", "80"
                    ],
                    stepValues: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                    stepValuesToRemove: [],
                    stepSpotsToRemoveFrom: []
                })
                expect(sudoku.getToRemove()).toEqual([])
            })
        })

        describe("sectionSingle", () => {
            beforeEach(() => {
                sudoku.grid = [0, 0, 9, 0, 0, 0, 0, 5, 8, 1, 0, 0, 0, 4, 0, 6, 3, 2, 0, 0, 6, 0, 0, 0, 9, 7, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 9, 0, 5, 8, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 5, 7, 0, 0, 1, 6, 0, 0, 0, 0, 0, 0, 0, 2, 0, 8, 6, 0, 0, 2, 0, 0, 0, 4, 0, 0, 0]
                sudoku.step = {
                    "stepSections":["row","column","square"],
                    "stepPhases":["showActive","showCompare"],
                    "stepType":"setUpBlanks",
                    "stepIndexes":[],
                    "stepValues":[1,2,3,4,5,6,7,8,9],
                    "stepValuesToRemove":[],
                    "stepSpotsToRemoveFrom":[]
                }
                sudoku.blanks = {
                    "0":[2,3,4,7],
                    "1":[3,4],
                    "3":[2,3,6,7],
                    "4":[3,6,7],
                    "5":[1,2,3,7],
                    "6":[1,4],
                    "10":[5,8],
                    "11":[5,7,8],
                    "12":[5,7,9],
                    "14":[5,7,8,9],
                    "18":[2,3,4,8],
                    "19":[3,4,5,8],
                    "21":[2,3,5],
                    "22":[3,5,8],
                    "23":[1,2,3,5,8],
                    "26":[1,4],
                    "27":[3,4,6,7,8,9],
                    "28":[3,4,5,6,8,9],
                    "29":[3,4,5,7,8],
                    "31":[3,5,6,7],
                    "32":[3,5,7],
                    "34":[4,9],
                    "35":[3,4,6,7,9],
                    "36":[2,3,4,6,7],
                    "37":[1,3,4,6],
                    "38":[1,2,3,4,7],
                    "39":[2,3,4,6,7],
                    "41":[2,3,7],
                    "44":[1,3,4,6,7],
                    "45":[2,3,4,6,7,9],
                    "46":[1,3,4,5,6,9],
                    "47":[1,2,3,4,5,7],
                    "49":[3,5,6,7],
                    "50":[2,3,5,7],
                    "51":[1,3,4,7],
                    "52":[1,4,9],
                    "53":[1,3,4,6,7,9],
                    "56":[3,4,8],
                    "57":[3,9],
                    "60":[3,4],
                    "61":[2,4,9],
                    "62":[3,4,9],
                    "63":[3,4,9],
                    "64":[1,3,4,9],
                    "65":[1,3,4],
                    "66":[3,5,7,9],
                    "68":[3,5,7,9],
                    "71":[1,3,4,5,7,9],
                    "72":[3,6,8,9],
                    "74":[1,3,8],
                    "75":[3,5,7,9],
                    "76":[3,5,7,8],
                    "78":[1,3,7],
                    "79":[1,9],
                    "80":[1,3,5,7,9]}
                }
            )
            it("if in setupBlanks runs out of steps moves to sectionSingle", () => {
                sudoku.takeStep()
                // step values become active section
                // step section is section type
                expect(sudoku.step).toEqual({
                    "stepSections":["row","column","square"],
                    "stepPhases":["showActive"],
                    "stepType": "sectionSingle",
                    "stepIndexes":[],
                    "stepValues":[0, 1, 2, 3, 4, 5, 6, 7, 8],
                    "stepValuesToRemove":[],
                    "stepSpotsToRemoveFrom":[],
                    "valuesToPlace": {}
                })
                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    "stepSections":["row","column","square"],
                    "stepPhases":["showActive"],
                    "stepType": "sectionSingle",
                    "stepIndexes":[],
                    "stepValues":[1, 2, 3, 4, 5, 6, 7, 8],
                    "stepValuesToRemove":[],
                    "stepSpotsToRemoveFrom":[],
                    "valuesToPlace": {}
                })
                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    "stepSections":["row","column","square"],
                    "stepPhases":["showActive"],
                    "stepType": "sectionSingle",
                    "stepIndexes":[],
                    "stepValues":[2, 3, 4, 5, 6, 7, 8],
                    "stepValuesToRemove":[],
                    "stepSpotsToRemoveFrom":[],
                    "valuesToPlace": {}
                })
                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    "stepSections":["row","column","square"],
                    "stepPhases":["showActive"],
                    "stepType": "sectionSingle",
                    "stepIndexes":[],
                    "stepValues":[3, 4, 5, 6, 7, 8],
                    "stepValuesToRemove":[],
                    "stepSpotsToRemoveFrom":[],
                    "valuesToPlace": {}
                })
                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    "stepSections":["row","column","square"],
                    "stepPhases":["showActive"],
                    "stepType": "sectionSingle",
                    "stepIndexes":[],
                    "stepValues":[4, 5, 6, 7, 8],
                    "stepValuesToRemove":[],
                    "stepSpotsToRemoveFrom":[],
                    "valuesToPlace": {}
                })
                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    "stepSections":["row","column","square"],
                    "stepPhases":["showActive"],
                    "stepType": "sectionSingle",
                    "stepIndexes":[],
                    "stepValues":[5, 6, 7, 8],
                    "stepValuesToRemove":[],
                    "stepSpotsToRemoveFrom":[],
                    "valuesToPlace": {}
                })
                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    "stepSections":["row","column","square"],
                    "stepPhases":["showActive"],
                    "stepType": "sectionSingle",
                    "stepIndexes":[],
                    "stepValues":[6, 7, 8],
                    "stepValuesToRemove":[],
                    "stepSpotsToRemoveFrom":[],
                    "valuesToPlace": {56: 8, 61: 2}
                })

                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    "stepSections":["column","square"],
                    "stepPhases":["place"],
                    "stepType": "place",
                    "stepIndexes":["56"],
                    "stepValues":[8],
                    "stepValuesToRemove":[],
                    "stepSpotsToRemoveFrom":[],
                    "valuesToPlace": {61: 2}
                })
                expect(sudoku.blanks[56]).toEqual(undefined)
                expect(sudoku.value(56)).toEqual(8)

                // switch to show active
                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    stepSections: ["column", "square"],
                    stepPhases: ["showActive", "showCompare"],
                    stepType: "remove",
                    "stepIndexes":["56"],
                    "stepValues":[8],
                    "stepValuesToRemove":[],
                    "stepSpotsToRemoveFrom":[11, 29, 74],
                    "valuesToPlace": {61: 2}
                })

                // switch to show compare
                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    stepSections: ["square"],
                    stepPhases: ["showCompare"],
                    stepType: "remove",
                    "stepIndexes":["56"],
                    "stepValues":[8],
                    "stepValuesToRemove":[],
                    "stepSpotsToRemoveFrom":[],
                    "valuesToPlace": {61: 2}
                })

                // switch to show active
                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    stepSections: ["square"],
                    stepPhases: ["showActive", "showCompare"],
                    stepType: "remove",
                    "stepIndexes":["56"],
                    "stepValues":[8],
                    "stepValuesToRemove":[],
                    "stepSpotsToRemoveFrom":[72],
                    "valuesToPlace": {61: 2}
                })

                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    "stepSections":["row","column"],
                    "stepPhases":["place"],
                    "stepType": "place",
                    "stepIndexes":["61"],
                    "stepValues":[2],
                    "stepValuesToRemove":[],
                    "stepSpotsToRemoveFrom":[],
                    "valuesToPlace": { }
                })
                expect(sudoku.blanks[61]).toEqual(undefined)
                expect(sudoku.value(61)).toEqual(2)

                // switch to show active
                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    stepSections: ["column"],
                    stepPhases: ["showCompare"],
                    stepType: "remove",
                    "stepIndexes":["61"],
                    "stepValues":[2],
                    "stepValuesToRemove":[],
                    "stepSpotsToRemoveFrom":[],
                    "valuesToPlace": { }
                })

                // switch to show compare
                sudoku.takeStep()
                expect(sudoku.step).toEqual({
                    stepSections: [],
                    stepPhases: ["search"],
                    stepType: "findSingle",
                    "stepIndexes":[],
                    "stepValues":[],
                    "stepValuesToRemove":[],
                    "stepSpotsToRemoveFrom":[],
                    "valuesToPlace": { }
                })
            })
        })
    })

    it("bug", () => {
        sudoku.step = { 
            "stepSections": [], 
            "stepPhases": ["search"], 
            "stepType": "findSingle", 
            "stepIndexes": ["21", "25", "26", "27", "28", "29", "30", "32", "37", "38", "40", "41", "42", "44", "50", "51", "52", "53", "58", "59", "60", "62", "63", "64", "65", "66", "68", "69", "73", "75", "77", "79", "80"], 
            "stepValues": [], 
            "stepValuesToRemove": [], 
            "stepSpotsToRemoveFrom": [] 
        }
        sudoku.blanks = { "6": [8, 9], "7": [8, 9], "9": [1], "10": [1, 6], "15": [2, 6, 7], "16": [2, 6], "21": [], "25": [], "26": [], "27": [], "28": [], "29": [], "30": [], "32": [], "37": [], "38": [], "40": [], "41": [], "42": [], "44": [], "50": [], "51": [], "52": [], "53": [], "58": [], "59": [], "60": [], "62": [], "63": [], "64": [], "65": [], "66": [], "68": [], "69": [], "73": [], "75": [], "77": [], "79": [], "80": [] }
        sudoku.grid = [3, 7, 4, 1, 2, 6, 0, 0, 5, 0, 0, 5, 8, 3, 9, 0, 0, 4, 2, 9, 8, 0, 7, 5, 1, 0, 0, 0, 0, 0, 0, 1, 0, 4, 3, 9, 7, 0, 0, 9, 0, 0, 0, 5, 0, 6, 3, 9, 2, 5, 0, 0, 0, 0, 9, 8, 6, 3, 0, 0, 0, 7, 0, 0, 0, 0, 0, 9, 0, 0, 4, 2, 4, 0, 7, 0, 6, 0, 3, 0, 0]

        sudoku.takeStep()
        expect(sudoku.step).toEqual({
            "stepSections": ["row", "column", "square"],
            "stepPhases": ["place"],
            "stepType": "place",
            "stepIndexes": ["9", "21", "25", "26", "27", "28", "29", "30", "32", "37", "38", "40", "41", "42", "44", "50", "51", "52", "53", "58", "59", "60", "62", "63", "64", "65", "66", "68", "69", "73", "75", "77", "79", "80"],
            "stepValues": [1],
            "stepValuesToRemove": [],
            "stepSpotsToRemoveFrom": []
        })
    })

    describe('numbers in parts', () => {
        beforeEach(() => {
            sudoku.blanks = {
                0: [1, 4],
                1: [3, 5],
                2: [3, 6, 8],

                3: [2, 4],
                4: [1, 9],
                5: [4, 7],

                6: [2, 4],
                7: [3, 8],
                8: [3],

                9: [2, 6],
                10: [1, 7],
                11: [1, 9],

                18: [2, 6],
                19: [1, 2],
                20: [1, 6],

                27: [3, 4],
                36: [4],
                45: [5, 7],

                54: [6, 7],
                63: [6, 3],
                72: [4, 5] 

            }
        })

        it('finds numbers in square parts', () => {
            expect(sudoku.numbersInSquareParts(0)).toEqual({
                rowFindings: [
                    {
                        indexes: [0, 1, 2],
                        compareIndexes: [3, 4, 5, 6, 7, 8],
                        options: [1, 3, 4, 5, 6, 8],
                    }, {
                        indexes: [9, 10, 11],
                        compareIndexes: [12, 13, 14, 15, 16, 17],
                        options: [1, 2, 6, 7, 9],
                    }, {
                        indexes: [18, 19, 20],
                        compareIndexes: [21, 22, 23, 24, 25, 26],
                        options: [1, 2, 6]
                    }, 
                ],
                columnFindings: [
                    {
                        indexes: [0, 9, 18],
                        compareIndexes: [27, 36, 45, 54, 63, 72],
                        options: [1, 2, 4, 6],
                    }, {
                        indexes: [1, 10, 19],
                        compareIndexes: [28, 37, 46, 55, 64, 73],
                        options: [1, 2, 3, 5, 7],
                    }, {
                        indexes: [2, 11, 20],
                        compareIndexes: [29, 38, 47, 56, 65, 74],
                        options: [1, 3, 6, 8, 9]
                    }
                ]
            })
        })

        xit('finds numbers in row parts', () => {
            expect(sudoku.numbersInRowParts(0)).toEqual([
                {
                    indexes: [0, 1, 2],
                    compareIndexes: [9, 10, 11, 18, 19, 20],
                    options: [1, 3, 4, 5, 6, 8],
                },
                {
                    indexes: [3, 4, 5],
                    compareIndexes: [12, 13, 14, 21, 22, 23],
                    options: [1, 2, 4, 7, 9],
                },
                {
                    indexes: [6, 7, 8],
                    compareIndexes: [15, 16, 17, 24, 25, 26],
                    options: [2, 3, 4, 8]
                }
            ])
        })

        xit('finds numbers in column parts', () => {
            expect(sudoku.numbersInColumnParts(0)).toEqual([
                {
                    indexes: [0, 9, 18],
                    compareIndexes: [1, 2, 10, 11, 19, 20],
                    options: [1, 2, 4, 6],
                },
                {
                    indexes: [27, 36, 45],
                    compareIndexes: [28, 29, 37, 38, 46, 47],
                    options: [3, 4, 5, 7],
                }, 
                {
                    indexes: [54, 63, 72],
                    compareIndexes: [55, 56, 64, 65, 73, 74],
                    options: [3, 4, 5, 6, 7]
                }
            ])
        })

        xit('determines numbers in subsection to evaluate square', () => {
            expect(sudoku.subSectionsToEvaluate("square", 0)).toEqual([
                {
                    indexesToCompare: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                    indexesToIgnore: [0, 1, 2],
                    numbersToRemove: [3, 4, 5, 8],
                }, 
                {
                    indexesToCompare: [9, 10, 11, 12, 13, 14, 15, 16, 17],
                    indexesToIgnore: [9, 10, 11],
                    numbersToRemove: [7, 9],
                },
                {
                    indexesToCompare: [0, 9, 18, 27, 36, 45, 54, 63, 72],
                    indexesToIgnore: [0, 9, 18],
                    numbersToRemove: [4],
                },
                {
                    indexesToCompare: [1, 10, 19, 28, 37, 46, 55, 64, 73],
                    indexesToIgnore: [1, 10, 19],
                    numbersToRemove: [5, 7],
                },
                {
                    indexesToCompare: [2, 11, 20, 29, 38, 47, 56, 65, 74],
                    indexesToIgnore: [2, 11, 20],
                    numbersToRemove: [8, 9],
                },
            ])
        })

        xit('determines numbers in subsection to evaluate row', () => {
            expect(sudoku.subSectionsToEvaluate("row", 0)).toEqual([
                {
                    indexesToCompare: [0, 1, 2, 9, 10, 11, 18, 19, 20],
                    indexesToIgnore: [0, 1, 2],
                    numbersToRemove: [5, 6],
                },
                {
                    indexesToCompare: [3, 4, 5, 12, 13, 14, 21, 22, 23],
                    indexesToIgnore: [3, 4, 5],
                    numbersToRemove: [7, 9],
                }
            ])
        })

        xit('determines numbers in subsection to evaluate column', () => {
            expect(sudoku.subSectionsToEvaluate("column", 0)).toEqual([
                {
                    indexesToCompare: [0, 9, 18, 27, 36, 45, 54, 63, 72],
                    indexesToIgnore: [0, 9, 18],
                    numbersToRemove: [1, 2],
                },
            ])
        })
    })
})