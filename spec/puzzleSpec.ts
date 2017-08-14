import {Sudoku} from '../src/sudoku'
import { easyPuzzle1, easyPuzzle2, sixBySix1} from '../src/puzzles'
import {} from 'jasmine';

describe('sudoku board', () => {
    let sudoku: Sudoku;
    beforeEach(() => {
        sudoku = new Sudoku();
    })

    describe('steps', () => {
        // check a number in a column
        describe('column', () => { 
            xit('marks a processing step for a particular column')

            xit('marks the active column')

            xit('marks the comparison points')

            xit('marks the impossible squares')
        })

        // check a number in a row
        xdescribe('row', () => { })

        // check a number in a square
        xdescribe('square', () => { })
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
                expect(sudoku.nextSection()).toEqual(0)
                expect(sudoku.section).toEqual(0)
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
                expect(sudoku.nextActiveNumber()).toEqual(1)
                expect(sudoku.activeNumber).toEqual(1)
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
                xit('knows square 0', () => {
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

                xit('knows square 8', () => {
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

                xit('knows square 3', () => {
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
        })

        xit('knows if spot is current number being analyzed')

        xit('knows if spot is impossible')

        xdescribe('knows if a spot is empty', () => { })

        xdescribe('knows if a spot is filled by logic', () => { })
    })

    describe('settings', () => {
        xdescribe('knows how many numbers', () => { })

        xdescribe('follows step pattern', () => { })

        xdescribe('knows square size', () => { })

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

    xdescribe('process', () => {
        xdescribe('moves through steps', () => { })

        xdescribe('knows if stuck', () => { })

        xdescribe('knows what to do at the end of a section', () => { })

        xdescribe('knows what to do at the end of a type', () => { })

        xdescribe('knows what to do at the end of a number', () => { })
    })
})