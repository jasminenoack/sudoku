import {Sudoku} from '../src/sudoku'
import { easyPuzzle1, easyPuzzle2, sixBySix1} from '../src/puzzles'
import {} from 'jasmine';

describe('sudoku board', () => {
    let sudoku: Sudoku;
    beforeEach(() => {
        sudoku = new Sudoku();
    })

    describe('utils', () => {
        // knows what numbers are complete
        it('has a place to track finished numbers', () => { 
            expect(sudoku.finishedNumbers).toEqual([])
        })

        describe('active section', () => { 
            it('starts with section 0 active', () => {
                expect(sudoku.section).toEqual(0)
            })

            it('changes to the next active section when triggered to', () => {
                expect(sudoku.section).toEqual(0)
                expect(sudoku.nextSection()).toEqual(1)
                expect(sudoku.section).toEqual(1)
            })

            it('changes from section 8 to section 0 if next is triggered', () => {
                sudoku.section = 8
                expect(sudoku.section).toEqual(8)
                expect(sudoku.type).toEqual('row')
                expect(sudoku.nextSection()).toEqual(0)
                expect(sudoku.section).toEqual(0)
                expect(sudoku.type).toEqual('column')
            })

            it('can have different numbers of sections', () => {
                sudoku.numbers = 6
                sudoku.section = 4
                expect(sudoku.section).toEqual(4)
                expect(sudoku.nextSection()).toEqual(5)
                expect(sudoku.section).toEqual(5)
                expect(sudoku.nextSection()).toEqual(0)
                expect(sudoku.section).toEqual(0)
            })
        })

        describe('active type', () => { 
            it('has an active type', () => {
                expect(sudoku.type).toEqual('row')
            })

            it('has cycles through types', () => {
                expect(sudoku.type).toEqual('row')
                expect(sudoku.nextType()).toEqual('column')
                expect(sudoku.type).toEqual('column')
                expect(sudoku.nextType()).toEqual('square')
                expect(sudoku.type).toEqual('square')
                expect(sudoku.nextType()).toEqual('row')
            })

            it('can take a different pattern of types', () => {
                sudoku.typePattern = ['column', 'row', 'square']
                expect(sudoku.type).toEqual('row')
                expect(sudoku.nextType()).toEqual('square')
                expect(sudoku.type).toEqual('square')
                expect(sudoku.nextType()).toEqual('column')
                expect(sudoku.type).toEqual('column')
                expect(sudoku.nextType()).toEqual('row')
            })
        })

        describe('active number', () => { 
            it('current active number', () => {
                expect(sudoku.activeNumber).toEqual(1)
            })

            it('moves to the next number', () => {
                expect(sudoku.activeNumber).toEqual(1)
                expect(sudoku.nextActiveNumber()).toEqual(2)
                expect(sudoku.activeNumber).toEqual(2)
            })

            it('resets numbers', () => {
                sudoku.activeNumber = 9
                expect(sudoku.activeNumber).toEqual(9)
                expect(sudoku.section).toEqual(0)
                expect(sudoku.nextActiveNumber()).toEqual(1)
                expect(sudoku.activeNumber).toEqual(1)
                expect(sudoku.section).toEqual(1)
            })

            it('skips finished numbers', () => {
                expect(sudoku.activeNumber).toEqual(1)
                sudoku.finishedNumbers = [2]
                expect(sudoku.nextActiveNumber()).toEqual(3)
                expect(sudoku.activeNumber).toEqual(3)
                expect(sudoku.nextActiveNumber()).toEqual(4)
                expect(sudoku.activeNumber).toEqual(4)
            })
        })

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
        })

        it('gets a list of empty spots in current section', () => {
            expect(sudoku.optionSpots).toEqual(
                {
                    3: ['row', 'column', 'square'],
                    4: ['row', 'column', 'square'],
                    6: ['row', 'column', 'square'],
                    7: ['row', 'column', 'square'],
                }
            )
        })

        it('knows if spot is empty', () => {
            expect(sudoku.isOption(3)).toBeTruthy()
            expect(sudoku.isOption(7)).toBeTruthy()
            expect(sudoku.isOption(1)).toBeFalsy()
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

        describe('knows if spot is part of current analysis section', () => {
            describe('knows if in current active row', () => {
                it('knows row 0', () => {
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
                    sudoku.section = 8
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
                    sudoku.section = 3
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
                    sudoku.type = "column"
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
                    sudoku.type = "column"
                    sudoku.section = 8
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
                    sudoku.type = "column"
                    sudoku.section = 3
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
                    sudoku.type = "square"
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
                    sudoku.section = 8
                    sudoku.type = "square"
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

                it('knows square 3', () => {
                    sudoku.section = 4
                    sudoku.type = "square"
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

    describe('takes steps', () => {
        xit('steps through a number looking for an exclusion', () => {

        })

        xit('stops when an exclusion is found', () => {

        })

        xit('stops if it determines the correct location', () => {

        })
    })
})